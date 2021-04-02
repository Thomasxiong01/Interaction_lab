
/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyj7RMo1jrIjBKGu" }).base(
  "appPfbi2JyyRZDB5w"
);

//get the "musics" table from the base, select ALL the records, and specify the functions that will receive the data
base("Music").select({}).eachPage(gotPageOfMusics, gotAllMusics);

// an empty array to hold our music data
const musics = [];

// callback function that receives our data
function gotPageOfMusics(records, fetchNextPage) {
  console.log("gotPageOfMusics()");
  // add the records from this page to our musics array
  musics.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllMusics(err) {
  console.log("gotAllMusics()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading Music");
    console.error(err);
    return;
  }

  // call function to show the musics
  showMusics();
}

/////////////////////////////////////////////////////////////////////////////////



// create the music-spines on the shelf
function showMusics() {
  console.log("showMusics()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the musics loaded from the Airtable API
  musics.forEach((music) => {
    // create the div, set its text and class
	console.log(music);
    const div = document.createElement("div");
    div.innerText = music.fields.album_title;
    div.classList.add("music-spine");
    // when the user clicks this music spine, call showmusic and send the music data and this spine element
    div.addEventListener("click", () => {
      showMusic(music, div);
    });
    // put the newly created music spine on the shelf
    shelf.appendChild(div);
  });
}

// show the detail info for a music, and highlight the active music-spine
function showMusic(music, div) {
  console.log("showMusic()", music);

  // find the music detail element
  const musicDetail = document.getElementById("music-detail");

  // populate the template with the data in the provided music
  musicDetail.getElementsByClassName("title")[0].innerText = music.fields.album_title; //
  musicDetail.getElementsByClassName("description")[0].innerText =
    music.fields.artist;
  musicDetail.getElementsByClassName("more")[0].href = music.fields.url;
  musicDetail.getElementsByClassName("cover-image")[0].src =
    music.fields.album_artwork[0].url;

  // remove the .active class from any music spines that have it...
  const shelf = document.getElementById("shelf");
  const musicSpines = shelf.getElementsByClassName("active");
  for (const musicSpine of musicSpines) {
    musicSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  musicDetail.classList.remove("hidden");
}
