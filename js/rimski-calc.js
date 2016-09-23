(function() {
  "use strict";

  var widthVal = document.querySelector('#width');
  var heightVal = document.querySelector('#height');
  var qty = document.querySelector('#qty');
  var result = document.querySelector('#result');
  var calculate = document.querySelector('#calculate');
  var addItem = document.querySelector('.add-in-cart');
  var modal = document.querySelector('#myModal');
  var span = document.querySelector(".cancel");
  var modalBody = document.querySelector('.modal-body');
  var checkbox = document.querySelectorAll('.myCheckbox');

  [].forEach.call(checkbox, function(checkboxClicked) {
    checkboxClicked.addEventListener('click', function() {
      [].forEach.call(checkbox, function(checkbox){
        checkbox.checked = false;
      });
      this.checked = true;
    });
  });

  calculate.addEventListener('click', function(){
    var res;
    var checkedValue = document.querySelector('.myCheckbox:checked').value;
    var myAccessories = document.querySelector('.myAccessories:checked');
    var cord;
    var color = document.querySelector('.color-selected img');

    if(myAccessories) {
      res = ((((widthVal.value * heightVal.value) * 0.055816) * qty.value + (5 * qty.value)) * 1.2).toFixed(2) + " лв. с ДДС";
      cord = 'да';
    } else {
      res = ((((widthVal.value * heightVal.value) * 0.055816) * qty.value) * 1.2).toFixed(2) + " лв. с ДДС";
      cord = 'не';
    }

    result.textContent = res;
    modal.style.display = "block";
    modalBody.innerHTML = `<div class="row">
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">количество: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${qty.value}</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align center">цвят: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align"><p>${color.parentNode.title}</p><img src="${color.src}" alt="${color.getAttribute('alt')}"></div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">размер: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${widthVal.value} x ${heightVal.value} см.</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">управление: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${checkedValue}</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">корда: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${cord}</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">общо: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${res}</div>
                              <button class="btn btn-primary btn-sm">добави в количката</button>
                             </div>
                           </div>`;
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

})();
