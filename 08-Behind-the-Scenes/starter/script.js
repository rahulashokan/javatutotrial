'use strict';

// console.log(me);
// let job = 'teacher';
// var me = 'Rahul';
// const age = 10;

// ///

// function deletshopping() {
//   console.log('All product deleted');
// }

// console.log(this);

// const calage = function (birhday) {
//   console.log(2024 - birhday);
//   console.log(this);
// };

// calage(1996);

// const calagearrow = birhday => {
//   console.log(2024 - birhday);
//   console.log(this);
// };

// calagearrow(1996);

// const rahul = {
//   year: 1996,
//   firstName: 'rahult',
//   calAgerahul: function () {
//     // console.log(this);
//     console.log(2024 - this.year);
//     const mileninalcheck = () => {
//       console.log(this);
//       console.log(this.year);
//     };
//     mileninalcheck();
//   },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// rahul.greet();
// rahul.calAgerahul();

//rahul.calAgerahul();

// const akhil = {
//   year: 1994,
// };

// akhil.calAgerahul = rahul.calAgerahul;

// akhil.calAgerahul();

// const f = rahul.calAgerahul;
// f();

///premitives

// let age = 27;
// let oldage = age;
// age = 31;

// console.log(oldage);
// console.log(age);

// const me = {
//   name: 'Rahul',
//   age: 27,
// };

// const friend = me;
// friend.age = 30;
// console.log(friend.age);
// console.log(me.age);

let lastname = 'thamaraserry';
let oldLastname = lastname;

lastname = 'T01';

console.log(lastname, oldLastname);

const name = {
  firstname: 'Rahul',
  lastname: 'T',
  age: 27,
};

const changedName = name;
console.log(changedName.firstname);
changedName.firstname = 'raht';
console.log(name.firstname);
console.log(changedName.firstname);

const name1 = {
  firstname: 'Rahul',
  lastname: 'T',
  age: 27,
};

const namechane = Object.assign({}, name1);

namechane.lastname = 'thamarase';

console.log(name1.lastname);
console.log(namechane.lastname);
