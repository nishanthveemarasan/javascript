'use strict';
//Scope
/*

GLOBAL SCOPE:- outsite of any function or every where
                accessible every where
LOCAL/FUNTION SCOPE:- accessible only inside function not outsite
IF variable defined insite the if loop, that will not be accessble 
insite the loop
*/

//Scope Pratice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    //it can access age and birth year from parent
    const output = `Hi ${firstName}, You are ${age} , born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milantial = true; //it will be visible outsite IF(functional scope)
      const str = `Oh, and you are a millenial ,${firstName}`;
      console.log(str);

      function add(a, b) {
        //it is block scope and use insite if scope
        return a + b;
      }
    }
    //it will only available insite the block(IF)
    //unless they are defined with var
    //console.log(str);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//HOISTING
/**
 * Make some of the variables accessible/usable in the code
 * before they are actually declared(94)
 *
 * like undefined / ininitialized / not defined
 *
 * variable should be declared before access them
 */

//Practice
// console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas'; //it will give undefined
let job = 'teacher'; //it will give uninitialized
const year = 1991; //it will give uninitialized

function addDecl(a, b) {
  return a + b;
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);

//THIS Keyword Pratice

console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991);

const calcAgeA = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeA(1980);

//REGULAR FUNCTION vs ARROW FUNCTIONS
//use arrow only in react better
const jonas = {
  firstName: 'Nishanth',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    const self = this;
    const isM = function () {
      console.log(self);
    };
    const isMi = () => {
      console.log(self);
    };
    isM();
    isMi(); //uses this keyword from its parent key word
    const greet = () => {
      console.log(`hey ${this.firstName}`);
    };
    greet();
  },
  greet: () => console.log(`hey ${this.firstName}`),
};

jonas.calcAge(); // Array function doesnt get this keyword so cant use
//this keyword inside array function is window not object
//it uses from its parent scope

//send parameters as an array inside the function

const getArgs = function (a, b) {
  //arguments takes the parameters as an array [a , b]
  //arguments only available in regular funstions
  console.log(arguments, arguments[0], a, b);
};

getArgs(2, 5, 8, 9);

//PRIMITIVE vs OBJECTS
let age = 30;
let oldAge = age;
age = 31;

//age -31 , oldAge - 30
console.log(age, oldAge);
/**
 * identifier    address    value
 * age              0001    30
 * oldAge           point to old age 0001
 * age              0002    31
 * mine             0003    D3OF(reference to memory address)
 * friend           0003    D30F
 *
 * thats why when when the friend.age, it affects both
 * mine and friends
 * so after change
 * age will point to new address(0002)
 * oldAge will point to address 0001
 */

//OBJECTS
const mine = {
  name: 'Jonas',
  age: 30,
};

const friend = mine;
friend.age = 27;
//both age are same
console.log(mine, friend);
/**
 * adress       Value
 * D3OF         mine
 */

//Practice
let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'Davis';
console.log(lastName, oldlastName);

const jessica = {
  fName: 'Jonas',
  lName: 'Jessica',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(marriedJessica, jessica);

//Copying objects without affecting old objects
const jessica2 = {
  fName: 'Jonas',
  lName: 'Jessica',
  age: 27,
};
//just copy the oject and keep it in the new object
const jessica2Copy = Object.assign({}, jessica2);
jessica2Copy.lName = 'Davis';
console.log(jessica2, jessica2Copy);

//problems is Object.assign() will copy only the first level
//not deep clone
console.log('tedting');
//example
const jessica21 = {
  ...jessica2,
  fName1: 'Jonas',
  lName1: 'Jessica',
    age: 27,
    family: ['a', 'b'],
};

console.log(jessica21);

// const jessica21Copy = Object.assign({} , jessica21);
// jessica21Copy.family.push('Mary');
// jessica21Copy.family.push('Jhon');

// console.log(jessica21 , jessica21Copy);
//now both object's family has 4 members
