
$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const dot4 = document.querySelector(".dot-4");
const dot5 = document.querySelector(".dot-5");
const headerBg = document.querySelector(".bg");

dot1.addEventListener('click', (event) =>{
  dot1.style.backgroundColor = 'white';
  dot2.style.backgroundColor = 'transparent';
  dot3.style.backgroundColor = 'transparent';
  dot4.style.backgroundColor = 'transparent';
  dot5.style.backgroundColor = 'transparent';
  headerBg.style.backgroundImage = 'url("/img/tu-tram-pham-202263\ 11234.png"), linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%)';
});
dot2.addEventListener('click', (event) =>{
  dot1.style.backgroundColor = 'transparent';
  dot2.style.backgroundColor = 'white';
  dot3.style.backgroundColor = 'transparent';
  dot4.style.backgroundColor = 'transparent';
  dot5.style.backgroundColor = 'transparent';
  headerBg.style.backgroundImage = 'url("/img/tu-tram-pham-202263\ 11234.png"), linear-gradient(90deg, rgba(235, 231, 105, 1) 0%, rgba(226, 89, 225, 1) 80%)';
});
dot3.addEventListener('click', (event) =>{
  dot1.style.backgroundColor = 'transparent';
  dot2.style.backgroundColor = 'transparent';
  dot3.style.backgroundColor = 'white';
  dot4.style.backgroundColor = 'transparent';
  dot5.style.backgroundColor = 'transparent';
  headerBg.style.backgroundImage ='url("/img/tu-tram-pham-202263\ 11234.png"), linear-gradient(90deg, rgba(217, 233, 99, 1) 8%, rgba(89, 170, 226, 1) 70%)';
});
dot4.addEventListener('click', (event) =>{
  dot1.style.backgroundColor = 'transparent';
  dot2.style.backgroundColor = 'transparent';
  dot3.style.backgroundColor = 'transparent';
  dot4.style.backgroundColor = 'white';
  dot5.style.backgroundColor = 'transparent';
  headerBg.style.backgroundImage = 'url("/img/tu-tram-pham-202263\ 11234.png"), linear-gradient(90deg, rgba(99, 233, 119, 1) 13%, rgba(89, 177, 226, 1) 54%)';
});
dot5.addEventListener('click', (event) =>{
  dot1.style.backgroundColor = 'transparent';
  dot2.style.backgroundColor = 'transparent';
  dot3.style.backgroundColor = 'transparent';
  dot4.style.backgroundColor = 'transparent';
  dot5.style.backgroundColor = 'white';
  headerBg.style.backgroundImage = 'url("/img/tu-tram-pham-202263\ 11234.png"), linear-gradient(90deg, rgba(241, 237, 94, 1) 25%, rgba(89, 177, 226, 1) 74%)';
});

$(".autoplay").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
});



const photoProj = document.querySelectorAll('.gallery__photo');
const visibility = document.querySelector('.visibility');
const popupPhoto = document.querySelector('.popup-photo');

for (let i = 0; i < photoProj.length; i++) {
  photoProj[i].addEventListener('click', function() {
    visibility.style.display = 'flex';
    popupPhoto.src = this.src;
  });
}

visibility.addEventListener('click', function() {
  visibility.style.display = 'none';
});


            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.querySelector('.js-map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        