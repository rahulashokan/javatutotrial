'use strict';

let randomNumber = Math.floor(Math.random() * 20);
//console.log(` the random number is ${randomNumber}`);
let score1 = 20;
let highScore = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = document.querySelector('.guess').value;
  //console.log(guessValue);
  const displayMessag = function (message) {
    document.querySelector('.message').textContent = message;
  };

  const displayHighscore = function (highScore1) {
    document.querySelector('.highscore').textContent = highScore1;
  };

  if (!guessValue) {
    displayMessag('Please enter a value');
  } else if (guessValue == randomNumber) {
    displayMessag('Correct guess');
    document.querySelector('.number').textContent = randomNumber;
    displayHighscore(highScore);
    document.body.style.backgroundColor = 'green';
    if (highScore < score1) {
      highScore = score1;
      displayHighscore(highScore);
    } else {
      displayHighscore(highScore);
    }
    randomNumber = Math.floor(Math.random() * 20);
  } else {
    if (guessValue > randomNumber) {
      displayMessag('Too high! 📈');
      score1--;
      highScore = score1;
      document.querySelector('.score').textContent = highScore;
    } else {
      displayMessag('Too low! 📉');
      score1--;

      highScore = score1;

      document.querySelector('.score').textContent = highScore;
    }
    if (score1 <= 0) {
      displayMessag('You lose 😵‍💫  click Again');
      document.body.style.backgroundColor = 'red';
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score1 = 20;
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  randomNumber = Math.floor(Math.random() * 20);
  // const randomNumber = Math.floor(Math.random() * 20);
  // console.log(` the random number is ${randomNumber}`);
});
