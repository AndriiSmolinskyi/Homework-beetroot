

let userName = 'Vasiliy';
let userSurname = 'Smolinskiy';
let secondName = 'Smolinskiy';
let profile_name = 'Vasiliy';
const NUMBER_PI = 3.14;

// let a;

/*let 1user;
let user-name;
let console.log;
let 1234; 
let консоль*/

userName = null;
userName = prompt('Whats your name?');
alert(`Hello, ${userName}!`);


const nowYear = 2023;
let userBirth;
userBirth = prompt('What your year of birth?');
alert(nowYear-userBirth + ' ' + 'years old');


let sideSquare;
sideSquare = prompt('Введіть сторону квадрата, щоб дізнатись його периметр!');
alert(`${sideSquare*4} см`);

//Запитай у користувача радіус кола і виведи площу такої окружності.

const PI = 3.14;
let radius;
radius = prompt('Введіть радіус кола щоб дізнатись його площу!');
let squareCircle = PI * (radius*radius);
alert(squareCircle + 'см');

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він 
// хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

let distance, time;
distance = prompt('Введіть відстань між містами в км!');
time = prompt('За скільки часу ви хочете дістатись з одного міста в інше(в год)');
let speed = distance / time;
alert(`Щоб дібратсь вчасно, вам потрібно рухатись зі швидкістю ${speed} км/год`);


/*Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. 
Курс валют зберігається в константі. */

let usd;
usd = prompt('Введіть долари, щоб перевести їх в євро');
const eur = 0.92 * usd;
alert(`Ви отримали ${eur} євро.`);