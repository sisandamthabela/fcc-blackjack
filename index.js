let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let message = "";
let messageEl = document.querySelector("#message-el");
let firstCard = randomCard();
let secondCard = randomCard();
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13);
  return randomNumber;
}

function renderGame() {
  cardsEl.innerHTML = "Cards: ";
  sumEl.innerHTML = "Sum: " + sum;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " ";
  }
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
  let card = randomCard();
  cards.push(card);
  sum += card;
  sumEl.innerHTML = "Sum: " + sum;
  renderGame();
}
