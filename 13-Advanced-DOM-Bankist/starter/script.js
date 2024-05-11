'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');
const tab = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///learnmore link scroll down
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///header links navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///tab componends

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;
  tab.forEach(id => id.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabContent.forEach(id => id.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///fade

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const hoverOn = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    if (!hoverOn) return;

    hoverOn.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
  //hoverOn.style.opacity = '.5';
});

////fade out

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const hoverOn = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    hoverOn.forEach(el => {
      if (el !== link) el.style.opacity = 100;
    });
    logo.style.opacity = 100;
  }
});

/////////////////////////////'./////

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);

// h1.closest('h1').style.backgroundColor = 'var(--color-primary)';
