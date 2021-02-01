'use strict';
const header = document.querySelector('.header');
const nav = document.querySelector('.navigation-wrap');
const btnOpenModal = document.querySelector('.menu-wrapper');

const initialCoords = header.getBoundingClientRect();

window.addEventListener('scroll', function() {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

(function($) {
  'use strict';

  $(function() {
    var header = $('.start-style');
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 1000) {
        header.removeClass('start-style').addClass('scroll-on');
      } else {
        header.removeClass('scroll-on').addClass('start-style');
      }
    });
  });

  //Animation

  $(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function() {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });
})(jQuery);

(function() {
  $('.menu-wrapper').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
    $('.navigation-wrap').toggleClass('vyska');
  });
})();
