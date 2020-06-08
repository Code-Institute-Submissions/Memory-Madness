console.log("Hello");

const cards = document.querySelectorAll(".card");
const gameboard = document.getElementById("board");
let firstcard;
let secondcard;
let isFirstCard = false;






/*---------------------------------------------------------------turning*/

cards.forEach(function (card) {
  card.addEventListener("click", turn);
});

function turn() {
    if (this === firstcard) return;
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