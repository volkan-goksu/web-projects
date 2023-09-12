'use strict';

// Assingments and functions
let score = document.querySelector('.score');
let scoreCounter = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Setting Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Guess button click event, lose and win conditions
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number !');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore implement
    if (scoreCounter > highscore) {
      highscore = scoreCounter;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreCounter > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score.textContent = --scoreCounter;
    } else {
      displayMessage('💥 You Lost the Game!');
      score.textContent = 0;
    }
  }
});

// Again button configuration
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score.textContent = 20;
  scoreCounter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
