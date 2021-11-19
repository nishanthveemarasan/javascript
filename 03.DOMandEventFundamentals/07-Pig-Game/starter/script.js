'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //get element by id
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const curent0El = document.getElementById('current--0');
const curent1El = document.getElementById('current--1');
//set the inital score
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//rolling dice functionality
rollBtn.addEventListener('click' , function(){
    //1.generating a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for roll 1 and swtich to player 2 
    if(dice !== 1){
        //add score
        currentScore += dice;
        curent0El.textContent = dice;
    }else{
        //switch player
    }
});


