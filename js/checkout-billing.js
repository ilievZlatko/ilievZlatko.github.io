(function() {
  'use strict';

  var checkboxInvoice = document.querySelector('#check1');
  var invoiceHolder = document.querySelector('.invoice-details-holder');
  var checkboxOptions = document.querySelectorAll('.check');

  checkboxInvoice.addEventListener('change', function() {
    if(this.checked) {
      invoiceHolder.style.display = 'inherit';
    } else {
      invoiceHolder.style.display = 'none';
    }
  });

  [].forEach.call(checkboxOptions, function(checkboxClicked) {
    checkboxClicked.addEventListener('click', function() {
      [].forEach.call(checkboxOptions, function(checkbox){
        checkbox.checked = false;
      });
      this.checked = true;
    });
  });
})();
