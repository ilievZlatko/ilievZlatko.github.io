(function(){
  'use strict';

  var clearItem = document.querySelectorAll('.btn-clear');
  var itemsHoler = document.querySelector('.items-holder');

  [].forEach.call(clearItem, function(item) {
    item.addEventListener('click', function() {
      var nodetoRemove = this.parentNode.parentNode;
      itemsHoler.removeChild(nodetoRemove);
    });
  });

  
})();
