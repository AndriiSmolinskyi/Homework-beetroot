let playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

const playListElement = document.getElementById("playlist");

for (let index = 0; index < playList.length; index++) {
  let author = playList[index].author;
  let song = playList[index].song;
  const listItem = document.createElement("li");
  listItem.innerText = `${index}) ${author} - ${song}`;
  playListElement.append(listItem);
}

/*
Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
*/

const btn1 = document.querySelector(".btn1");
const modal__window__active = document.querySelector(".modal__window__active");
const visibility = document.querySelector(".visibility");
const btn2 = document.querySelector(".btn2");
btn1.addEventListener("click", (event) => {
  modal__window__active.style.display = "flex";
  visibility.style.display = "block";
});

btn2.addEventListener("click", (event) => {
  modal__window__active.style.display = "none";
  visibility.style.display = "none";
});

//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const trafficLight = document.querySelector(".traffic-light");
const button = document.querySelector(".button");

// trafficLight.addEventListener('click', (event) =>{

// });

// color1.addEventListener('click', (event) =>{
//    color1.style.backgroundColor = 'red';
//    color2.style.backgroundColor = 'gray';
//    color3.style.backgroundColor = 'gray';
// });
// color2.addEventListener('click', (event) =>{
//    color1.style.backgroundColor = 'gray';
//    color2.style.backgroundColor = 'yellow';
//    color3.style.backgroundColor = 'gray';
// });
// color3.addEventListener('click', (event) =>{
//    color1.style.backgroundColor = 'gray';
//    color2.style.backgroundColor = 'gray';
//    color3.style.backgroundColor = 'green';
// });

let colorNow = "color1";
button.addEventListener("click", (event) => {
  switch (colorNow) {
    case "color1":
      color1.style.opacity = 1;
      color2.style.opacity = 0.2;
      color3.style.opacity = 0.2;
      colorNow = "color2";
      break;
    case "color2":
      color1.style.opacity = 0.2;
      color2.style.opacity = 1;
      color3.style.opacity = 0.2;
      colorNow = "color3";
      break;
    case "color3":
      color1.style.opacity = 0.2;
      color2.style.opacity = 0.2;
      color3.style.opacity = 1;
      colorNow = "color1";
      break;
  }
});
