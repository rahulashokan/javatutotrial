"use strict";

// let hasdriversLicense = false;

// const passTest = true;

// if (passTest) hasdriversLicense = true;
// if (hasdriversLicense) console.log(`have drivers license`);

// function juiceMaker(Apple, Orange) {
//   console.log(Apple, Orange);

//   const juice = `Make a juice of Apple with ${Apple} Apples and Orange juice with ${Orange} Oranges`;

//   return juice;
// }

// const juiceList = juiceMaker(2, 3);

// console.log(juiceList);

// console.log(juiceMaker(5, 6));

// const birthYear = prompt("What is the birth year?");

// function ageCal(birthYear) {
//   const age = 2023 - birthYear;
//   console.log(`You age is ${age}`);
//   return age;
// }

// const yourage = ageCal(birthYear);
// console.log(yourage);

// const newAge = (birthYear) => 2023 - birthYear;

// const age = newAge(1996);

// const ageCal2 = console.log(`new age with arrow function is ${age}`);

// const retrirment_age = (birthYear, firstname) => {
//   const age = 2023 - birthYear;
//   const retirement = 50 - age;
//   return `${firstname} retirement will be ${retirement}`;
// };
// console.log(retrirment_age(1996, "Rahul"));

// const cut_fruit_pieces = function (fruit) {
//   return fruit * 4;
// };

// const juiceMaker = function (Apple, Orange) {
//   console.log(Apple, Orange);

//   const applePieces = cut_fruit_pieces(Apple);
//   const orangePieces = cut_fruit_pieces(Orange);

//   const juice = `Make a juice of Apple with ${applePieces} Apples and Orange juice with ${orangePieces} Oranges`;

//   return juice;
// };

// const juiceList = juiceMaker(2, 3);

// const calAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const calRetirment = function (age) {
//   return 60 - age;
// };

// const retrirment_age = (birthYear, firstname) => {
//   const age = calAge(birthYear);
//   const retirement = calRetirment(age);

//   if (retirement > 0) {
//     return `${firstname} retirement will be ${retirement}`;
//   } else {
//     return `-1`;
//   }
// };
// console.log(retrirment_age(1950, "Rahul"));

///Array

// const friends = ["rahul", "akash", "Akshay"];

// console.log(friends);

// console.log(year[2]);

// console.log(year.length, year[year.length - 1]);

// year[2] = 1993;

// console.log(year);

// const calAge = function (birthyear) {
//   return 2023 - birthyear;
// };

// const year = new Array(116, 1995, 1994);

// const friends = ["rahul", "akash", "Akshay"];

// console.log(friends);

// //Addition

// friends.push("Maya");

// console.log(friends);

// const friendsLength = friends.push("rosemy");

// console.log(friendsLength);

// friends.unshift("Anirudh");

// console.log(friends);

//remove emelement

// friends.pop();

// console.log(friends);

// const popedElement = friends.pop();

// console.log(popedElement);

// console.log(friends);

// friends.shift();

// console.log(friends);

// console.log(friends.indexOf("rahul"));

// const rahulArray = ["rahul", 2023 - 1996, "finish the course", "sucessful"];

// console.log(rahulArray);

// const rahulObject = {
//   firstname: "rahul",
//   lastname: "T",
//   age: 2023 - 1996,
//   target_idea: "finish the course",
//   desti: "sucessfull",
// };

// console.log(rahulObject.firstname);
// const namekey = "name";
// console.log(rahulObject["first" + namekey]);
// console.log(rahulObject["last" + namekey]);

// // const insertValue = prompt(
// //   "Please enter the required option firstname,lastname,age,target-idea,desti"
// // );

// // if (rahulObject[insertValue]) {
// //   console.log(rahulObject[insertValue]);
// // } else {
// //   console.log(`Please enter a correct value`);
// // }

// rahulObject.lastname = "Thamaraserry";

// rahulObject["email"] = "raht009@gmail.com";

// console.log(rahulObject);

// rahulObject["friends"] = ["akash", "maya", "rosemy", "arun"];

// console.log(rahulObject);

// console.log(
//   `${rahulObject.firstname} has ${rahulObject.friends.length} friends, and his best friend is called ${rahulObject.friends[0]}`
// );

// const rahulObjectFunc = {
//   firstname: "rahul",
//   lastname: "T",
//   DOB: 1996,
//   target_idea: "finish the course",
//   desti: "sucessfull",
//   //   calc: function () {
//   //     console.log(this);
//   //     console.log(rahulObjectFunc);

//   //     return 2023 - this.DOB;
//   //   },
//   job: "developer",

//   calc: function () {
//     // console.log(this);
//     // console.log(rahulObjectFunc);
//     this.age = 2023 - this.DOB;
//     return this.age;
//   },
// };

// console.log(rahulObjectFunc.calc());

// console.log(rahulObjectFunc.age);

// if (rahulObjectFunc.age > 18) {
//   console.log(
//     `${rahulObjectFunc.firstname} is a ${rahulObjectFunc.age}-year old ${rahulObjectFunc.job}, and is he has a driving license `
//   );
// } else {
//   console.log(
//     `${rahulObjectFunc.firstname} is a ${rahulObjectFunc.age}-year old ${rahulObjectFunc.job}, and is he doesn't have a driving license `
//   );
// }

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI(), john.calcBMI());
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is  heigher than ${john.fullName}'s  (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is  heigher than ${mark.fullName}'s  (${mark.bmi})`
//   );
// }

const rahulObject = [
  "rahul",
  "T",
  2023 - 1996,
  "finish the course",
  "sucessfull",
  ["Akash", "Rosemy", "Maya"],
];

for (let i = 0; i < rahulObject.length; i++) {
  console.log(rahulObject[i], typeof rahulObject[i]);
}

const years = [1996, 1995, 1994, 1998];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

for (let i = 0; i < rahulObject.length; i++) {
  if (typeof rahulObject[i] !== "string") continue;
  {
    console.log(rahulObject[i], typeof rahulObject[i]);
  }
}
