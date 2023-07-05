"use strict";
//Defining constants and variables
let guessNumber = Math.trunc(Math.random() * 20 + 1);
const val = document.querySelector(".guess").value;
let score = 20;
let highScore = 0;

//Clicking the check button
document.querySelector(".check").addEventListener("click", function () {
  const val = Number(document.querySelector(".guess").value);
  console.log(val);
  //No value
  if (!val) {
    document.querySelector(".message").textContent = "NO Guess";
  }
  //When guess is correct
  else if (val === guessNumber) {
    //CSS STYLING
    document.querySelector("body").style.backgroundColor = "#4DD637";
    document.querySelector(".number").style.width = "30rem";
    //JS BACKGROUND
    document.querySelector(".number").textContent = guessNumber;
    document.querySelector(".message").textContent = "Correct Guess";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //When guess is incorrect
  else if (val !== guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber < val ? "High try lower" : "Low try higher";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOSE";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Again button part
document.querySelector(".again").addEventListener("click", function () {
  //Resetting the values
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start Guess";
  //Resetting CSS
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
