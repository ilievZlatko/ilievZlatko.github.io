(function() {
  "use strict";

  var widthVal = document.querySelector('#width');
  var heightVal = document.querySelector('#height');
  var qty = document.querySelector('#qty');
  var result = document.querySelector('#result');
  var calculate = document.querySelector('#calculate');
  var color = document.querySelector('.color-selected');
  var addItem = document.querySelector('.add-in-cart');

  calculate.addEventListener('click', function(){
    result.textContent = 'calc..';
  });

})();
