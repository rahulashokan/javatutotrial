'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, country = '') {
  const html = `
  <article class="country ${country}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data.population / 1000000).toFixed(0)}M people
      </p>
      <p class="country__row">
        <span>🗣️</span>${Object.values(data.languages)}
      </p>
      <p class="country__row">
        <span>💰</span>${Object.values(data.currencies)[0].name}
      </p>
    </div>
  </article> 

  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (error) {
  countriesContainer.insertAdjacentHTML('beforeend', error);
  countriesContainer.style.opacity = 1;
};

const getJson = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status}) `);
    return response.json();
  });
};

const getcountry = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data1 => {
      console.log(data1);
      renderCountry(data1, 'neighbour');
    })
    .catch(error =>
      renderError(`Something Went Wrong: ${error.message} ,Try Again`)
    );
};
//   request.addEventListener('load', function () {
//     const [_, data] = JSON.parse(this.responseText);
//     console.log(data);

//     ///render country one
//     renderCountry(data, data.flags.svg);

//     ///render country two

//     const neighbour = [...data.borders];
//     console.log(neighbour);
//     for (let neighbourcount = 0; neighbourcount < 3; neighbourcount++) {
//       const request2 = new XMLHttpRequest();
//       request2.open(
//         'get',
//         `https://restcountries.com/v3.1/alpha/${neighbour[neighbourcount]}`
//       );
//       request2.send();

//       request2.addEventListener('load', function () {
//         let [neighbourList, _] = JSON.parse(this.responseText);

//         console.log(neighbourList.flags);
//         renderCountry(neighbourList, 'neighbour');
//       });
//     }
//   });
// };

// getCountryAndNeighbour('india');

// const request = new XMLHttpRequest();
// request.open('get', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
// const getcountry = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[1]));
// };
btn.addEventListener('click', () => getcountry('Pakistan'));
