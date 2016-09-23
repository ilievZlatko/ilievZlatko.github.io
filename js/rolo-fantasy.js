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
  var color = document.querySelector('.color-picker');
  var classContent = document.querySelectorAll('[id^=class]');
  var template1 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="9602">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Игуазу 3">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Нило 2">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-3.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Нило 3">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-4.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Etamine Apricote прозрачо">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-5.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Etamine Teracota прозрачо">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-6.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Grey">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-7.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Monet Blue">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-8.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Monet Cherry">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-9.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Monet Cinder">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-10.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Monet Dim Grey">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-11.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Monet Lavende">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-12.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Monet Violet">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-13.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Rain 4">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-14.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Rain 11">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-15.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Tema 4">
                        <img src="media/product-detail/colors/fantasy_class1/fantasy-16.jpg" alt="/">
                      </a>
                    </li>`;
  var template2 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="Altamira Natural">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Bamboo Bright(BO)">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="BBamboo Wallnut (BO)">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-3.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Boston Natural">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-4.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Clair Rose Wood">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-5.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Clair White">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-6.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Dim out 4 (BO)">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-7.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Linen 2">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-8.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Linen 3">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-9.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Linen 4">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-10.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Linen Special">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-11.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Link Rose">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-12.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Link Sand">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-13.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Panama">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-14.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Pebbles Navy прозрачно">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-15.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Pebbles Sand прозрачно">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-16.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Pebbles Wood прозрачно">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-17.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Rain 13(BO)">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-18.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Simphony">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-19.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="T - 3002">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-20.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="T - 3002">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-21.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="T -3001">
                        <img src="media/product-detail/colors/fantasy_class2/fantasy-22.jpg" alt="/">
                      </a>
                    </li>`;
  var template3 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="Bamboo Met(BO)">
                        <img src="media/product-detail/colors/fantasy_class3/fantasy-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Bliss Gold">
                        <img src="media/product-detail/colors/fantasy_class3/fantasy-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Ecovision">
                        <img src="media/product-detail/colors/fantasy_class3/fantasy-3.jpg" alt="/">
                      </a>
                    </li>`;

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
        default:
          color.innerHTML = template1;
          $('.color-picker').fadeIn('fast');
          selectColor();
      }
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

  calculate.addEventListener('click', function(){
    var res;
    var checkedValue = document.querySelector('.myCheckbox:checked').value;
    var myAccessories = document.querySelector('.myAccessories:checked');
    var cord;
    var color = document.querySelector('.color-selected img');

    if(myAccessories) {
      res = (((widthVal.value * heightVal.value) * 0.055816) * qty.value + (0.6 * qty.value)).toFixed(2) + " лв. с ДДС";
      cord = 'да';
    } else {
      res = (((widthVal.value * heightVal.value) * 0.055816) * qty.value).toFixed(2) + " лв. с ДДС";
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
                              <div class="col-xs-4 col-sm-4 col-md-4 top-margin-small right-align">стопери: </div>
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
