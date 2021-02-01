'use strict';
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const tabs = document.querySelectorAll('.operations__tab');

// Tabbed component
tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Highlighted h2 in podheader
function unif(lo, hi) {
  return (hi - lo) * Math.random() + lo;
}

function jitter(el, lo, hi) {
  var value = 'rotate(' + unif(lo, hi) + 'deg)';
  el.style['transform'] = value;
  el.style['-webkit-transform'] = value;
}

//animacia subscribe
var email = document.getElementById('email');
var button = document.getElementById('button');

function validateEmail(email) {
  var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return ex.test(email);
}

email.addEventListener('keydown', function() {
  var email = this.value;

  if (validateEmail(email)) {
    button.classList.add('is-active');
  }
});

button.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.add('is-done', 'is-active');

  setTimeout(function() {
    button.innerHTML = 'Ďakujeme!';
  }, 500);
});
