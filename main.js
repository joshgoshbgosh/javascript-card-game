"use strict"



class Card {
  constructor({ /////////// card was created here
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
  }
}


class Deck {
  constructor() {
    this.cards = []; //the values of the cards and deck were made


    //const Deck1 = new Deck();
    const suits = ['Spades', 'Diamonds', 'Hearts', 'Club'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card({
          value,
          suit
        }));
      }
    }
    this.shuffle();
  } //code for shuffling card deck was put here.

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
// i'm creating the players of the game here


class Player { //this is my main class set up
  constructor(name,hand) {
    this.name = name;
    this.hand = deck.cards.splice(0,26);
  }
}

const Will_Farrell = new Player();
const Chris_Farley = new Player();
let status = true;
class Game {
  constructor(status){
    this.status = true;
  }
  drawAndPlay (rewards) {
    let p1deck = Will_Farrell.hand
    let p2deck = Chris_Farley.hand
    if (rewards) { console.log('rewards = ', rewards); }
    // if either deck is empty, game over
    if (p1deck.length === 0 || p2deck.length === 0) {
      // game over

      if (p1deck.length > 0) {
        console.log('Will Farrell Won');
      } else {
        console.log('Chris Farley Won');
      }
      return   status = false;
    }
    // draw card from each deck
    var p1card = p1deck.shift(),
      p2card = p2deck.shift(),
      rewards = rewards ? rewards : [];
    console.log("p1", p1card)
    console.log("p2", p2card)
    // compare cards
    if (p1card.value === p2card.value) {
      console.log('war', p1card, p2card);
      // tie
      // play another card
      rewards.push(p1card);
      rewards.push(p2card);
      return this.drawAndPlay(rewards);
    }
    else if (p1card.value > p2card.value) {
      // Player wins
      console.log('Will Farrell wins round', p1card, p2card);

      p1deck.splice(p1deck.length, 0, p1card, p2card);
      if (rewards.length > 0) {
        p1deck = p1deck.concat(rewards);
      }
    }
    else {
      // chris Wins
      console.log('Chris Farley wins round', p1card, p2card);
      // Add point to chris score TODO
      // chrisPoints.setAttribute('data-points', parseInt(cpuPoints.getAttribute('data-points')) + 1)
      // Reward Cards
      p2deck.splice(p2deck.length, 0, p2card, p1card);
      if (rewards.length > 0) {
        p2deck = p2deck.concat(rewards);
      }
    }
    console.log('Will Farrell Cards left = ' + p1deck.length, 'Chris Farley Cards left = ' + p2deck.length);
    return true;
  };
}
/////////////////////////////////////////

//drawAndPlay()
let newGame = new Game()
while (status === true) {
  newGame.drawAndPlay()
}
