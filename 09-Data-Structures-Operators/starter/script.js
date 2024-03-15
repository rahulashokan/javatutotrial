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
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  orderDelivery: function ({ time, address, starterIndex, mainMenuIndex }) {
    console.log(`Hi  your Order of starter  ${this.starterMenu[starterIndex]} 
    and main Menu ${this.mainMenu[mainMenuIndex]} will delivered at ${address} on ${time}`);
  },
  orderPizza: function (int1, int2, int3) {
    console.log(`Hey please find the pizza with ${int1} ${int2} ${int3}`);
  },
  ordernoodle: function (mainingre, ...otheringre) {
    console.log(`The main ingrediant is ${mainingre}`);
    console.log(`Other ingrediant is ${otheringre}`);
  },
};

// restaurant.orderDelivery({
//   time: '23:00',
//   address: 'Thamaraserry house',
//   starterIndex: 2,
//   mainMenuIndex: 1,
// });

// const { name, categories, openingHours } = restaurant;

// const arr = [1, 2, 3];

// const newarr = [5, 6, ...arr];
// console.log(newarr);
// console.log(...newarr);

// const newmenu = ['noodles', ...restaurant.mainMenu];
// console.log(newmenu);

// ///copying array

// const copyMainmenu = [...restaurant.mainMenu];

// const menu = [...copyMainmenu, ...restaurant.starterMenu];

// console.log(menu);

// const name1 = 'Rahul';

// const letters = [...name1];

// console.log(letters);

// const pizaaarray = [
//   prompt('please give the pizz a int1'),
//   prompt('please give the pizz a int2'),
//   prompt('please give the pizz a int3'),
// ];

//restaurant.orderPizza(...pizaaarray);

// const newresturant = { ...restaurant };

// console.log(newresturant);

// newresturant.name = 'rahul Resturant';

// console.log(newresturant.name);

// const arri = [1, 3, 2, 4, 5];

// const [a, b, ...others] = arri;
// console.log(a, b, others);

// const { sat, ...otherdays } = restaurant.openingHours;
// console.log(sat, otherdays);

/////object

// const { sat, ...weekdays } = openingHours;

// console.log({ ...weekdays });

// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   categories: menucat,
//   openingHours: hours,
// } = restaurant;

// console.log(restaurantName, menucat, hours);

// ///default values
// const { main = [], starterMenu: starter1 = [] } = restaurant;

// console.log(main, starter1);

///mutating a variable

// let a = 20;
// let b = 30;
// const obj = { a: 5, b: 6 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   sat: { open: OpenTime, close: ClosingTime },
// } = openingHours;

// console.log(OpenTime, ClosingTime);

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const v = arr[2];

// let [main1, , main2] = restaurant.mainMenu;
// console.log(main1, main2);

// [main1, main2] = [main2, main1];

// console.log(`after change ${main1} ${main2}`);

// const [starter1, maincourse] = restaurant.order(0, 2);

// console.log(starter1, maincourse);

// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [r = 1, u = 1, h = 1] = [2, 3];
// console.log(r, u, h);

/// functions

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// };
// add(2, 3);

// add(2, 3, 4, 5);

// restaurant.ordernoodle('mushroom', 'bread', 'tomato');

// let arr1 = [1, 2, ...[3, 4]];
// const [a1, b1, ...others1] = arr1;

// console.log(a1, b1, ...others1);

// const [pizza, macroni, ...newlist] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, macroni, newlist);

const rest01 = {
  namerest: 'pavabhai',
  restnum: 30,
};

const rest02 = {
  namerest: 'punjabi',
  owner: 'singh',
};

////OR

// rest01.restnum = rest01.restnum || 10;

// console.log({ ...rest01 });
// rest02.restnum = rest02.restnum || 10;

// console.log({ ...rest02 });

// rest01.restnum ||= 10;

// console.log({ ...rest01 });
// rest02.restnum ||= 10;

// console.log({ ...rest02 });

////nullish assignment operator

rest01.restnum ??= 10;

console.log(rest01);

rest02.restnum ??= 20;
console.log(rest02);
