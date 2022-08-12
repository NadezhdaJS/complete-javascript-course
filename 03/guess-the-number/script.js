'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

let changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let changeBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

let changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //Когда инпут пустой
  if (!guess) {
    displayMessage('Not a number!');
  }
  //Когда игрок угадал число
  else if (guess === secretNumber) {
    displayMessage('Correct number! 🍾');
    displayNumber(secretNumber);
    changeBackgroundColor('#50c878');
    changeNumberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Когда число отличается от загаданного
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 🤦🏻‍♀️' : 'Too low! 🙅🏻‍♀️');
      score--;
      changeScore(score);
    } else {
      displayMessage('You lost a game!👎🏻');
      changeScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  changeScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#070354');
  changeNumberWidth('15rem');
});
