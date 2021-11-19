'use strict';
/*  
//read the text content of an element<p>
let p =  document.querySelector('.message').textContent;
console.log(p);
//DOM
//Allows javascript to access html elements and styles to manipulate them
//change text, HTML attributes andeven CSS styles

//Selecting and Manipulating Elements
document.querySelector('.message').textContent = "Correct Number!";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//set/get the values for inputs
document.querySelector('.guess').value = 19;



//Handling Click Events
//click function
//name of the event as 1st argument
//event function as 2nd argument
document.querySelector('.check')
        .addEventListener('click', function(){
            //we will input as string so we need to convert it to string
            const guess = Number(document.querySelector('.guess').value);
            
            if(!guess){
                document.querySelector('.message').textContent = "No Number given!!"
            }
        });
        */


//we need to define the guessing secret number
const guessNumber = Math.trunc(Math.random() * 20) + 1;
//score
let intialScore = 20;
//document.querySelector('.number').textContent = guessNumber;
document.querySelector('.check')
        .addEventListener('click', function(){
            //we will input as string so we need to convert it to string
            const guess = Number(document.querySelector('.guess').value);
            
            if(!guess){
                document.querySelector('.message').textContent = "No Number given!!"
            }
            //when player wins
            else if(guess === guessNumber)
            {
                document.querySelector('.message').textContent = "Correct Number!!";
                document.querySelector('.highscore').textContent = intialScore;
            
                document.querySelector('body').style.backgroundColor = 'green'; //value should be string even if its number or percentage'30rem'
                
            }
            else if(guess > guessNumber)
            {
                document.querySelector('.message').textContent = "Too High!!";
                intialScore--;
                document.querySelector('.score').textContent = intialScore;

            }
            else if(guess < guessNumber)
            {
                document.querySelector('.message').textContent = "Too Low!!";
                intialScore--;
                document.querySelector('.score').textContent = intialScore;
            
            }
        });

//Reset the game
document.querySelector('.again')
        .addEventListener('click' , function(){
            intialScore = 20;
            document.querySelector('.score').textContent = 20;
                document.querySelector('.highscore').textContent = 0;
                document.querySelector('.message').textContent = "Start guessing...";
                document.querySelector('.guess').value = '';
                document.querySelector('body').style.backgroundColor = 'black';
        });



//Coding Challenge




