function initMap() {
  var uluru = {lat: 43.221166, lng: 27.931383};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var image = 'img/icons/marker50x50.png';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
}
