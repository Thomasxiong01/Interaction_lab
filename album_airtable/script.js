console.log("Is my script file working?");

var Airtable = require("airtable");
console.log(Airtable)

// use the airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyj7RMo1jrIjBKGu" }).base(
  "appPfbi2JyyRZDB5w"
);
//get our collection base, select all the records
//specify functions that will receive the data
base("music").select({}).eachPage(gotPageOfSongs, gotAllSongs);

//an empty array to hold my data
const songs = [];

//callback function that receives omy data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogSongs();
  showSongs();
}

// just loop through the books and console.log them
function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach((song) => {
    console.log("Song:", song);
  });
}

// look through my airtable data, create elements
function showSongs() {
  console.log("showSongs()");
  songs.forEach(song => {
    // create a new div container
    //this is where my song info will go
    var songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    document.querySelector(".container").append(songContainer);

    // add song titles to my song container
    var songTitle = document.createElement("h1");
    songTitle.classList.add("song-title");
    songTitle.innerText = song.fields.album_title;
    songContainer.append(songTitle);

 	var songImage = document.createElement("img");
    songImage.classList.add("song-image");
    songImage.src = song.fields.album_artwork[0].url;
    songContainer.append(songImage);

    var nameOfArtist = document.createElement("p");
    nameOfArtist.classList.add("song-artist");
    nameOfArtist.innerText = song.fields.artist;
    songContainer.append(nameOfArtist);

    //add event listener
    //when user clicks on song container
    //image and description will appear or disappear


    songContainer.addEventListener("click", function(){
    	songImage.classList.toggle("active");


    })


    
   
    });
}

