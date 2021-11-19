'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//CONVERTING AND CHECKING NUMBERS
console.log(23 === 23.0); //true
console.log(23 === '23'); //false
console.log(0.1 + 0.2); 

console.log(Number('23')); //
console.log(typeof +'23'); //

//Parsing numbers
//but string should start with numbers
console.log(Number.parseInt('30px'));//30
console.log(Number.parseInt('30px' , 10));//30 , base(10)
console.log(Number.parseInt('30.67px'));//30 
console.log(Number.parseFloat('30.67px'));//30.67 


//check if value is NaN
console.log(Number.isNaN('23'));//false 
console.log(Number.isNaN('x20x'));//30 

//best method to check if the value is a number
console.log(Number.isFinite(20));//true
console.log(Number.isFinite('20'));//fasle
console.log(Number.isFinite(+'20'));//true

//check if the value is a integer
console.log(Number.isInteger(20.0));//true
console.log(Number.isInteger(20.34));//f
console.log(Number.isInteger('20'));//f


//MATH AND ROUDING
console.log(Math.sqrt(25)); //squre root
console.log(25 ** 2); //25 * 25
console.log(Math.max(5,35,23,'678'));//678
console.log(Math.min(5,35,23,678));
console.log(Math.PI);

console.log(Math.trunc(Math.random() * 6) + 1);

//random number between 2 intergers
const randomInt = (min , max) => Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10,20));

//ROUNDING
console.log(Math.trunc(23.675)); //it removeds any decimal
console.log(Math.trunc(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

//floor === trunc
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

//negative ->floor is bettter than trunc; 

//Rounding Demials
//toFixed will return only string
console.log((2.76565).toFixed(0));//3
console.log((2.76565).toFixed(2));//2.77


//THE REMAINDER OPERATOR
console.log(4 % 3); //1

//check if it is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(3)); //1
console.log(isEven(8)); //1

//BIGINT
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(23423353445645656456345345345345345345345345345);
console.log(23423353445645656456345345345345345345345345345n);
console.log(BigInt(23423353445645656456345345345345345345345345345));

console.log(20n >= 20);


//CREATING DATES

const now = new Date();
console.log(now );

console.log(new Date('May 23 2021 10:05:35') );
console.log(new Date('December 24, 2015') );
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 18 , 15 ,23 ,5) );//Wed Nov 18 2037 15:23:05 GMT+0530


const date = new Date(account1.movementsDates[0]);
console.log(date.getFullYear());//2019
console.log(date.getMonth());//10
console.log(date.getDate());//19
console.log(date.getDay());//4(day of week)
console.log(date.getHours());//4(day of week)
console.log(date.getMinutes());//4(day of week)
console.log(date.getSeconds());//4(day of week)
console.log(date.toISOString());//2019-11-18T21:31:17.178Z
console.log(date.getTime());//1574112677178
console.log(new Date(1574112677178));//Tue Nov 19 2019 03:01:17 GMT+0530

//current timestamp
console.log(Date.now());//1621745189699
//date.setFullYear(2040);
console.log(date);//Mon Nov 19 2040 03:01:17 GMT+0530


//OPERATIOS WITH DATES
//get days between 2 dates

console.log(Number(date));//gives timestamp

const noOfDays = (date1 , date2) => (date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = noOfDays(new Date(2037 , 3 ,14) , new Date(2037 , 3 ,24));
console.log(days1);//gives timestamp

//INTERNATIONALIZING DATES(INTL)

console.log(new Intl.DateTimeFormat('en-US').format(now));//5/23/2021

const options = {
  hour : 'numeric',
  minute : 'numeric',
  day : 'numeric',
  month : 'numeric', //long => month name 
  year: 'numeric' ,
  weekday: 'long'
}

console.log(new Intl.DateTimeFormat('en-US' , options).format(now));//5/23/2021
//5/23, 10:29 AM
//Sunday, 5/23/2021, 10:30 AM


//INTERNATIONALIZING NUMBERS
const num = 334343.34;
const op = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR'
}

//style - unit - 334,343.34 mph
//unit - mile-per-hour
//unit - celsius ->334,343.34°C

//style-percent -> 33,434,334%
//style: currency
//currency -> eur ->€334,343.34



console.log(new Intl.NumberFormat('en-US' , op).format(num));//334,343.34
console.log(new Intl.NumberFormat('en-DE' , op).format(num));//334.343,34
console.log(new Intl.NumberFormat('en-SY' , op).format(num));


//TIMERS -> SETTIMEOUT / SETINTERVAL
//it will run only once
//if want to pass some arguments into function
const ingredients = ['olives' , 'spinach']
setTimeout((ing1 , ing2) => console.log(`Here os uior pixxa with ${ing1} , ${ing2}`) , 1000, 'olives' , 'spinach' );


const timerSet = setTimeout((ing1 , ing2) => console.log(`Here os uior pixxa with ${ing1} , ${ing2}`) , 1000, ...ingredients);

//clear the timeout
if(ingredients.includes('spinach'))
{
  clearTimeout(timerSet);
}


//SETINTERVAL
// setInterval(function(){
//   const now = new Date();
//   console.log(now);
// } , 1000);


//COUNTER TIMEOUT
const startLogoutTimer = function(){
  //Setting a time 5 mintes
      let  time = 100
  //call timer every seconds
    const setTimer = setInterval(function(){
      const min = String(Math.floor(time /60)).padStart(2 , 0);
      const seconds = String(time % 60).padStart(2 , 0);
      console.log(`${min} : ${seconds}`);
    //In each call, print the reamining time and UI
    let labelTimes = time;
    if(labelTimes === 0){
      clearInterval(setTimer);
    }
    //decreade 1 second
    time --;
    
    //when a time is 0, logout
    } , 1000);
};
startLogoutTimer();
  

  











