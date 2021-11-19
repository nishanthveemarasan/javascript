// define a variable
const country = "Sri Lanka";
const continent = "Asia";
let population = 2000000000;

//datatype
const isIsLand = true;
let language;
console.log(typeof isIsLand);
console.log(typeof language);
console.log(typeof population);

//let, const ,var
language = "Tamil";

//Basic Operators
const myAge = 31;
const herAge = 30;
console.log(myAge , herAge);

const firstName = "Nishanth";
const lastName = "Veemarasan";
console.log(firstName+" "+lastName);
console.log(population/2);
population ++;
console.log(population);

const finLand = 6000000
console.log(population > finLand);

//Coding Challenge 1

const markMass = 55;
const markHeight = 178;
const johnMass = 100;
const johnHeight = 178;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = markBMI >= johnBMI;
console.log(markHigherBMI);


//string and template literals

const birthYear = 1989;
const myDetails = "I'm "+firstName+" "+lastName+" , a "+birthYear+" years old";
console.log(myDetails);

const myDetailsNew = `I'm ${firstName} ${lastName} , a ${birthYear} years old`;
console.log(myDetailsNew)

//If-Else conditions
const age = 19;
const isAgeEnough = age > 18;
if(isAgeEnough)
{
    console.log("you can ");
}
else
{
    console.log("you are not eligible");
}

//Type conversion
const inputYear = '1991';
console.log(typeof Number(inputYear));
console.log( Number(inputYear) + 23);
console.log(String(23) + 23);
console.log('103' > '101');

let n = Number('1') + 1;
console.log(typeof n);
n = n - 1;
console.log(n);


//true and falsy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jone'));
console.log(Boolean({}));

//== vs ===
const ages = 18;

if(ages !== '18'){
    console.log("yes");
}
else{
    console.log("no");
}

//BAsic Boolean Logic

let a = 10;
let b = 12;
if((a == 10) && (b == 12)){
    console.log("good");
}

if((a == 10) || (b == 13)){
    console.log("good");
}

//switch Statement
const day = 'monday';

switch(day){
    case 'monday' : console.log('Plan my course structure')
        break;
    default: console.log('invalid');

}

if('10' > 5){
    console.log('hello');
}

//ternary operator
const ageMine = 23;
const mine = age >= 18 ? console.log('i like to drink wine') : console.log('you are not allowed');

const bill = 430;
let tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.20;
console.log(`your final bill will be ${bill + tip}`);








