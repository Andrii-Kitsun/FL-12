let game = confirm('Do you want to play a game?');

if (!game) {
  alert('You did not become a billionaire, but can.');
} else {
  while (game) {
    let upperBorderOfRandom = 8;
    let totalPrize = 0;
    let maxPrize = 100;
    let randomNumber = Math.round(Math.random() * upperBorderOfRandom);
    let attemts = 3;
    let currentPrize = maxPrize;

    while (game && attemts !== 0) {
      let message =
        `Choose a roulette pocket number from 0 to ${upperBorderOfRandom} \n` +
        `Attemts left: ${attemts} \n` +
        `Total prize: ${totalPrize}$ \n` +
        `Possible prize on current attemt: ${currentPrize}$ \n`;

      let userNumber = parseInt(prompt(message));

      if (userNumber === randomNumber) {
        const increaseRange = 4;
        const increaseMaxPrize = 2;
        const attemtsCount = 3;

        game = confirm(`Congratulation, you won! Your prize is: ${currentPrize}$ \nDo you want to continue?`);
        totalPrize += currentPrize;
        upperBorderOfRandom += increaseRange;
        maxPrize *= increaseMaxPrize;
        currentPrize = maxPrize;
        attemts = attemtsCount;
        randomNumber = Math.round(Math.random() * upperBorderOfRandom);
      } else {
        const reducePrize = 2;

        currentPrize /= reducePrize;
        attemts--;
      }
    }

    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
    game = confirm('Do you want to play again?');
  }
}