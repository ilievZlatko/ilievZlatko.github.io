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
  var classContent = document.querySelectorAll('[id^=class]');
  var template1 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="земя 3">
                        <img src="media/product-detail/colors/plise-1.jpg" alt="земя 3">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="жълто">
                        <img src="media/product-detail/colors/plise-2.jpg" alt="жълто">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="шоколад">
                        <img src="media/product-detail/colors/plise-3.jpg" alt="шоколад">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="слонова кост">
                        <img src="media/product-detail/colors/plise-4.jpg" alt="слонова кост">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="сиво">
                        <img src="media/product-detail/colors/plise-5.jpg" alt="сиво">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="мъгла 6">
                        <img src="media/product-detail/colors/plise-6.jpg" alt="мъгла 6">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="мъгла 4">
                        <img src="media/product-detail/colors/plise-7.jpg" alt="мъгла 4">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="мъгла 1">
                        <img src="media/product-detail/colors/plise-8.jpg" alt="мъгла 1">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="крем">
                        <img src="media/product-detail/colors/plise-9.jpg" alt="крем">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="карамел">
                        <img src="media/product-detail/colors/plise-10.jpg" alt="карамел">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="земя 15">
                        <img src="media/product-detail/colors/plise-11.jpg" alt="земя 15">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="земя 6">
                        <img src="media/product-detail/colors/plise-12.jpg" alt="земя 6">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="земя 5">
                        <img src="media/product-detail/colors/plise-13.jpg" alt="земя 5">
                      </a>
                    </li>`;
  var template2 = `<li class="color-selected">
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
  var template3 = `<li class="color-selected">
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
  var template4 = `<li class="color-selected">
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

  // switch between checkboxes. make active only the selected one
  [].forEach.call(checkbox, function(checkboxClicked) {
    checkboxClicked.addEventListener('click', function() {
      [].forEach.call(checkbox, function(checkbox){
        checkbox.checked = false;
      });
      this.checked = true;
    });
  });

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

  [].forEach.call(classContent, function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      RemoveClass();
      $('.color-picker').fadeOut("fast");
      this.classList.add('btn-active');
      var idNum = this.id;
      var arr = idNum.split('class')
      var numb = parseInt(arr[arr.length - 1]);
      color.innerHTML = '';
      switch (numb) {
        case 1:
          color.innerHTML = template1;
          $('.color-picker').fadeIn('fast');
          selectColor();
        break;
        case 2:
          color.innerHTML = template2;
          $('.color-picker').fadeIn('fast');
          selectColor();
        break;
        case 3:
          color.innerHTML = template3;
          $('.color-picker').fadeIn('fast');
          selectColor();
        break;
        case 4:
          color.innerHTML = template3;
          $('.color-picker').fadeIn('fast');
          selectColor();
        break;
        default:
          color.innerHTML = template1;
          $('.color-picker').fadeIn('fast');
          selectColor();
      }
    });
  });

  //add event listener when user selects color, detect color and create the modal box
  calculate.addEventListener('click', function(){
    var res = ((((widthVal.value * heightVal.value) * 0.0055816) * qty.value) * 1.2).toFixed(2) + " лв. с ДДС";
    var checkedValue = document.querySelector('.myCheckbox:checked').value;
    var color = document.querySelector('.color-selected img');
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

  //when user clicks outside of modal box close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

})();
