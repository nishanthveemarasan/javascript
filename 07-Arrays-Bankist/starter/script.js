'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//APP CODE
//implement login
//compute username
accounts.forEach(function(acc , i){
  const user = acc.owner.toLowerCase().split(' ');
  const getUser = user.map(function(u , i){
    return u[0];
  });
  acc.username =  getUser.join('');
});
console.log(accounts);

let currentAccount;
btnLogin.addEventListener('click', function(e){
  e.preventDefault();
  const username = inputLoginUsername.value;
  const pin = inputLoginPin.value;
  currentAccount =  accounts.find(function(acc, i , arr){
    if(acc.username === username){
      return acc;
    }
  });
  if(currentAccount?.pin === Number(pin))
  {
    //display message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //clear INput Fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    //display moment
    displayMovements(currentAccount.movements);
    //balance
    calcPrintBalance(currentAccount.movements);
    ///summary
    calcDisplaySummary(currentAccount.movements , currentAccount.interestRate);
    //transfer
  
  
  
  
  
  }else{
    console.log("acconut not found");
  }
  
  
})


//Implenting transfer
btnTransfer.addEventListener('click' , function(e){
  e.preventDefault();
  const to = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);

  const findReceiver = accounts
                        .find(acc => acc.username === to);
  console.log(to , amount ,findReceiver);

})


