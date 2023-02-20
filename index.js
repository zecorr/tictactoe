"use strict";

// Playing field
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

// Winning conditions
const win1 = ["one", "two", "three"];
const win2 = ["four", "five", "six"];
const win3 = ["seven", "eight", "nine"];
const win4 = ["one", "four", "seven"];
const win5 = ["two", "five", "eight"];
const win6 = ["three", "six", "nine"];
const win7 = ["one", "five", "nine"];
const win8 = ["three", "five", "seven"];

// Check for win
const checkWin = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      console.log("nope");
      return false;
    }
  }
  if (player1) {
    alert("Player 1 wins!");
  } else if (!player1) {
    alert("Player 2 wins!");
  }
  return true;
};

// Scorecards
const scoreX = [];
const scoreO = [];

// Starting condition
let player1 = true;

// Gameplay
const switchPlayer = function () {
  if (player1) {
    console.log("one X");
    this.classList.remove("blank");
    this.classList.add("btn--x");
    scoreX.push(this.id);
    console.log(scoreX);
    this.removeEventListener("click", switchPlayer);
    if (scoreX.length >= 3) {
      checkWin(win1, scoreX);
      checkWin(win2, scoreX);
      checkWin(win3, scoreX);
      checkWin(win4, scoreX);
      checkWin(win5, scoreX);
      checkWin(win6, scoreX);
      checkWin(win7, scoreX);
      checkWin(win8, scoreX);
    }
    player1 = false;
  } else if (!player1) {
    console.log("one O");
    this.classList.remove("blank");
    this.classList.add("btn--o");
    scoreO.push(this.id);
    console.log(scoreO);
    this.removeEventListener("click", switchPlayer);
    if (scoreO.length >= 3) {
      checkWin(win1, scoreO);
      checkWin(win2, scoreO);
      checkWin(win3, scoreO);
      checkWin(win4, scoreO);
      checkWin(win5, scoreO);
      checkWin(win6, scoreO);
      checkWin(win7, scoreO);
      checkWin(win8, scoreO);
    }
    player1 = true;
  }
};

one.addEventListener("click", switchPlayer);
two.addEventListener("click", switchPlayer);
three.addEventListener("click", switchPlayer);
four.addEventListener("click", switchPlayer);
five.addEventListener("click", switchPlayer);
six.addEventListener("click", switchPlayer);
seven.addEventListener("click", switchPlayer);
eight.addEventListener("click", switchPlayer);
nine.addEventListener("click", switchPlayer);
