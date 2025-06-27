let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let message = "";
let messageEl = document.querySelector("#message-el");
let firstCard = 10;
let secondCard = 12;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.innerHTML = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2];
  sumEl.innerHTML = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You have BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game.";
    isAlive = false;
  }
  messageEl.innerHTML = message;
}

function drawCard() {
  let card = 5;
  cards.push(card);
  sum += card;
  sumEl.innerHTML = "Sum: " + sum;
  renderGame();
}
