
class Card {
  constructor({value, suit}) {
    this.value = value;
    this.suit = suit;
  }
}


class Deck {
  constructor() {
    this.cards = [];

    const suits = ['Spades', 'Diamonds', 'Hearts', 'Club'];
    const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

    for(const suit of suits) {
      for(const value of values) {
        this.cards.push(new Card({value, suit}));
      }
    }
    this.shuffle();
  }

    shuffle() {
      // const deck = this.deck;
    const {
      cards
    } = this;
    let currentIndex = cards.length,
      temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return this;
  }


}

const deck = new Deck();
