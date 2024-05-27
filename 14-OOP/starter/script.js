'use strict';

// user.calAge();

// Person.prototype.species = 'Homo sapiens';

// // console.log(user.__proto__.__proto__);

// // console.log(Person.prototype.constructor);

// class Person {
//   static date = '1996';
//   constructor(firsname, year) {
//     (this.firsname = firsname), (this.year = year);
//   }
//   calAge() {
//     console.log(`Age is ${2024 - this.year}`);
//   }

//   static hey() {
//     console.log('Hi there');
//     console.log(this.date);
//   }
// }

// const rahul = new Person('Rahul', 1996);
// console.log(rahul);
// rahul.calAge();
// // rahul.hey();
// Person.hey();

// // const account = {
// //   name: 'Rahul',
// //   movement: [200, 400, 500],
// //   get latest() {
// //     return this.movement.slice(-1).pop();
// //   },
// // };

// // console.log(account.latest);

// const personProto = {
//   calAge() {
//     console.log(2024 - this.birthYear);
//   },
// };

// const akash = Object.create(personProto);
// console.log(akash);

// akash.name = 'Akash';
// akash.birthYear = 1995;
// akash.calAge();

// ////

// const Person = function (name, year) {
//   this.name = name;
//   this.year = year;
// };

// Person.prototype.calAge = function () {
//   console.log(2024 - this.year);
// };

// const Student = function (name, year, course) {
//   Person.call(this, name, year);
//   this.course = course;
// };
// ///linking prototypes
// Student.prototype = Object.create(Person.prototype);

// ///student prototype
// Student.prototype.introduce = function () {
//   console.log(`Hi i am ${this.name} and i study ${this.course}`);
// };

// const rahul = new Student('rahul', 1996, 'Computer science');

// console.log(rahul);
// rahul.introduce();

// rahul.calAge();

// const user1 = new Person('rosmy', 1994);

// const user2 = new Person('Akash', 1995);

// console.log(Student.prototype);

// console.log(rahul.__proto__.__proto__);

// class Person {
//   static date = '1996';

//   constructor(firsname, year) {
//     (this.firsname = firsname), (this.year = year);
//   }

//   calAge() {
//     console.log(`Age is ${2024 - this.year}`);
//   }

//   static hey() {
//     console.log('Hi there');
//     console.log(this.date);
//   }
// }

// class student extends Person {
//   constructor(firsname, year, course) {
//     super(firsname, year);
//     this.course = course;
//   }

//   introduce = function () {
//     console.log(`Hi i am ${this.firstname} and i study ${this.course}`);
//   };

//   calAge() {
//     console.log(`this is the student ${2024 - this.year}`);
//   }
// }

// const rahul = new student('Rahul', 1996, 'comupter science');

// rahul.calAge();

// ////////////Inheritance between class and Object Create/////

// const Personprototy = {
//   calcAge() {
//     console.log(2024 - this.year);
//   },

//   init(name, year) {
//     this.name = name;
//     this.year = year;
//   },
// };

// const akash = Object.create(Personprototy);
// const studentProto = Object.create(Personprototy);

// studentProto.init = function (name, year, course) {
//   Personprototy.init.call(this, name, year);
//   this.course = course;
// };

// studentProto.introduce = function () {
//   console.log(`Hi i am ${this.name} and i study ${this.course}`);
// };

// const maya = Object.create(studentProto);
// maya.init('Maya', 1998, 'Business analysist');
// maya.introduce();
// maya.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.local = navigator.language;

    console.log(`Thanks for openning the account ${owner}`);
  }
  ////public interface of the object
  deposit(value) {
    this.movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }
  /////////////////
}

const acc1 = new Account('Rahul', 'INR', 1111);
console.log(acc1);
acc1.deposit(10);
acc1.withdraw(200);
// acc1.movements.push(445);
// acc1.movements.push(-45);
console.log(acc1);