const displayMovements = function(movements){
  containerMovements.innerHTML = ''; //similar to textContent
  //textCOntent only retur  the contnet
  //innerHTML including html tags
  movements.forEach(function(mov , i){
    console.log(mov , i);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
                    <div class="movements__value">${Math.abs(mov)}€</div>
                  </div>
                  `;
    containerMovements.insertAdjacentHTML('afterbegin' , html);
  });
}

 btnClose.addEventListener('click' , function(e){
   e,preventDefault();
   const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  const index = accounts.findIndex(acc => acc.username === currentAccount.username);
   if(username === currentAccount.username
    && pin === currentAccount.pin){
      accounts.splice(index , 1);

   }
 }) 

  //caluclate the curent balace

  const calcPrintBalance = function(movements){
    const balance = movements.reduce((acc , cur , i) => {
      return acc + cur;
    });
    labelBalance.textContent = `${balance} EUR`;
  }
  

  //display deposit
  const calcDisplaySummary = function(movements , interests){
    const income = movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
    labelSumIn.textContent = `${income} EUR`;

    const spent = movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
    labelSumOut.textContent = `${Math.abs(spent)} EUR`;

    const interest = movements.filter(mov => mov > 0)
    .map(mov => (mov * interests)/100)
    .reduce((acc, mov) => acc + mov);
    labelSumInterest.textContent = `${interest} EUR`;

  }
  
  //display withdrawal


  































//mdn then functon


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a' , 'b' , 'c' , 'd'];

//slice ->extract part of array(startIndex , endIndex)
//it will create a copy of an array
const slice = arr.slice(0 , 2);
const slice1 = arr.slice(-2);
console.log(slice , slice1);
arr.slice() === [...arr]
//splice(does mutate the array)(startIndex , endIndex)
//it will nodify original array
//it is used to remove elements from array
//(index , no of elements from that index)
const splice = arr.splice(2);
const spliceLast = arr.splice(-1);
console.log(splice, arr , spliceLast);

//Reverse(it does mutate the original array)
const arr2 = ['j' , 'i' , 'h' , 'g' , 'f'];
console.log(arr2.reverse() , arr2); 

//concat
const newConcat = arr.concat(arr2);
//[...arr , ...arr2]
console.log(newConcat);

//join
const joinArr = arr2.join(' ');
console.log(joinArr);

//LOPPING ARRAY = FOREACH
for(const [index , movement] of movements.entries())
{
  if(movement > 0){
    console.log('deposit' , index);
  }else{
    console.log('withdraw' , index);
  }
}
//foreach(currentArrayElement, currentIndex , entireArray)
movements.forEach(function( movement , index ){
  console.log(index , movement);
  if(movement > 0){
    console.log('deposit',index );
  }else{
    console.log('withdraw',index );
  }
});
//
const negative = Math.abs(-1300);
console.log(negative);


///////////////////////////////

//FORECH WITH MAPS AND SETS

console.log(currencies);
currencies.forEach(function(mapElement , key , map){
  console.log(mapElement , key);
});

const currenciesSet = new Set(['USD' , 'EUR' , 'GBP' , 'USD','EUR']);
console.log(currenciesSet);

//In set setElement == key 
//because set doesnt have key or index
currenciesSet.forEach(function(setElement , key , set){
  console.log(setElement , key);
});


console.log(accounts);

//DATA TRANSFORMATION: MAP, FILTER, REDUCE
/**
 * MAP:- loop over arrays/ similar to foreach
 * difference is it will process each element and create new array
 * So, it will returns a new array containing the results of
 * applying and operation on all elements
 * 
 * FILTER:- it will filter array element and gives new array
 * 
 * REDUCE:- reduce the array into one single value
 * eg:- sum of an array
 */

//MAP METHOD
const eurToUsed = 1.1;
const newMovement = movements.map(function(element , index){
  return element * eurToUsed;
});

console.log(newMovement);

//FILTER METHOD
const deposit = movements.filter(function(mov , i , arr){
  if(mov > 0){
    return mov;
  }
});
console.log(deposit);

//REDUCE METHOD
//first argument is cumulator
const total = movements.reduce(function(total , mov , i , arr){
  total += mov; 
  return total;
});
console.log(total);

//max value
const maxValue = movements.reduce(function(max , mov , i , arr){
    if(max < mov){
      return max;
    }else{
      return mov;
    }
}, movements[0]);
console.log(maxValue);

//MAGICEOF CHAINING METHOD
//this is called PIPELINE
const totalp = movements.filter(mov => mov > 0)
                      .map(mov => mov * eurToUsed)
                      .reduce((acc, mov) => acc + mov);
console.log(totalp);  


//FIND METHOD
//find the specific element based on the condition
//it will not return the array
//it will return only the first matched element
const findEle = movements.find(function(mov, i , arr){
  if(mov < 0){
    return mov;
  }
});
console.log(findEle);

const findEleAcc = accounts.find(function(acc, i , arr){
  if(acc.owner === 'Jessica Davis'){
    return acc;
  }
});

console.log(findEleAcc);

//SOME AND EVERY
//EQUALITY
console.log(movements.includes(-130));

//to check if there is any deposit
//check against a condition
const anyDeposit = movements.some(mov => mov > 5000);
console.log(anyDeposit);

//EVERY
//but will check every element shoud statisfy the conditons
//even if one element fails, it will return false
const anyDepositEvery = movements.every(mov => mov > 5000);
console.log(anyDepositEvery);


//FLAT AND FLATMAP

const arrr = [
  [1,2,3],
  [4,5,6],
  7,8
]
//to make everything into one array
console.log(arrr.flat());
//[1,2,3,4,5,6,7,8]

const arrrDeep = [
  [[1,2],3],
  [4,[5,6]],
  7,8
]
//if we have multip level 
//we need to use flatmap
//becuase flat will check only 1st level
//if we want to do with flat
//flat(number of level of nesting);
console.log(arrrDeep.flat(2));

//FLATMAP => flat + map(but it will go only one level)


//SORTING ARRAYS
const owners = ['Jonas' , 'Zack' , 'Adam' , 'Martha'];
console.log(owners.sort()); // it will mutate the array//it only for string
console.log(owners);

//numbers
//a -> current value
//b -> next value

// rertrn < 0 a,b
//or b,a
movements.sort((a , b) => {
  if(a > b){
    return 1;
  }else{
    return -1;
  }
});

console.log(movements);

//CREATE AND FILLING ARRAYS

const arrayCreate = [1,2,3,45,6,7];
const arrayCreate1= new Array(1,2,3,45,6,7);
//if we pass 1 element, it wil crate empty array 
//with size(7)
const x = new Array(7);
//(element , startIndex , EndIndex)
x.fill(2,4,6);
arrayCreate.fill(2,4,6);//it will replace in the array
console.log(x,arrayCreate);

//recreate the array
const y = Array.from({length: 7} , () => 1);
console.log(y);

const z = Array.from({length:7} , (cur , i) => i + 1);
console.log(z);

const momementsUI = Array.from(document.querySelectorAll('.movements__value'));



