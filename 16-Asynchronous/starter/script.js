'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('get', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [_, data] = JSON.parse(this.responseText);
    console.log(data);
    const countryImg = data.flags.png;
    const html = `
  <article class="country">
    <img class="country__img" src="${countryImg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data.population / 10000000).toFixed(0)}M people
      </p>
      <p class="country__row">
        <span>🗣️</span>${Object.values(data.languages)}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies.INR.name}
      </p>
    </div>
  </article> 

  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
  });
};

getCountryData('india');
