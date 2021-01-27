'use strict';

//seecitnf the elements in two ways
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//starting the game condition
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

//rolling the dice

const roll =Math.trunc(Math.random() * 6 + 1);
console.log(roll);