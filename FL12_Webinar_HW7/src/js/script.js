import "../scss/style.scss";
import printResults from "./print.js";
import { isWin, isTie } from "./checkout.js";

const SHAPE = ["Rock", "Paper", "Scissors"];
export const MAXROUNDS = 3;
export let counter = 0;
export let wins = 0;
export let ties = 0;

const play = e => {
  if (counter === MAXROUNDS) {
    return;
  }

  const playerShape = e.target.textContent;
  const AIShape = SHAPE[Math.floor(Math.random() * SHAPE.length)];
  let win = false;

  if (isWin(playerShape, AIShape)) {
    wins++;
    win = true;
  }
  if (isTie(playerShape, AIShape)) {
    ties++;
  }
  counter++;
  printResults(playerShape, AIShape, win);
};

document.querySelectorAll(".game-btn").forEach(btn => {
  btn.addEventListener("click", play);
});

document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector(".game").innerHTML = "";
  counter = 0;
  wins = 0;
  ties = 0;
});
