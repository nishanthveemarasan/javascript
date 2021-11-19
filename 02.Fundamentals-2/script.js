'use strict';
// let hasDriversLicense = false;
// const passTest = true;
/*
if(passTest){
    hasDriverLicense = true;
}
if(hasDriversLicense){
    console.log('I can drive');
}

*/
//
//Functions
//
/*
function logger(){
    console.log('my name is Nishanth');
}
//calling /Runing / invoking
logger();
*/

//Arrow Function
// function calAge1(birthYear){
//     return 2037 - birthYear;
// }

// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1989);
console.log('juice');
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(a, b) {
    const aPieces = cutFruitPieces(a);
    const oPieces = cutFruitPieces(b);
    const juice = `Juice with ${aPieces} apples and ${oPieces} oranges `
    console.log(juice);
}
fruitProcessor(3, 4);

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
}


const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1984, 2008, 2020);
console.log(years.length);
console.log(years[years.length - 1]);

years[2] = 2010;
console.log(years);

years.push(2001);
console.log(years);

years.unshift(2000);
console.log(years);

years.pop();
console.log(years);

years.shift();
console.log(years);

console.log(years.indexOf('2010'));

console.log(years.includes(2010));


//objects
const jonas = {
    'firstName': 'Jonas',
    'lastName': 'lastname',
    'age': 2027 - 1991,
    'job': 'teacher',
    'friends': ['a', 'b', 'c']
};

//Dot vs Bracket Notation
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

jonas.location = "Sri lanka";
jonas['twitter'] = "nishanth";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

//Object Methods

//objects
const jonasO = {
    'firstName': 'Jonas',
    'lastName': 'lastname',
    birthYear: 1989,
    'job': 'teacher',
    'friends': ['a', 'b', 'c'],
    hasDrivingLicense: true,
    calAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    }
};
console.log(jonasO.calAge());
console.log(jonasO.age);

//coding Challenge
const mark = {
    fullName: "Mark MIller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};
console.log(mark.calcBMI());
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};
console.log(john.calcBMI());


//while loop
let rep = 1;
while (rep <= 10) {
    console.log(`let ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

const bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];














