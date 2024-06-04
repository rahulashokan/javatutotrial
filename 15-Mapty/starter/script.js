'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;

class Workout {
  id = (Date.now() + '').slice(-10);
  date = new Date();

  //date();
  constructor(coords, distance, duration) {
    this.coords = coords; ///[ lat, lng]
    this.distance = distance; ///km
    this.duration = duration; // min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.duration / this.distance;

    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevGain) {
    super(coords, distance, duration);
    this.elevGain = elevGain;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([12.942, 77.616], 5, 15, 700);

const cyc1 = new Cycling([12.942, 77.616], 5, 15, 700);

console.log(run1, cyc1);

//////////////////////
class App {
  #map;
  #mapEvent;
  #workOut;

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Not found');
        }
      );
  }

  _loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},16z?entry=ttu`
    );
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _newWorkout(e) {
    const validInput = (...inputs) =>
      inputs.every(inpts => Number.isFinite(inpts));

    ///positive values check

    const allPositive = (...inputs) => inputs.every(inpts => inpts > 0);

    e.preventDefault();
    ///////getting data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    ////////if type running create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      //////check if the entered data is valid
      if (
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Please enter a positive value');

      //////creating object for the workout
      this.#workOut = new Running([lat, lng], distance, duration, cadence);

      console.log(this.#workOut);
    }
    /////if type cylcling  create a cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Please enter a positive value');
      //////check if the entered data is valid

      ////creating Object

      this.#workOut = new Cycling([lat, lng], distance, duration, elevation);
      console.log(this.#workOut);
    }
    //// clearing input field
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Marker added')
      .openPopup();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
}

const appl = new App();
