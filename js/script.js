
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



const photoProj = document.querySelectorAll('.gallery__block__item');
const body = document.querySelector('body');
console.log(photoProj);
let temp = -1;
photoProj.addEventListener('click', (event)=>{
  
})