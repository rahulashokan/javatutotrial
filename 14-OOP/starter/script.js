'use strict';

const Person = function (name, year) {
  this.name = name;
  this.year = year;
};

const user = new Person('rahul', 1996);

const user1 = new Person('rosmy', 1994);

const user2 = new Person('Akash', 1995);

console.log(user, user1, user2);

Person.prototype.calAge = function () {
  console.log(2024 - this.year);
};

user.calAge();

Person.prototype.species = 'Homo sapiens';

console.log(user.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 2, 5, 7, 5, 2, 4, 6];

console.log(arr.__proto__);
