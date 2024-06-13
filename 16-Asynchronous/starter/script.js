'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();

request.open('get', 'https://restcountries.com/v3.1/name/india');
request.send();

console.log(request.responseText);

request.addEventListener('load', function () {
  console.log(this.responseText);
});
