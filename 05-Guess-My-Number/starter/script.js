'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
 //   console.log(typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number!';
    }

    //when player wins
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉🎉Correct Number!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent=highScore;
        }

    }

    else if(guess !== secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!' ;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game!! ';
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.guess').value = ' ';


});
