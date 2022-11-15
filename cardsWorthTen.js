/**
 * Cecilia Tong
 * Class 4 Exercise & Homework
 * Nov 8st, 2022
 * cardsWorthTen
 */

/**
 3. Create a function cardsWorthTen that uses the array functions above (no regular loops allowed, 
  no array forEach allowed). Will accept an array of cards in the format below. Will return a comma 
  separated string of the displayVals of only those cards worth exactly 10.

{
  val,
  displayVal
  suit
}
 */
const cards = [
  { val: 2, displayVal: "2", suit: "hearts" },
  { val: 3, displayVal: "3", suit: "hearts" },
  { val: 4, displayVal: "4", suit: "hearts" },
  { val: 5, displayVal: "5", suit: "hearts" },
  { val: 6, displayVal: "6", suit: "hearts" },
  { val: 7, displayVal: "7", suit: "hearts" },
  { val: 8, displayVal: "8", suit: "hearts" },
  { val: 9, displayVal: "9", suit: "hearts" },
  { val: 10, displayVal: "10", suit: "hearts" },
  { val: 10, displayVal: "Jack", suit: "hearts" },
  { val: 10, displayVal: "Queen", suit: "hearts" },
  { val: 10, displayVal: "King", suit: "hearts" },
  { val: 11, displayVal: "Ace", suit: "hearts" }
];

/**
 * Function cardsWorthTen()
 * Takes an array of cards and returns a string of the card display
 * values where the value is equal to 10
 *
 * @param {array} cards
 * @return {string} displayVal
 */
const cardsWorthTen = cards => {

//use array.filter() to find card array of cards with value = 10  
let card = cards.filter(card => card.val == 10)

//build myArr array to store only displayVal of cards to display
var myArr = [];
for (let value of card){
 myArr.push(String(value.displayVal));
}
return (`"${myArr}"`);
};

//check the function
console.log(cardsWorthTen(cards));
// should return/log "10, Jack, Queen, King"