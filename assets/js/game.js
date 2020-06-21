const cards = document.querySelectorAll(".card");
const cardreset = document.querySelectorAll(".card");
const button1 = document.getElementById("start-easy");
const button2 = document.getElementById("start-medium");
const button3 = document.getElementById("start-hard");
const button4 = document.getElementById("start-extrahard");
const button5 = document.getElementById("reset");
const gameboard = document.getElementById("board");
const bcards = document.getElementsByClassName("bcard");
let clicks = 1;
let firstcard;
let secondcard;
let card;
//let badgeImg = "";
let allCards = false;
let isFirstCard = false;
let cardMatchArray = [];

/*---------------------------------------------------------------start*/

/*function cardLock() {
cards.forEach(function(card) {
  card.removeEventListener("click", clicker);
});}*/


button5.addEventListener("click", resetGame);
    function resetGame() {
    button1.addEventListener("click", timerEasy);
    document.getElementById("win").classList.add("none");
    document.getElementById("lose").classList.add("none");
    document.getElementById("time").innerHTML = "Good Luck";
    document.getElementById("rotate-count").innerHTML = "Ready";
    document.getElementById("flying").classList.remove("flyingHarry");
    document.getElementById("flying").classList.remove("dementor");
    cardMatchArray = [];
    let clickAdd = 0;

    isFirstCard = false;
    secondcard = null;

    cards.forEach(function (card) {
    card.addEventListener("click", turn);
    });
    cards.forEach(function (card) {
    card.addEventListener("click", clicker);
    });

    $("div").removeClass("rotate");
 
    
  button1.addEventListener("click", timerEasy);
  button2.addEventListener("click", timerMedium);
  button3.addEventListener("click", timerHard);
  button4.addEventListener("click", timerExtraHard);
}
/*$(".reset").click(function() {
    document.location.reload(true);
});*/

//shufflecards();

/*---------------------------------------------------------------timer*/

button1.addEventListener("click", timerEasy);
function timerEasy() {
    resetGame();
    let time = 10;
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



button2.addEventListener("click", timerMedium);
function timerMedium() {
  let time = 90;
  setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer medium");
    }
if (cardMatchArray.length === 16 && remtime > 0) {
    document.getElementById("win").classList.remove("none");
    clearInterval(time);
    document.getElementById("time").innerHTML = "Winner";
    console.log("winner");
clearInterval(time);}
    

    if (remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    console.log("lose");
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
  setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer hard");
    }
if (cardMatchArray.length === 16 && remtime > 0) {
    document.getElementById("win").classList.remove("none");
    clearInterval(time);
    document.getElementById("time").innerHTML = "Winner";
    console.log("winner");}

    if (remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    console.log("lose");
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
  setInterval(function() {
    let remtime = time--;
    if (remtime >= 0) {
      countdown = document.getElementById("time");
      countdown.innerText = remtime;
      console.log("clicked timer extrahard");
    }
if (cardMatchArray.length === 16 && remtime > 0) {
    document.getElementById("win").classList.remove("none");
    clearInterval(time);
    document.getElementById("time").innerHTML = "Winner";
    console.log("winner");}

    if (remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    console.log("lose");
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
  if (this === firstcard)
    return; /* Code for blocking double click taken from youtube freeCodeCamp.org*/
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
      resetBoard();
      cardMatchArray.push("firstcard");
      cardMatchArray.push("secondcard");
      console.log(cardMatchArray);
    } else {
      setTimeout(function() {
        firstcard.classList.remove("rotate");
        secondcard.classList.remove("rotate");
        resetBoard();
      }, 800);
    }
  }
}

/*---------------------------------------------------------------count cards clicked*/


cards.forEach(function(card) {
  card.addEventListener("click", clicker);
});

function clicker() {
  clicksAdd = clicks++;
  let countAdd = document.getElementById("rotate-count");
  countAdd.innerText = clicksAdd;
  
  console.log("clicks counted");
}

/*---------------------------------------------------------------shuffle cards----taken from youtube channel*/
//
function shufflecards() {
  cards.forEach(function (card) {
    let randomPosition = Math.floor(Math.random() * 16);
    card.style.order = randomPosition;
  });
  console.log("Shuffle cards");
}

/*---------------------------------------------------------------Game Over*/

/*function gameOver() {
      if (remtime === 0) {
    document.getElementById("lose").classList.remove("none");
    console.log("lose");
  }
}
}*/

/*---------------------------------------------------------------Win*/
/*function win() {
  if (cardMatchArray.length === 16 && remtime > 0) {
    document.getElementById("win").classList.remove("none");
    console.log("winner");
  }
}*/

function resetBoard() {
    firstcard = null;
    secondcard = null;
    isFirstCard = false;
}


/*button1.addEventListener("click", badgeChange);
function badgeChange() {
    if(button1) {
    let badgeImg = document.querySelectorAll(".card > .bcard");
    badgeImg.classList.add("huff");
    console.log("badge");
    };
    }*/


