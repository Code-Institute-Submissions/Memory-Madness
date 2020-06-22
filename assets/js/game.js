const cards = document.querySelectorAll(".card");
const cardreset = document.querySelectorAll(".card");
const refEasyBtn = document.getElementById("start-easy");
const refMediumBtn = document.getElementById("start-medium");
const refHardBtn = document.getElementById("start-hard");
const refXHardBtn = document.getElementById("start-extrahard");
const button5 = document.getElementById("reset");
const gameboard = document.getElementById("board");
const bcards = document.getElementsByClassName("bcard");
let clicks = 1;
let firstcard;
let secondcard;
let card;
let countAdd = 0;
//let badgeImg = "";
let boardLock = false;
let allCards = false;
let isFirstCard = false;
let cardMatchArray = [];

//start


/*function cardLock() {
cards.forEach(function(card) {
  card.removeEventListener("click", turn);
});}*/


button5.addEventListener("click", resetGame);
    function resetGame() {
        shufflecards();
    document.getElementById("win").classList.add("none");
    document.getElementById("lose").classList.add("none");
    document.getElementById("time").innerHTML = "Good Luck";
    document.getElementById("rotate-count").innerHTML = "Ready";
    document.getElementById("flying").classList.remove("flyingHarry");
    document.getElementById("flying").classList.remove("dementor");
    cardMatchArray = [];
    isFirstCard = false;
    secondcard = null;
    countAdd = 0;
    cards.forEach(function (card) {
    card.addEventListener("click", turn);
    });
    cards.forEach(function (card) {
    card.addEventListener("click", clicker);
    });

    $("div").removeClass("rotate"); 

  refEasyBtn.addEventListener("click", timerEasy);
  refMediumBtn.addEventListener("click", timerMedium);
  refHardBtn.addEventListener("click", timerHard);
  refXHardBtn.addEventListener("click", timerExtraHard);
}




//timer

refEasyBtn.addEventListener("click", timerEasy);
function timerEasy() {
    resetGame();
    let time = 12;
    setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer easy");
    }
  if (cardMatchArray.length === 16 && remtime > 0) {
      clearInterval(time);
    document.getElementById("win").classList.remove("none");
    document.getElementById("time").innerHTML = "Winner";
    document.getElementById("flying").classList.add("flyingHarry");
    clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
    });
    console.log("winner");
}

    if (cardMatchArray.length !== 16 && remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    document.getElementById("time").innerHTML = "Game Over";
    document.getElementById("flying").classList.add("dementor");
    console.log("lose");
      clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
});
    }
  }, 1000);
 /* button1.removeEventListener("click", timerEasy);
  button2.removeEventListener("click", timerMedium);
  button3.removeEventListener("click", timerHard);
  button4.removeEventListener("click", timerExtraHard);*/
}


//--------------------------------------------------------------------------------------------------------------



refMediumBtn.addEventListener("click", timerMedium);
function timerMedium() {
    resetGame();
    let time = 90;
    setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer easy");
    }
  if (cardMatchArray.length === 16 && remtime > 0) {
      clearInterval(time);
    document.getElementById("win").classList.remove("none");
    document.getElementById("time").innerHTML = "Winner";
    document.getElementById("flying").classList.add("flyingHarry");
    clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
    });
    console.log("winner");
}

    if (cardMatchArray.length !== 16 && remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    document.getElementById("time").innerHTML = "Game Over";
    document.getElementById("flying").classList.add("dementor");
    console.log("lose");
      clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
});
    }
  }, 1000);}

refHardBtn.addEventListener("click", timerHard);
function timerHard() {
    resetGame();
    let time = 60;
    setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer easy");
    }
  if (cardMatchArray.length === 16 && remtime > 0) {
      clearInterval(time);
    document.getElementById("win").classList.remove("none");
    document.getElementById("time").innerHTML = "Winner";
    document.getElementById("flying").classList.add("flyingHarry");
    clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
    });
    console.log("winner");
}

    if (cardMatchArray.length !== 16 && remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    document.getElementById("time").innerHTML = "Game Over";
    document.getElementById("flying").classList.add("dementor");
    console.log("lose");
      clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
});
    }
  }, 1000);}

refXHardBtn.addEventListener("click", timerExtraHard);
function timerExtraHard() {
    resetGame();
    let time = 30;
    setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer easy");
    }
  if (cardMatchArray.length === 16 && remtime > 0) {
      clearInterval(time);
    document.getElementById("win").classList.remove("none");
    document.getElementById("time").innerHTML = "Winner";
    document.getElementById("flying").classList.add("flyingHarry");
    clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
    });
    console.log("winner");
}

    if (cardMatchArray.length !== 16 && remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    document.getElementById("time").innerHTML = "Game Over";
    document.getElementById("flying").classList.add("dementor");
    console.log("lose");
      clearInterval(time);
    cards.forEach(function(card) {
    card.removeEventListener("click", clicker);
});
    }

  }, 1000);}

//turning / matching cards

cards.forEach(function (card) {
  card.addEventListener("click", turn);
});
function turn() {
  if (boardLock)
    return;
  this.classList.add("rotate");
  if (!isFirstCard) {
    isFirstCard = true;
    firstcard = this;
    console.log("first card");
  } else {
    isFirstCard = false;
    secondcard = this;

    console.log("second card");


    if (firstcard.dataset.colours === secondcard.dataset.colours) {
      firstcard.removeEventListener("click", turn);
      secondcard.removeEventListener("click", turn);
      playWand();
      resetBoard();
      cardMatchArray.push("firstcard");
      cardMatchArray.push("secondcard");
      console.log(cardMatchArray);
    } else {
        boardLock = true;
      setTimeout(function() {
        firstcard.classList.remove("rotate");
        secondcard.classList.remove("rotate");
        boardLock = false;
        resetBoard();
      }, 800);
    }
  }
}

//count cards clicked

cards.forEach(function(card) {
  card.addEventListener("click", clicker);
});

function clicker() {
  clicksAdd = clicks++;
  let countAdd = document.getElementById("rotate-count");
  countAdd.innerText = clicksAdd;
  
  console.log("clicks counted");
}

//shuffle cards----taken from youtube channel
//
function shufflecards() {
  cards.forEach(function (card) {
    let randomPosition = Math.floor(Math.random() * 16);
    card.style.order = randomPosition;
  });
  console.log("Shuffle cards");
}

//Game Over

/*function gameOver() {
      if (remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    console.log("lose");
  }
}
}*/

//Win
/*function win() {
  if (cardMatchArray.length === 16 && remtime > 0) {
    document.getElementById("win").classList.remove("none");
    console.log("winner");
  }
}*/

//Sound

function resetBoard() {
    firstcard = null;
    secondcard = null;
    isFirstCard = false;
}

function playWand() {
    let wand = new Audio("assets/sound/wand.wav");
    wand.play();
    console.log("sound");
}