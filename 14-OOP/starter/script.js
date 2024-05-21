'use strict';

// const Person = function (name, year) {
//   this.name = name;
//   this.year = year;
// };

// const user = new Person('rahul', 1996);

// const user1 = new Person('rosmy', 1994);

// const user2 = new Person('Akash', 1995);

// console.log(user, user1, user2);

// Person.prototype.calAge = function () {
//   console.log(2024 - this.year);
// };

// user.calAge();

// Person.prototype.species = 'Homo sapiens';

// console.log(user.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// class Person {
//   constructor(firsname, year) {
//     (this.firsname = firsname), (this.year = year);
//   }
//   calAge() {
//     console.log(`Age is ${2024 - this.year}`);
//   }
// }

// const rahul = new Person('Rahul', 1996);
// console.log(rahul);
// rahul.calAge();
const account = {
  name: 'Rahul',
  movement: [200, 400, 500],
  get latest() {
    return this.movement.slice(-1).pop();
  },
};

console.log(account.latest);
