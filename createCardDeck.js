/**
 * Cecilia Tong
 * Class 4 Exercise & Homework
 * Nov 8st, 2022
 * createCardDeck
 */

/**
2. Create a function getDeck that returns an array of 52 cards. There are four suits 
(hearts, spades, clubs, diamonds). Each suit will have 13 cards:

    - 2 – 10 will have a val equal to the number
    - 'Jack', 'Queen', and 'King' will all have a val of 10
    - 'Ace' will have a val of 11
*/

/**
 * Function getDeck()
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  var cards = []; //array of 52 cards
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']; //array of 4 suits

  //looping through 13 cards of each suit
  for(let i=0; i<=3; i++){   
      for (let j=2; j<=14;j++){ 
        var card = {} //must be defined here to avoid overwritten
        if (j <= 10){
          card.val = j;
          card.displayVal = String(j);
          card.suit = suits[i];
          cards.push(card);
        }
        else if (j == 11){
          card.val = 10;
          card.displayVal = 'Jack';
          card.suit = suits[i];
          cards.push(card);
        }
        else if (j == 12){
          card.val = 10;
          card.displayVal = 'Queen';
          card.suit = suits[i];
          cards.push(card);
        }
        else if (j == 13){
          card.val = 10;
          card.displayVal = 'King';
          card.suit = suits[i];
          cards.push(card);
          }
        else if (j == 14){
          card.val = 11;
          card.displayVal = 'Ace';
          card.suit = suits[i];
          cards.push(card);
      }
    }
  }
  return cards;
  }

//Display deck to console
console.log(getDeck());

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);