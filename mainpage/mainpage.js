
window.onload = function () {
// .hv:hover {
//     cursor: url("./cursor.png"), auto;
//   }
  document.querySelectorAll('.hv').forEach((dom) => {
    dom.addEventListener('mouseover', function (e) {
      const cl = e.currentTarget.classList;
      const bd = document.querySelector('body');

      let color = 'white';

      if (Array.from(cl).indexOf('r1-1') !== -1) {
        color = '#3D3E3C';
      } else if (Array.from(cl).indexOf('r1-2') !== -1) {
        color = '#555757';
      } else if (Array.from(cl).indexOf('r1-3') !== -1) {
        color = '#6A6C6C';
      } else if (Array.from(cl).indexOf('r2-1') !== -1) {
        color = '#868888';
      } else if (Array.from(cl).indexOf('r2-2') !== -1) {
        color = '#A9A7A7';
      } else if (Array.from(cl).indexOf('r3-1') !== -1) {
        color = '#C7C5C5';
      } else if (Array.from(cl).indexOf('r3-2') !== -1) {
        color = '#FF9900';
      } else if (Array.from(cl).indexOf('r3-3') !== -1) {
        color = '#51D1FE';
      }
      const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

      const colorsss = Array(6).fill(0).map(() => {
        return arr[Math.floor(Math.random() * 1000) % 16];
      }).join('');

      e.currentTarget.querySelector('img').style.cursor = `url("./cursor.png"), auto`;
      e.currentTarget.getElementsByTagName('figcaption')[0].style.color = `#${colorsss}`;
      bd.style.backgroundColor = color;
    });

    dom.addEventListener('mouseleave', function (e) {
      e.currentTarget.getElementsByTagName('figcaption')[0].style.color = 'black';
      document.querySelector('body').style.backgroundColor = 'white';
    });
  })
};
