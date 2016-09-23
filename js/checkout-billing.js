(function() {
  'use strict';

  var checkboxInvoice = document.querySelector('#check1');
  var invoiceHolder = document.querySelector('.invoice-details-holder');

  checkboxInvoice.addEventListener('change', function() {
    if(this.checked) {
      invoiceHolder.style.display = 'inherit';
    } else {
      invoiceHolder.style.display = 'none';
    }
  });
})();
