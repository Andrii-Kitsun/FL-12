class Deck {
  constructor() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spaders'];
    this._cards = [];

    suits.forEach(suit => {
      for (let i = 1; i <= 13; i++) {
        this._cards.push(new Card(suit, i));
      }
    })

    this._count = this._cards.length;
  }

  set cards(value) {
    this._cards = value;
  }

  get cards() {
    return this._cards;
  }

  get count() {
    return this._count;
  }

  shuffle() {
    this._cards.sort(() => 0.5 - Math.random());
  }

  draw(n) {
    this._count -= n;
    return this._cards.splice(this._cards.length - n, n);
  }
}

class Card {
  constructor(suit, rank) {
    this._suit = suit;
    this._rank = +rank;
    this._isFaceCard = (+rank === 1 || +rank > 10) ? true : false;
  }

  set suit(value) {
    this._suit = value;
  }

  get suit() {
    return this._suit;
  }

  set rank(value) {
    this._rank = value;
  }

  get rank() {
    return this._rank;
  }

  get isFaceCard() {
    return this._isFaceCard;
  }

  toString() {
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    return `${ranks[this._rank - 1]} of ${this._suit}`;
  }

  static Compare(cardOne, cardTwo) {
    if (cardOne.rank === cardTwo.rank) {
      return 0;
    }

    return cardOne.rank > cardTwo.rank ? 1 : -1;
  }

  compare(card) {
    if (this._rank === card.rank) {
      return 0;
    }

    return this._rank > card.rank ? 1 : -1;
  }
}

class Player {
  constructor(name, deck) {
    this._name = name;
    this._wins = 0;
    this._deck = deck;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get wins() {
    return this._wins;
  }

  set deck(value) {
    this._deck = value;
  }

  get deck() {
    return this._deck;
  }

  static Play(playerOne, playerTwo) {
    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();

    while (playerOne.deck.count) {
      const firstCard = playerOne.deck.draw(1)[0];
      const secondCard = playerTwo.deck.draw(1)[0];

      if (firstCard.compare(secondCard) === 1) {
        playerOne._wins += 1;
      } else {
        playerTwo._wins += 1;
      }

      console.log(`score: ${playerOne._wins} and ${playerTwo._wins}`);
    }

    if (playerOne.wins === playerTwo.wins) {
      return `Tie, score: ${playerOne.wins} and ${playerTwo.wins}`;
    }

    return playerOne.wins > playerTwo.wins ?
      `${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}` :
      `${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`;
  }

  play(playerTwo) {
    this._deck.shuffle();
    playerTwo.deck.shuffle();

    while (this._deck.count) {
      const firstCard = this._deck.draw(1)[0];
      const secondCard = playerTwo.deck.draw(1)[0];

      if (firstCard.compare(secondCard) === 1) {
        this._wins += 1;
      } else {
        playerTwo._wins += 1;
      }

      console.log(`score: ${this._wins} and ${playerTwo._wins}`);
    }

    if (this._wins === playerTwo.wins) {
      return `Tie, score: ${this._wins} and ${playerTwo.wins}`;
    }

    return this._wins > playerTwo.wins
      ? `${this._name} wins ${this._wins} to ${playerTwo.wins}`
      : `${playerTwo.name} wins ${playerTwo.wins} to ${this._wins}`;
  }
}