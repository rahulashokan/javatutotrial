'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo(s1coords.left, s1coords.top);
});

//////practice

// console.log(document.documentElement);

// console.log(document.head);

// const Section = document.querySelector('.section');

// console.log(Section);

// const allSection = document.querySelectorAll('.section');

// console.log(allSection);

// const allButton = document.getElementsByTagName('button');
// console.log(allButton);

// const sectionID = document.getElementById('section--1');
// console.log(sectionID);

// ////creating and inserting elements
// const header = document.querySelector('.header');
// const message = document.createElement('div');

// message.classList.add('cookie-message');
// message.innerHTML = `hi this the dom inner html <button class="btn
// btn--close--cookie">got it</button>`;

// //header.prepend(message);

// header.append(message);

// ///Delete the element

// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// ///styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');
