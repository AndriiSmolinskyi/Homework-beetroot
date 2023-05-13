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

dot1.addEventListener("click", (event) => {
  dot1.style.backgroundColor = "white";
  dot2.style.backgroundColor = "transparent";
  dot3.style.backgroundColor = "transparent";
  dot4.style.backgroundColor = "transparent";
  dot5.style.backgroundColor = "transparent";
  headerBg.style.backgroundImage =
    'url("/img/tu-tram-pham-202263 11234.png"), linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%)';
});
dot2.addEventListener("click", (event) => {
  dot1.style.backgroundColor = "transparent";
  dot2.style.backgroundColor = "white";
  dot3.style.backgroundColor = "transparent";
  dot4.style.backgroundColor = "transparent";
  dot5.style.backgroundColor = "transparent";
  headerBg.style.backgroundImage =
    'url("/img/tu-tram-pham-202263 11234.png"), linear-gradient(90deg, rgba(235, 231, 105, 1) 0%, rgba(226, 89, 225, 1) 80%)';
});
dot3.addEventListener("click", (event) => {
  dot1.style.backgroundColor = "transparent";
  dot2.style.backgroundColor = "transparent";
  dot3.style.backgroundColor = "white";
  dot4.style.backgroundColor = "transparent";
  dot5.style.backgroundColor = "transparent";
  headerBg.style.backgroundImage =
    'url("/img/tu-tram-pham-202263 11234.png"), linear-gradient(90deg, rgba(217, 233, 99, 1) 8%, rgba(89, 170, 226, 1) 70%)';
});
dot4.addEventListener("click", (event) => {
  dot1.style.backgroundColor = "transparent";
  dot2.style.backgroundColor = "transparent";
  dot3.style.backgroundColor = "transparent";
  dot4.style.backgroundColor = "white";
  dot5.style.backgroundColor = "transparent";
  headerBg.style.backgroundImage =
    'url("/img/tu-tram-pham-202263 11234.png"), linear-gradient(90deg, rgba(99, 233, 119, 1) 13%, rgba(89, 177, 226, 1) 54%)';
});
dot5.addEventListener("click", (event) => {
  dot1.style.backgroundColor = "transparent";
  dot2.style.backgroundColor = "transparent";
  dot3.style.backgroundColor = "transparent";
  dot4.style.backgroundColor = "transparent";
  dot5.style.backgroundColor = "white";
  headerBg.style.backgroundImage =
    'url("/img/tu-tram-pham-202263 11234.png"), linear-gradient(90deg, rgba(241, 237, 94, 1) 25%, rgba(89, 177, 226, 1) 74%)';
});

$(".autoplay").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
});

const photoProj = document.querySelectorAll(".gallery__photo");
const visibility = document.querySelector(".visibility");
const popupPhoto = document.querySelector(".popup-photo");

for (let i = 0; i < photoProj.length; i++) {
  photoProj[i].addEventListener("click", function () {
    visibility.style.display = "flex";
    popupPhoto.src = this.src;
  });
}

visibility.addEventListener("click", function () {
  visibility.style.display = "none";
});

function initMap() {
  var myLatLng = { lat: 40.666862, lng: -73.928818 }; // координати місця, де потрібно розташувати маркер
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13.5, // масштаб карти
    center: myLatLng, // центр карти
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: "/img/map/Pinpin.svg", // шлях до застилізованого маркера
  });
}
