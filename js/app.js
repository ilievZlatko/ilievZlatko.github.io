(function () {
  'use strict';

  document.querySelector('.menu-link').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.menu-overlay').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('main').classList.toggle('show');
  });
}());
