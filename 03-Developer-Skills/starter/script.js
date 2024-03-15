// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperature1 = [12, 2, 34, 12, -1, 0, -5, 3, 5, 'error', 2, 4];
// const temperature2 = [12, 8, 36, 16];

// const calTemperatureAMP = function (temp1, temp2) {
//   const temp = temp1.concat(temp2);
//   console.log(`entire temperature chart ${temp}`);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temp.length; i++) {
//     let curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(`Maximum and Minimum temperature will be ${[max, min]}`);
//   return max - min;
// };

// const tempAmplitude = calTemperatureAMP(temperature1, temperature2);

// console.log(`Amplitude of the temperature is ${tempAmplitude}`);

// //temperature convertions

// const covertTempKel = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'calsius',
//     value: 10, //Number(prompt(`Please eneter the clesius entry`)),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(`The corresponding kelvin value will be  : ${covertTempKel()}`);

/// code 1 maximum forcast temperature

const maxTemperature = [17, 21, 23];
const maxTemperature2 = [14, 23, 23];

const printForecast = function (arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += `...${arr[i]}C in ${i + 1} days `;
  }
  console.log(result);
};

printForecast(maxTemperature.concat(maxTemperature2));
