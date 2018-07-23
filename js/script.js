// init AOS library
AOS.init();

// init carousel

$(".carousel").carousel({
  interval: 5000 //changes the speed
});
$("#carousel-example-generic").carousel({
  interval: 5000 //changes the speed
});

// init map

function initMap() {
  var myLatLng = { lat: 32.507832, lng: -110.884743 };

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "Hello World!"
  });
}
