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
  var checkbox = document.querySelectorAll('input[type=checkbox]');
  var color = document.querySelector('.color-picker');
  var class1 = document.querySelector('#class1');
  var class2 = document.querySelector('#class2');
  var class3 = document.querySelector('#class3');

  function selectColor(options) {
    $(".color-picker a").on('click', function(e){
        e.preventDefault();
        $(".color-picker li").each(function() {
          $(this).removeClass('color-selected');
        });
        $(this).parent('li').addClass('color-selected');
    });
  }

  class1.addEventListener('click', function(e) {
    e.preventDefault();
    class2.classList.remove('btn-active');
    class3.classList.remove('btn-active');
    this.classList.add('btn-active');
    $('.color-picker').fadeOut("fast");
    color.innerHTML = '';
    color.innerHTML = `<li class="color-selected">
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-1.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-2.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-3.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-4.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-5.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-6.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-7.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-8.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-9.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-10.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-11.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-12.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-13.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-14.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-15.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-16.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-17.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-18.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-19.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-20.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-21.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-22.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-23.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-24.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-25.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-26.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-27.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-28.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-29.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-30.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-31.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-32.jpg" alt="/">
                        </a>
                      </li>`;
    $('.color-picker').fadeIn('fast');
    selectColor();
  });

  class2.addEventListener('click', function(e) {
    e.preventDefault();
    class1.classList.remove('btn-active');
    class3.classList.remove('btn-active');
    this.classList.add('btn-active');
    $('.color-picker').fadeOut("fast");
    color.innerHTML = '';
    color.innerHTML = `<li class="color-selected">
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-1.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-2.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-3.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-4.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-5.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-6.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-7.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-8.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-9.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-10.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-11.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-12.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-13.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-14.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-15.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-16.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-17.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-18.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-19.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-20.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-21.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-22.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-23.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-24.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-25.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-26.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-27.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-28.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-29.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-30.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-31.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/rimski-32.jpg" alt="/">
                        </a>
                      </li>`;
    $('.color-picker').fadeIn('fast');
    selectColor();
  });

  class3.addEventListener('click', function(e) {
    e.preventDefault();
    class1.classList.remove('btn-active');
    class2.classList.remove('btn-active');
    this.classList.add('btn-active');
    $('.color-picker').fadeOut("fast");
    color.innerHTML = '';
    color.innerHTML = `<li class="color-selected">
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-1.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-2.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-3.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-4.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-5.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-6.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-7.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-8.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-9.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-10.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-11.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-12.jpg" alt="/">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="media/product-detail/colors/plise-13.jpg" alt="/">
                        </a>
                      </li>`;
    $('.color-picker').fadeIn('fast');
    selectColor();
  });

  [].forEach.call(checkbox, function(checkboxClicked) {
    checkboxClicked.addEventListener('click', function() {
      [].forEach.call(checkbox, function(checkbox){
        checkbox.checked = false;
      });
      this.checked = true;
    });
  });

  calculate.addEventListener('click', function(){
    var res = (((widthVal.value * heightVal.value) * 0.0055816) * 1.2).toFixed(2) + " лв. с ДДС";
    var checkedValue = document.querySelector('.myCheckbox:checked').value;
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
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small right-align">управление: </div>
                             <div class="col-xs-3 col-sm-6 col-md-6 top-margin-small left-align">${checkedValue}</div>
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
