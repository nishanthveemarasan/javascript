'use strict';
const bookingList = [];
const createBooking  = function(fName , numP , price){

    numP = numP || 1; //set the default values
    price = price * numP || 199;

    const booking = {
        fName,
        numP,
        price
    };
    console.log(booking);
    bookingList.push(booking);
    console.log(bookingList);
};

createBooking('LH123' , 12 , 199);

//HOW TO PASS ARGUMENTS(VALUE VS REF TYPE)

const flight = 'LH234';
const jonas = {
    name: ' Nishanht',
    passport : 1233454
}

const checkIn = function(flightNumber , passanger){

};

checkIn(flight , jonas);


//First class and Higher-order functions
//see 129

//Functions accepting callback functions
const oneword = function(str){
    return str.replace(/ /g , '').toLowerCase();
};

const upperFristWord = function(str){
    const [first , ...other]= str.split(' ');
    return[first.toUpperCase() , ...other].join(' ');
};

//higher order function
//here we are just passing the function not calling
const transformar = function(str , fn){
console.log(`${fn(str)} ${fn.name}`); //name property of function
}
//these are callback function(upperFristWord , oneword)
transformar('JavaScript is the best' , upperFristWord);
transformar('JavaScript is the best' , oneword);






const high5 = function(){
    console.log('hi');
}

//document.body.addEventListener('click' , high5);


//Functions returning functions
const greet = function(greeting){
    return function (name){
        console.log(`${greeting} ${name}` );
    };
}
//greet will return the function 
//that is greeterHey
const greeterHey = greet('Hey');

greeterHey('Nishanth');

//or
greet('hello')('hisds');


//THE CALL AND APPLY METHODS
/*
book(){
        
    }
or
book: function(){}
*/
const lufhans = {
    airline: 'sds',
    iataCode: 'LH',
    booking: [],
    book(flightNumber , pName){
        console.log(`${pName} ${flightNumber} ${this.airline}`);
        this.booking.push(
            {
                flight: `${this.iataCode}`
            }
        );
    }
}

lufhans.book(239 , 'Nishanth');

const book = lufhans.book;

//book(239 , 'Nishanth');
//1st -> which object the this keyword should point
//others are original arguments of the function
book.call(lufhans , 23 , "sarah");
console.log(lufhans);

const swiz = {
    airline: 'sdasdass',
    iataCode: 'sd',
    booking: [],
}



//BIND METHODS
//bind also smilar to call method
//manually set the this keyword to any function call
//it will create new function
const eurowings = {
    airline: 'sdasdass',
    iataCode: 'sd',
    booking: [],
}

//now we need to use the book function eurowings
//bind will create new function so we can use that
//function as normal
//it will take first argumetn to point this keyword
//rest are function parameters

const bookEw = book.bind(eurowings);
bookEw(123 , 'Steven Willioms');

//if we have muliple airlines
//we just have to bind them to each for them


//we can create a bind function exclusively to a
//perticular flight number

const bookEu23 = book.bind(eurowings , 23);
//here we have set teh flight number with bind function
//only we need to pass the customer nmae evertime

//we have created exclusively specific flight number a
//specific airline
bookEu23('who is this');

//With event listenrs

lufhans.plans = 300;
lufhans.buyPlane = function(){
    console.log(this);
    this.plans++;
    console.log(this.plans);
}
//lufhans.buyPlane();
document.querySelector('.buy')
        .addEventListener('click' , lufhans.buyPlane.bind(lufhans));

//partil fnctionc
const addTax = (rate , value) => value + value *rate;
console.log(addTax(10 , 200));

//first argument will be this but we dnt need to 
//care about this here
//we just have to preset the rate = 0.23
const addVAT = addTax.bind(null , 0.23);
console.log(addVAT(100));


//CODING CHALLENGE
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    };

//Immediatly invoked function exression
//a function will be executed only once
const runOnce = function(){
    console.log('this will never run');
};

runOnce();
//this will execute willl execute only once
(function(){
    console.log('this will never run');
})();

(() =>{
    console.log('this will never run');
})();

//no gloal will not be accessible inside this function

//////////////////////////////////////////////////////////

//CLOSURES
const secureBooking = function(){
    let passangerCount = 0;
    return function(){
        passangerCount++;
        console.log(passangerCount);
    }
};

const booker = secureBooking();
booker();

