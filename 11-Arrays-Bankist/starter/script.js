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

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovement(account1.movements);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${balance} RUP `;
};
calcPrintBalance(account1.movements);

const createuser = acc => {
  acc.forEach(function (accs) {
    accs.newuser = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createuser(accounts);

calcPrintBalance;
////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maxmov = movements.reduce((max, mov) => (max > mov ? max : mov));
console.log(maxmov);

// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// ///reduce

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur);
// console.log(balance);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// const newcurrencies = new Set(['RUP', 'DIN', 'BUT', 'RUP']);

// newcurrencies.forEach(function (value, _, set) {
//   console.log(`${value} : ${value}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToIND = 75.77;

// const movementIND = movements.map(mov => mov * euroToIND);
// console.log(movementIND);

// movements.forEach(function (movement, index, arra) {
//
// });

/////////////////////////////////////////////////

// let arr = ['R', 'A', 'H', 'U', 'L', '@', '009'];
// console.log(arr.slice(2));

// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));

// ///splice

// console.log(arr.splice(5));
// console.log([...arr]);

// console.log(arr.reverse());
// console.log([...arr]);
// console.log(arr.reverse());
// console.log(arr.join(''));
// console.log(arr.at(-1));
// console.log(arr.at(-1));
// console.log(arr.at());

// const checkdogs = function (dogsJulia, dogsKate) {
//   const newJulia = dogsJulia.slice(1, 3);
//   const dogs = newJulia.concat(dogsKate);
//   console.log(dogs);
//   let status;
//   dogs.forEach(function (year, index) {
//     year > 3 ? (status = 'Adult') : (status = 'Puppy');
//     console.log(
//       `Dog number ${index + 1} is an ${status} and is ${year} years old`
//     );
//   });
// };

// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// checkdogs(dogsJulia1, dogsKate);

// const movementsDes = movements.map(
//   (mov, index) =>
//     `Movement ${index + 1}: you ${mov > 0 ? 'Deposit' : 'Withdrawal'}
//    ${Math.abs(mov)}`
// );
// console.log(movementsDes);

const calcAverageHumanAge = ages => {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultdogs = humanAges.filter(age => age >= 18);
  console.log(...humanAges);
  console.log(...adultdogs);
  const averageHuman = adultdogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(averageHuman);
};
calcAverageHumanAge([5, 2, 4, 15, 8, 3]);
