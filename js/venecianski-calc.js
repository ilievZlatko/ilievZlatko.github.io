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
                      <a href="javascript:void(0);" title="Бежов">
                        <img src="media/product-detail/colors/den_nosht_class1/den-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Карамел">
                        <img src="media/product-detail/colors/den_nosht_class1/den-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Крем">
                        <img src="media/product-detail/colors/den_nosht_class1/den-3.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Лилаво">
                        <img src="media/product-detail/colors/den_nosht_class1/den-4.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Мока">
                        <img src="media/product-detail/colors/den_nosht_class1/den-5.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Небесно син">
                        <img src="media/product-detail/colors/den_nosht_class1/den-6.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Патешко жълто">
                        <img src="media/product-detail/colors/den_nosht_class1/den-7.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Розово">
                        <img src="media/product-detail/colors/den_nosht_class1/den-8.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Светло сиво">
                        <img src="media/product-detail/colors/den_nosht_class1/den-9.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Снежно бяло">
                        <img src="media/product-detail/colors/den_nosht_class1/den-10.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Черен Въглен">
                        <img src="media/product-detail/colors/den_nosht_class1/den-11.jpg" alt="/">
                      </a>
                    </li>`;
  var template2 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="Бамбо Бяло-1">
                        <img src="media/product-detail/colors/den_nosht_class2/den-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Вино">
                        <img src="media/product-detail/colors/den_nosht_class2/den-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Виолет">
                        <img src="media/product-detail/colors/den_nosht_class2/den-3.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Зелено">
                        <img src="media/product-detail/colors/den_nosht_class2/den-4.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Кобалт">
                        <img src="media/product-detail/colors/den_nosht_class2/den-5.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Лайм">
                        <img src="media/product-detail/colors/den_nosht_class2/den-6.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Магента">
                        <img src="media/product-detail/colors/den_nosht_class2/den-7.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Мед">
                        <img src="media/product-detail/colors/den_nosht_class2/den-8.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Минт">
                        <img src="media/product-detail/colors/den_nosht_class2/den-9.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Пастел">
                        <img src="media/product-detail/colors/den_nosht_class2/den-10.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Сиво">
                        <img src="media/product-detail/colors/den_nosht_class2/den-11.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо слонова кост">
                        <img src="media/product-detail/colors/den_nosht_class2/den-12.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бамбо Шоколад">
                        <img src="media/product-detail/colors/den_nosht_class2/den-13.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Медена дъга">
                        <img src="media/product-detail/colors/den_nosht_class2/den-14.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Пясъчна дъга">
                        <img src="media/product-detail/colors/den_nosht_class2/den-15.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Сива дъга">
                        <img src="media/product-detail/colors/den_nosht_class2/den-16.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Шоколадова дъга">
                        <img src="media/product-detail/colors/den_nosht_class2/den-17.jpg" alt="/">
                      </a>
                    </li>`;
  var template3 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="А-02">
                        <img src="media/product-detail/colors/den_nosht_class3/den-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бриз бежово">
                        <img src="media/product-detail/colors/den_nosht_class3/den-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бриз пепел от рози">
                        <img src="media/product-detail/colors/den_nosht_class3/den-3.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бриз Сиво">
                        <img src="media/product-detail/colors/den_nosht_class3/den-4.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Бриз слонова кост">
                        <img src="media/product-detail/colors/den_nosht_class3/den-5.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Фин">
                        <img src="media/product-detail/colors/den_nosht_class3/den-6.jpg" alt="/">
                      </a>
                    </li>`;
  var template4 = `<li class="color-selected">
                      <a href="javascript:void(0);" title="Горски дух (BO)">
                        <img src="media/product-detail/colors/den_nosht_class4/den-1.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Светъл дъб (BO)">
                        <img src="media/product-detail/colors/den_nosht_class4/den-2.jpg" alt="/">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Черен Ангел (BO)">
                        <img src="media/product-detail/colors/den_nosht_class4/den-3.jpg" alt="/">
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
        case 4:
          color.innerHTML = template4;
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
    var res = (((widthVal.value * heightVal.value) * 0.05) * qty.value);
    var checkedValue = document.querySelector('.myCheckbox:checked').value;
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
