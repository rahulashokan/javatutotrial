'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
//diceEl.classList.add('hidden');
let score0Elcontent = score0El.textContent,
  score1Elcontent = score1El.textContent;
let current_score1 = 0;
let current_score2 = 0;
let images = document.getElementsByTagName('img');
let image = images[0];
btnRoll.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    let random1 = Math.trunc(Math.random() * 6 + 1);
    image.src = 'dice-' + random1 + '.png';
    console.log(`the random1 ${random1}`);
    if (random1 != 1) {
      score0Elcontent = Number(score0Elcontent) + random1;
      document.getElementById('current--0').textContent = score0Elcontent;
      console.log(`current score1 ${score0Elcontent}`);
    } else {
      document.getElementById('current--0').textContent = 0;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else {
    let random2 = Math.trunc(Math.random() * 6 + 1);
    image.src = 'dice-' + random2 + '.png';
    console.log(`the random2 ${random2}`);
    if (random2 != 1) {
      score1Elcontent = Number(score1Elcontent) + random2;
      document.getElementById('current--1').textContent = score1Elcontent;
      console.log(`current score 2 ${score1Elcontent}`);
    } else {
      document.getElementById('current--1').textContent = 0;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    current_score1 += Number(document.getElementById('current--0').textContent);
    document.getElementById('score--0').textContent = current_score1;
    if (Number(document.getElementById('score--0').textContent) >= 100) {
      document.getElementById('score--0').textContent = 'You WON PLAYER 1';
    } else {
      console.log(`this is the currrent score1 ${current_score1}`);
      score0Elcontent = 0;
      document.getElementById('current--0').textContent = score0Elcontent;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else {
    current_score2 += Number(document.getElementById('current--1').textContent);
    document.getElementById('score--1').textContent = current_score2;
    if (Number(document.getElementById('score--1').textContent) >= 100) {
      document.getElementById('score--1').textContent = 'You WON PLAYER 2';
    } else {
      console.log(`this is the currrent score2 ${current_score2}`);
      score1Elcontent = 0;
      document.getElementById('current--1').textContent = score1Elcontent;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  document.getElementById('score--0').textContent = 0;
  current_score1 = 0;

  document.getElementById('score--1').textContent = 0;
  current_score2 = 0;
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
});
