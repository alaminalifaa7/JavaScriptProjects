'use strict';

//seecitnf the elements in two ways
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//starting the game condition
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');


const scores = [0,0];
let currentScore = 0;
let activePLayer = 0;
let playing = true;

//switch player 
const switchPLayer=function(){
    document.getElementById(`current--${activePLayer}`).textContent=0;
        activePLayer = activePLayer === 0 ? 1 : 0;
        currentScore = 0;

        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}


//rolling the dice

btnRoll.addEventListener('click',function(){
    if(playing){
 //1.random dice roll
 const dice =Math.trunc(Math.random() * 6) + 1;
 console.log(dice);
 //2.Display Dice
 diceEl.classList.remove('hidden');
 diceEl.src = `dice-${dice}.png`;

 //check for 1
 if(dice !== 1){
 //add dice to current score
     currentScore += dice;

     document.getElementById(`current--${activePLayer}`).textContent=currentScore;
     
 }else{
     
     switchPLayer();
 }
    }
   

});

btnHold.addEventListener('click',function(){

    if(playing){
//1. Add current score to active player score
scores[activePLayer] += currentScore; 
document.getElementById(`score--${activePLayer}`).textContent = scores[activePLayer];
//2. Check if player's sore is >= 100
if(scores[activePLayer] >=50){
    //finish the game
    // if(activePLayer === 0){
    //     alert('player 1 Wins!! ');
    // }else{
    //     alert('player 2 Wins!! ');
    // }
    playing =false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePLayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePLayer}`).classList.remove('player--active');

}else{
//switch the player
switchPLayer();
}

    }
});


