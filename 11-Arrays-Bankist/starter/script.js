'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 79.97, 1300],
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

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const move = sort ? movements.slice().sort((a, b) => a - b) : movements;

  move.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovement(account1.movements);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)} RUP `;
};
//calcPrintBalance(account1.movements);

const displaySummary = acc => {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income.toFixed(2)}₹`;

  const withdrawal = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${withdrawal.toFixed(2)}₹`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((inte, i, arr) => {
      //console.log(arr);
      return inte >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${Math.abs(interest).toFixed(2)}₹`;
};
//displaySummary(account1.movements);

//////username creation
const createuser = acc => {
  acc.forEach(function (accs) {
    accs.userName = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createuser(accounts);

const updateUI = acc => {
  /// display welcome message
  containerApp.style.opacity = 1;
  inputLoginPin.blur();
  labelWelcome.textContent = `Welcome ${acc.owner.split(' ')[0]}`;

  ///calculate movements

  displayMovement(acc.movements);

  ///balance

  calcPrintBalance(currentAccount);

  ///summary
  displaySummary(currentAccount);
  inputLoginUsername.value = inputLoginPin.value = '';
};

/////user identification
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  //console.log(`login user is ${currentAccount.owner}`);
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    updateUI(currentAccount);
  } //else {
  //   inputLoginPin.value = '';
  //   console.log('wrong credentials');
  //   containerApp.style.opacity = 0;
  // }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recveiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recveiverAcc &&
    currentAccount.balance >= amount &&
    recveiverAcc.userName !== currentAccount.userName
  ) {
    /// doing the transfer
    currentAccount.movements.push(-amount.toFixed(2));
    recveiverAcc.movements.push(amount.toFixed(2));
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = inputLoanAmount.value.toFixed(2);
  console.log(loanAmount);
  if (movements.some(mov => loanAmount > 0 && mov >= loanAmount * 0.1)) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(currentAccount.pin);

  if (
    inputCloseUsername?.value === currentAccount.userName &&
    +inputClosePin?.value === +currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);
    accounts.splice(index, 1);
    console.log(...accounts);
    //////Hide the UI
    inputClosePin.value = inputCloseUsername.value = '';
    containerApp.style.opacity = 0;
  } else {
    console.log(`incorrect user`);
  }
});

let sort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sort);
  sort = !sort;
});

////////

// const maxmov = movements.reduce((max, mov) => (max > mov ? max : mov));
// console.log(maxmov);

// const rupeeRate = 80;
///PIPELine method
// const totalRupees = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * rupeeRate)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalRupees);

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
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// const findmeth = movements.find(mov => mov + 5);
// const findmeth1 = movements.reduce(mov => mov + 5);

// console.log(...movements);
// console.log(findmeth);
// console.log(findmeth1);

//console.log(...accounts);

// const ownerjonas = accounts.find(owner => owner.owner === 'Jonas Schmedtmann');
// //console.log(ownerjonas);

// const arr = [1, 2, 3, 3, [[2, 4], 3], [42, 5], 5, 6];

// console.log(arr.flat());

// console.log(arr.flat(2));

// // const movementsacc = accounts.map(mov => mov.movements);
// // console.log(movementsacc);
// // const allMovements = movementsacc.flat();
// // console.log(allMovements);
// // let overallbalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overallbalance);
// //////flat
// let overallbalance = accounts
//   .map(mov => mov.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallbalance);

// /////flat map
// overallbalance = accounts
//   .flatMap(mov => mov.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallbalance);

// //////sort

// const names = ['rahul', 'david', 'akash', 'maya'];

// console.log(names.sort());

// console.log(movements);

// const newMov = movements.sort((a, b) => (a > b ? -1 : 1));
// console.log(newMov);

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// const arr = [1, 2, 3, 5, 6, 7, 7, 8, 8, 9];

// const a = new Array(7);

// console.log(a);

// a.fill(1);

// console.log(a);

// a.fill(6, 5, 8);

// console.log(a);

// arr.fill(4, 3, 4);
// console.log(arr);

/// form

// const b = Array.from({ length: 7 }, () => 1);
// console.log(b);

// const nr = Array.from({ length: 7 }, (acc, i) => i + 1);
// console.log(nr);

// const randroll = Array.from({ length: 100 }, (_, i) =>
//   Math.floor(Math.random() * i)
// );
// console.log(randroll);

// labelBalance.addEventListener('click', function () {
//   const movementUi = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent)
//   );

//   console.log(movementUi);
// });

// const movementlist = accounts
//   .flatMap(mv => mv.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(movementlist);

// console.log(
//   accounts
//     .flatMap(mv => mv.movements)
//     .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0)
// );

const sum = accounts
  .flatMap(mov => mov.movements)
  .reduce(
    (sum, cur) => {
      //cur > 0 ? (sum.deposit += cur) : (sum.widrawal += cur);
      sum[cur > 0 ? 'deposit' : 'widrawal'] += cur;
      return sum;
    },
    { deposit: 0, widrawal: 0 }
  );
//console.log(sum);
const covTital = tital => {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titalArray = tital
    .toLowerCase()
    .split(' ')
    .map(tit =>
      exceptions.includes(tit) ? tit : tit[0].toUpperCase() + tit.slice(1)
    );
  console.log(titalArray);
};

// console.log(covTital('the name is rahul'));
// console.log(covTital('SUCCESS is the only WAY OUT'));

// console.log(covTital('dont be a cry baby'));

// console.log(covTital('but be the legend'));

const dog = {};

console.log(Number.parseInt('36px', 10));

console.log(Number.parseInt('ps35', 10));

console.log(Number.parseFloat('40.5r', 10));

console.log(Number.isNaN('20'));

console.log(Number.isFinite(20));

console.log(Number.isFinite('20'));

console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(23));

const even = num => (num % 2 <= 0 ? 'even' : 'odd');
console.log(even(12.5));

const date = new Date();

console.log(date);

console.log(new Date(account1.da));
