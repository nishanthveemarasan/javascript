'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex , mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];
  },
  orderDelivery: function(obj){
      console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//DESTRUCTURING ARRAYS
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x , y , z] = arr;
console.log(x , y , z);
const [first , second] = restaurant.categories;
console.log(first , second);
//if we want first and thrid array value
const [main , , secondary] = restaurant.categories;
console.log(main , secondary);
//if they want to switch the category

// [main , secondary] = [secondary , main];
// console.log(main , secondary);
const [starter , mainDis] = restaurant.order(2 , 0);
console.log(starter , mainDis);



//DESTRUCTURING OBJECTS
//we dont need to follow the order like arrays
const {name , openingHours , categories} = restaurant;
console.log(name , openingHours , categories);

const{name: restaurantName , openingHours: hours} = restaurant;
console.log(restaurantName , hours);
//set the default values if not exist
const {menu: accessMenu = []} = restaurant;
console.log(accessMenu);

//Mutating variables
let xx = 111;
let yy = 999;
const obj = { xx: 23 , 
              yy: 7 , 
              c: 14};

({xx , yy} = obj);
console.log(xx , yy);

//nested object
const {fri: {open: o , close: cc}} = openingHours;
console.log(o , cc);

//exercise
restaurant.orderDelivery({
  time: '22:30',
  address: 'Viaa, 21',
  mainIndex: 2,
  starterINDEX: 2
});


//SPREAD OPERATOR(...)

const arrSpr = [7 ,8, 9];
const badNewArr = [1, 2, arr[0] , arr[2]];
console.log(badNewArr);
//...arrSpr => take the array elements and write them
//indivually like 7 , 8, 9
//take the copy of an array
const newArr = [1 ,2, ...arrSpr];
console.log(newArr);

//in function when we have more parameters
/**
 * newArr -> [1,2,7,8,9]
 * ...newArr -> 1 2 7 8 9 == 1,2,7,8,9
 * 
 * whenever we want to pass an array individually then
 * we use this in the function
 */

const newMenu = [...restaurant.mainMenu , 'abc'];
console.log(newMenu);

//Copy Array
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu);

//join 2 array
const menu = [...restaurant.mainMenu , ...restaurant.starterMenu];
console.log(menu);

//Iterables arrays, strings , maps not objects
const str = 'Jonas';
const letters = [...str , 's' , 'v'];
console.log(letters);


//REST PATTERN
/**
 * spread -> unpacked an array
 * rest -> packed an array
 */
//SPREAD, beacuse RIGHT side of =
const rArr = [1 ,2 , ...[3,4]];

//REST, becasue on LEFTside of =
const [aa,ba, ...others] = [1,2,3,4,5];
console.log(aa,ba,others);

const [...menuRest] = [...restaurant.mainMenu , ...restaurant.starterMenu];
console.log(menuRest);

//Objects
const {sat , ...weekDays} = restaurant.openingHours;
console.log(weekDays);


