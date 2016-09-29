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
  var checkbox = document.querySelectorAll('.fixing');
  var color = document.querySelector('.color-picker');
  var classContent = document.querySelectorAll('[id^=class]');

  function selectColor(options) {
    $(".color-picker a").on('click', function(e){
        e.preventDefault();
        $(".color-picker li").each(function() {
          $(this).removeClass('color-selected');
        });
        $(this).parent('li').addClass('color-selected');
    });
  }

  function RemoveClass() {
    [].forEach.call(classContent, function(item) {
      item.classList.remove('btn-active');
    });
  }

  $(document).ready(function() {
    $(".tabLink").each(function(){
      $(this).click(function(e){
        e.preventDefault();
        var tabeId = $(this).attr('id');
        $(".tabLink").removeClass("btn-active");
        $(this).addClass("btn-active");
        $(".color-picker").addClass("hide").fadeOut("fast");
        $("#"+tabeId+"-1").removeClass("hide").fadeIn("fast");
        return false;
      });
    });
  });
  
  [].forEach.call(checkbox, function(checkboxClicked) {
    checkboxClicked.addEventListener('click', function() {
      [].forEach.call(checkbox, function(checkbox){
        checkbox.checked = false;
      });
      this.checked = true;
    });
  });

  [].forEach.call(fixing, function(checkboxClicked) {
    checkboxClicked.addEventListener('click', function() {
      [].forEach.call(fixing, function(checkbox){
        checkbox.checked = false;
      });
      this.checked = true;
    });
  });

  calculate.addEventListener('click', function(){
    var res = (((widthVal.value * heightVal.value) * 0.05) * qty.value);
    var checkedValue = document.querySelector('.myCheckbox:checked').value;
    var checkedValue2 = document.querySelector('.fixing:checked').value;
    var myAccessories = document.querySelector('.myAccessories:checked');
    var myAccessories2 = document.querySelector('.myAccessories2:checked');
    var cord;
    var control;
    var color = document.querySelector('.color-selected img');

    if(myAccessories) {
      res = res + (0.6 * qty.value);
      cord = 'да';
    } else {
      res = res;
      cord = 'не';
    }

    if(myAccessories2) {
      res = (res + (3.6 * qty.value));
      control = 'да';
    } else {
      res = res;
      control = 'не';
    }

    result.textContent = res.toFixed(2) + 'лв. с ДДС';
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
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">монтаж: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${checkedValue2}</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">стопери: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${cord}</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">странично водене: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${control}</div>
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">общо: </div>
                              <div class="col-xs-8 col-sm-8 col-md-8 top-margin-small left-align">${res.toFixed(2)} лв. с ДДС</div>
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
