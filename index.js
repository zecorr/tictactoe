"use strict";

// Global Variables
const board = document.querySelectorAll(".btn");
const heading = document.querySelector("#game-title");
const player1Heading = document.querySelector("#winner1");
const player2Heading = document.querySelector("#winner2");
const tieGame = document.querySelector("#tieGame");
const playAgain = document.querySelector("#playAgain");

// Starting condition
let scoreX, scoreO, player1;
scoreX = [];
scoreO = [];
player1 = true;

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
      return false;
    }
  }
  if (player1) {
    heading.classList = "hidden";
    player1Heading.classList.remove("hidden");
    board.forEach((button) =>
      button.removeEventListener("click", switchPlayer)
    );
  } else if (!player1) {
    heading.classList = "hidden";
    player2Heading.classList.remove("hidden");
    board.forEach((button) =>
      button.removeEventListener("click", switchPlayer)
    );
  }
  return true;
};

// Gameplay
const switchPlayer = function () {
  if (player1) {
    this.classList.remove("blank");
    this.classList.add("btn--x");
    scoreX.push(this.id);
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
    this.classList.remove("blank");
    this.classList.add("btn--o");
    scoreO.push(this.id);
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

// Game Board
board.forEach((button) => button.addEventListener("click", switchPlayer));

// Play again button
playAgain.addEventListener("click", function () {
  window.location.reload();
});
