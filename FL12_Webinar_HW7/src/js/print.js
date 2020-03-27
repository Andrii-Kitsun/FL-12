import { MAXROUNDS, counter, wins, ties } from "./script.js";

const printResults = (player, AI, win) => {
  const gameField = document.querySelector(".game");
  const AIWins = MAXROUNDS - wins - ties;
  const winMessage = win ? "WON" : "LOST";

  gameField.innerHTML += `<p>Round ${counter}, ${player} vs. ${AI}, You've ${winMessage}</p>`;

  if (counter === MAXROUNDS) {
    if (wins === AIWins) {
      gameField.innerHTML += `<p>The final result: ${wins} vs. ${AIWins}. The winner is a friendship.</p>`;
    } else {
      const winner = wins > AIWins ? "Player" : "AI";
      gameField.innerHTML += `<p>The final result: ${wins} vs. ${AIWins}. The winner is ${winner}.</p>`;
    }
  }
};

export default printResults;
