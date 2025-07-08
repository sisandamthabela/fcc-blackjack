let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let message = "";
let messageEl = document.querySelector("#message-el");
let playerEl = document.querySelector("#player-el");
let sum = 0;
let cards = [];
let isAlive = false;
let hasBlackJack = false;
let player = {
  name: "Sisanda",
  chips: 145,
};

function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  playerEl.innerHTML = player.name + ": R" + player.chips;
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
  if (hasBlackJack === false && isAlive === true) {
    let card = randomCard();
    cards.push(card);
    sum += card;
    sumEl.innerHTML = "Sum: " + sum;
    renderGame();
  }
}
