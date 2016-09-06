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

  calculate.addEventListener('click', function(){
    var res = (((widthVal.value * heightVal.value) * 0.0055816) * 1.2).toFixed(2) + " лв. с ДДС";
    var color = document.querySelector('.color-selected img').src;
    result.textContent = res;
    modal.style.display = "block";
    modalBody.innerHTML = `<div class="row">
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small right-align">брой щори: </div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small left-align">${1}</div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small right-align center">цвят: </div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small left-align"><img src="${color}" alt="/"></div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small right-align">размер: </div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small left-align">${widthVal.value} x ${heightVal.value} см.</div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small right-align">общо: </div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small left-align">${res}</div>
                             <div class="col-xs-12 col-sm-12 col-md-12 top-margin-small">
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
