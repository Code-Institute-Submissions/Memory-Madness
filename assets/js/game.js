console.log("Hello");

const cards = document.querySelectorAll(".card");
const button1 = document.getElementById("start-easy");
const button2 = document.getElementById("start-medium");
const button3 = document.getElementById("start-hard");
const button4 = document.getElementById("start-extrahard");
const gameboard = document.getElementById("board");
let clicks = document.getElementById("clicks");
let firstcard;
let secondcard;
let isFirstCard = false;



/*---------------------------------------------------------------start*/

// reset card face

// reset flip count

// reset time

// shuffle cards



/*---------------------------------------------------------------timer*/


button1.addEventListener("click", timerEasy);
function timerEasy() {
  let time = 120;
  setInterval(function () {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer easy");
    }
    if (remtime === 0) {
      alert("out of time");
      clearInterval(time);
    }
  }, 1000);
  button1.removeEventListener("click", timerEasy);
  button2.removeEventListener("click", timerMedium);
  button3.removeEventListener("click", timerHard);
  button4.removeEventListener("click", timerExtraHard);
}

button2.addEventListener("click", timerMedium);
function timerMedium() {
  let time = 90;
  setInterval(function () {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer medium");
    }
    if (remtime === 0) {
      alert("out of time");
      clearInterval(time);
    }
  }, 1000);
  button1.removeEventListener("click", timerEasy);
  button2.removeEventListener("click", timerMedium);
  button3.removeEventListener("click", timerHard);
  button4.removeEventListener("click", timerExtraHard);
}

button3.addEventListener("click", timerHard);
function timerHard() {
  let time = 60;
  setInterval(function () {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer hard");
    }
    if (remtime === 0) {
      alert("out of time");
      clearInterval(time);
    }
  }, 1000);
  button1.removeEventListener("click", timerEasy);
  button2.removeEventListener("click", timerMedium);
  button3.removeEventListener("click", timerHard);
  button4.removeEventListener("click", timerExtraHard);
}

button4.addEventListener("click", timerExtraHard);
function timerExtraHard() {
  let time = 30;
  setInterval(function () {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer extrahard");
    }
    if (remtime === 0) {
      alert("out of time");
      clearInterval(time);
    }
  }, 1000);
  button1.removeEventListener("click", timerEasy);
  button2.removeEventListener("click", timerMedium);
  button3.removeEventListener("click", timerHard);
  button4.removeEventListener("click", timerExtraHard);
}

/*---------------------------------------------------------------turning / matching cards*/

cards.forEach(function (card) {
  card.addEventListener("click", turn);
});

function turn() {
  this.classList.add("rotate");
  if (!isFirstCard) {
    isFirstCard = true;
    firstcard = this;
    console.log("first card");
    console.log(this);
  } else {
    isFirstCard = false;
    secondcard = this;

    console.log("second card");
  }}