setTimeout(() => {
  document.querySelector(".center").classList.toggle("center-none");
}, 5000);

const date = new Date();
let numSec = date.getSeconds() * 6;
let numSmall = date.getMinutes() * 60 * 0.1;
let numBig = date.getHours() * 3600 * 0.00833333;

const second = document.querySelector(".second");
setInterval(function () {
  numSec = numSec + 6;
  second.style.rotate = `${numSec}deg`;
  if (numSec === 360 || numSec >= 360) {
    numSec = 0;
  }
}, 1000);

const small = document.querySelector(".small");
setInterval(function () {
  numSmall = numSmall + 0.1;
  small.style.rotate = `${numSmall}deg`;
  if (numSmall === 360 || numSmall >= 360) {
    numSmall = 0;
  }
}, 1000);

const big = document.querySelector(".big");
setInterval(function () {
  numBig = numBig + 0.00833333;
  big.style.rotate = `${numBig}deg`;
  if (numBig === 360 || numBig >= 360) {
    numBig = 0;
  }
}, 1000);
