/**
 * Cecilia Tong
 * Class 4 Exercise & Homework
 * Nov 8st, 2022
 * BlackJack 
 */

//create blackjackDeck 
const blackjackDeck = getDeck();

/**
 * Class CardPlayer
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
class CardPlayer {
  constructor(name) { //class constructor
    this.name = name;}
    hand = []; //array, init to an empty array
    drawCard()  //method drawCard
    {
      // set randomCard to obj with the values
      let randomCard = Object.values(blackjackDeck);
      randomCard = Math.floor(Math.random() * (blackjackDeck.length - 1));
      this.hand.push(blackjackDeck[randomCard]); //push card to hand
      console.log(`${this.name} drawed card:  
      Value: ${blackjackDeck[randomCard].val} 
      Display value: ${blackjackDeck[randomCard].displayVal}
      Suit: ${blackjackDeck[randomCard].suit}`);
    } //end of drawCard method
}; 

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer("Dealer"); 
const player = new CardPlayer("Player"); 

/**
 * Function calcPoints(hand)
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */
 const calcPoints = (hand) => {

 //define blackJackScore object
 var blackJackScore = {
  total:0,
  isSoft: true,
 }
  //define isSoft variable
  let isSoft = false;

  //loop thr hand to calculate points
  for(let i=0; i<hand.length;i++){
   //conditions to set isSoft and ace (is soft = true if ace = 11 / false if no ace, or ace = 1)
   if(hand[i].displayVal == 'Ace'){ //if there is Ace, if score > 10, set ace = 1
      if(blackJackScore.total > 10){ 
        hand[i].val = 1; //set ace = 1
        blackJackScore.isSoft=false; //set isSoft to false because ace = 1
      }
      else {//Ace = 11, isSoft = true
        hand[i].val = 11;
        blackJackScore.isSoft=true;
      }
   }
   else { //if there is no Ace, isSoft = false
    blackJackScore.isSoft = false;
   }
   //calculate total points of hand
    blackJackScore.total += hand[i].val;
  }
  return (blackJackScore); //return object {total points and isSoft}
}

/**
 * Function dealerShouldDraw(dealerHand)
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */
let dealerShouldDraw = (dealerHand) => {
  // call function calcPoints to check the score of dealer hand
  let calcPointsObj = calcPoints(dealerHand);
  let isSoftResult = calcPointsObj.isSoft;    //find isSoft
  let totalPointResult = calcPointsObj.total; //find total score

  //conditions to draw card or not
  //If the dealer's hand is 16 points or less, the dealer must draw another card
  if(totalPointResult <= 16) { 
    return true; 
  }
  //If the dealer's hand is exactly 17 points, and the dealer has an Ace valued at 11, the dealer must draw another card
  else if (totalPointResult == 17 && isSoftResult == true) {
    return true;
  }
  //If dealer's hand is > 17
  else{
    return false;
  }
}

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  //define the return string
  let string = '';
  if(playerScore > dealerScore){
    string = `player's score = ${playerScore}, dealer's score = ${dealerScore}.  Player wins!`;
  }
  else if(playerScore < dealerScore) {
    string = `player's score = ${playerScore}, dealer's score = ${dealerScore}.  Dealer wins!`;
  }
  else{
    string = `player's score = ${playerScore}, dealer's score = ${dealerScore}.  It's a tie!`;
  }
 return string;
}

/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();
  
  //add logic to automatically win after 2 draws and point = 21
  let playerDrawCount = 0;
  let dealerDrawCount = 0;

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
    playerDrawCount += 1;
    if(playerDrawCount == 2 && playerScore == 21){
      return 'You win!';
    }
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
    dealerDrawCount += 1;
    if(dealerDrawCount == 2 && dealerScore == 21){
      return 'Dealer wins!';
    }
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());