//Destructurig in Functions
const add = function(...numbers){
  let sum = 0;
  for(let i=0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
const xxx = [2,3];
add(...xxx);
add(5,3,4,7,8)


//SHORT CIRCUITING (??)
//if is not null then 1st or 2nd



//CODING CHALLENGES
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


  const [player1 , player2] = [...game.players];
  console.log(player1 , player2);

const [gk , ...fieldPlayers] = player1;
console.log(gk , fieldPlayers);

const allPlayers = [...player1 , ...player2];
console.log(allPlayers);

const player1Final = [...player1 , 'Thinago' , 'b' , 'c'];
console.log(player1Final);

const {odds: {team1 , x: draw , team2}} = game;
console.log(team1 , draw , team2);

const priintCoals = function(...players){
  console.log(`${players.length} golas were scored`);

}

priintCoals( 'Davies', 'Muller', 'Lewandowski' , 'Kimmich');

/////////////////////////////////////////////////



//LOOPING ARRAYS
const menuLoop = [...restaurant.starterMenu , ...restaurant.mainMenu];
console.log(menuLoop);

for(const item of menuLoop)
{
  console.log(item);
}

for(const item of menuLoop.entries())
{
  console.log(`${item[0] + 1} : ${item[1]}`);
}

for(const [i , el] of menuLoop.entries())
{
  console.log(`${i + 1} : ${el}`);
}

////////////////////////////////////////

//Enhanced Object Literals
const name1 = {
  name: 'Misja',
  age: 'vs'
}

const name2 = {
  job: 'it',
  name1,
  detail: function(){
    console.log(`${this.job}`);
  }

}

/////////////////


//Optional Chaining

//if mon exist then open will be checked or undefined will
//be return
console.log(restaurant.openingHours.mon?.open);

const openMonday = restaurant.openingHours.mon ? restaurant.openingHours.mon.open : 'not pen';
console.log(openMonday);

const users = [
  {
    name: "Nishanth",
    job: 'Developer',
  }
];

console.log(users[1]?.name || "user doesnot exist");

////////////////////////////////


//LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES

const days = ['mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat' , 'sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}


const properties = Object.keys(openingHours);//it will give us an array of keys
for(const day of Object.keys(openingHours))
{
  console.log(day);
}


const values = Object.values(openingHours);
console.log(values[0].open);

const entries = Object.entries(openingHours);
console.log(entries);

//entries() -> will give us the index(key) and element(value)

for(const [key , {open , close}] of entries){
  console.log(key , open , close);
}

//coding challenge 2
for (const [goal , player] of game.scored.entries())
{
  console.log(`Goal ${goal + 1} : ${player}`);
}

let average = 0;
for(const odd of Object.values(game.odds))
{
  average += odd;

}

average /= Object.values(game.odds).length;
console.log(average);

for (const [team , odd] of Object.entries(game.odds))
{
  const teamString = team == 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}

////////////////////

//SETS
/**
 * collection of unique values
 * remove the duplicate values
 * gives iterables as output
 */

const orderSet = new Set(['Pasta' , 'Pizza' , 'Pizza' , 'Risotto' , 'Pasta' , 'Pizza']);
console.log(orderSet);

console.log(new Set('Nishanth'));

//length of set
console.log(orderSet.size);

//check certain element
console.log(orderSet.has('Pizza'));//true
console.log(orderSet.has('Bread'));//false

//add new element
orderSet.add('Garlic Bread');
console.log(orderSet);

//delete an element
orderSet.delete('Pizza');
console.log(orderSet);

//retrieve values from set
//it has no indexes
//so cant get from set

for(const order of orderSet){
  console.log(order);
}

//Example
const staff = ['waiter' , 'chef' , 'waiter' , 'chef' , 'manager', 'waiter'];
const setStaff = new Set(staff);
console.log(setStaff);

//Convert Set to array
const staffArray = [...setStaff];
console.log(staffArray);

///////////////////////////////////////////////////

//MAPS

/**
 * 
 * key => value
 * use to map values to key
 * like objects
 * any type of key 
 */

const restMap = new Map();
restMap.set('name' , 'classic Itailano');
restMap.set(1, 'France');
restMap.set(2, 'Portugal');
console.log(restMap);

restMap.set('categories' , ['a' , 'b' , 'c'])
.set('open' , 11)
.set('close' , 23)
.set(true , 'We are open')
.set(false , 'we are close');
console.log(restMap);

//get perticular key and value
console.log(restMap.get('name'));
console.log(restMap.get(true));

const time = 21;
const isOpen = restMap.get(time > restMap.get('open') && time < restMap.get('close'))
console.log(isOpen);

console.log(restMap.has('categories'));

restMap.delete(1);
console.log(restMap , restMap.size);

//////////////////////////////////////

//MAP ITERATION
const questionMap = new Map([
  ['question' , 'what is the best programming language?'],
  [1 , 'C'],
  [2 , 'JAVA'],
  [3 , 'Javascript'],
  ['correct' , 3],
  [true , 'Correct'],
  [false , 'Try again']
]);

console.log(questionMap);

//cpnvert object to map

const opneingHourEntries = Object.entries(openingHours);
const hourMap = new Map(opneingHourEntries);
console.log(hourMap);

//Iteration

for(const [key , value] of questionMap)
{
  console.log(key , value);
}

//convert map to array
console.log([...questionMap]);
console.log(questionMap.entries());
console.log(questionMap.keys());
console.log(questionMap.values());

////////////////////////////////////////////////////

/**
 * Array vs set and object vs maps
 * 119
 * 
 */


//Coding Challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

  const events = [...new Set(gameEvents.values())];
  console.log(events);

  gameEvents.delete(64);
  console.log(gameEvents);

  console.log(`${gameEvents.size}`);

  const times = [...gameEvents.keys()];
  console.log(times);



  /////////////////////////////////////////////////////////
  
  
  ///WORKING WITH STRINGS
  const airLine = 'TAP Air Portugal';
  const plane = 'A3203';

  console.log(plane[0]);
//length
console.log(plane.length);
console.log(plane.indexOf('3'));
console.log(plane.lastIndexOf('3'));
console.log(airLine.lastIndexOf('Portugal'));
//slice(begin Index , last Index) -> extract the substring
console.log(airLine.slice(4));
console.log(airLine.slice(4 , 7));
console.log(airLine.slice(0 , airLine.indexOf(' ')));
console.log(airLine.slice(1 , -4));

const checkMiddleSeat = function(seat){
  //B or E
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E')
  {
    console.log('You got the middle one!!!');
  }else{
    console.log('sorry!!!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//Fix capitalization of the name
const pass = 'jOnaS';
const passLower = pass.toLowerCase();
const passCorrect = passLower[0].toUpperCase() + passLower.slice(1);
console.log(passCorrect);

//check email

const email = 'hello@nish.io';
const loginEmail = ' Hello@jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

//replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#' , '$').replace(',' , '.');
console.log(priceUS);

const announce = "ab cs ef cs";
console.log(announce.replace('cs' , 'hi'));
console.log(announce.replaceAll('cs' , 'hi'));

//Booleans
const planei = 'A320neo end';
console.log(planei.includes('A320'));

console.log(planei.startsWith('A320'));
console.log(planei.startsWith('A320') , planei.endsWith('end'));

const newString = 'a+very+nice+string';
console.log(newString.split('+'));

const [firstName , lastName] = 'Nishanth Veemarasan'.split(' ');
console.log(firstName , lastName);

const fullName = ['Mr.' , firstName , lastName.toUpperCase()].join(' ');
console.log(fullName);
/**
 * split -> split the string to array
 * join -> convert the array into string
 */

const passenger1 = 'jessica ann amith davis';

const capitalizeName = function(name){
  const names = name.split(' ');
  const newNameArray = [];
  for(const word of names){
    const namttoupp = word[0].toUpperCase() + word.slice(1);
    newNameArray.push(namttoupp);
  }

  console.log(newNameArray.join(' '));
}

capitalizeName(passenger1);
capitalizeName('nishanth vee veema');

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(25 , '+'));
console.log(message.padEnd(25 , '+'));

const maskCreditCard = function(number){
  const str = number + '';
  const lastFour = str.slice(-4);
  const padding = lastFour.padStart(str.length , '*');
  console.log(padding);

}
maskCreditCard(1234567876543456);
maskCreditCard(3454656787678986);

//repeat method(repeat the string number of time)
const repeatM = 'go back!!';
console.log(repeatM.repeat(10));

//Coding Challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click' , function(){
        const text = document.querySelector('textarea').value;
        const newArray = text.split('\n');

        for(const row of newArray){
          const [first , second] = row.toLowerCase().trim().split('_');
          //console.log(first , second);
          const camelCase = `${first}${second[0].toUpperCase() + second.slice(1)}`;
          console.log(camelCase.padEnd(20 , '*'));
        }
  //console.log(newArray);
      });

///////////////////////////////////////////////////////
 



