export const isWin = (player, AI) => {
  if (player === "Rock" && AI === "Scissors") {
    return true;
  }
  if (player === "Paper" && AI === "Rock") {
    return true;
  }
  if (player === "Scissors" && AI === "Paper") {
    return true;
  }

  return false;
};

export const isTie = (player, AI) => {
  if (player === AI) {
    return true;
  }
};
