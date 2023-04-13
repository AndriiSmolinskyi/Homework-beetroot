
/**
Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
 */

let age = Number(prompt('Введіть свій вік.'))

if(age >= 0 && age < 12){
  alert('Ви дитина.');
} else if(age >= 12 && age < 18){
  alert('Ви підліток.');
} else if(age >= 18 && age < 60){
  alert('Ви дорослий.');
} else if(age >= 60 ){
  alert('Ви пенсіонер.');
} 

/**
 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
 який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
 */

 let count = Number(prompt('Введіть число щоб отримати спецсимвол'));

 switch (count){
    case 1:
      alert('!');
      break;
    case 2:
      alert('@');
      break;
    case 3:
      alert('#');
      break;
    case 4:
      alert('$');
      break;
    case 5:
      alert('%');
      break;
    case 6:
      alert('^');
      break;
    case 7:
      alert('&');
      break;
    case 8:
      alert('*');
      break;
    case 9:
      alert('(');
      break;
    case 0:
      alert(')');
      break;
 }


//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let number1 = Number(prompt('Введіть перше число'));
let number2 = Number(prompt('Введіть 2 число'));
let result = 0;

while(number1 <= number2){
  result += number1;
  number1++;
}

alert(result)

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.

number1 = Number(prompt('Введіть перше число'));
number2 = Number(prompt('Введіть 2 число'));
let socdep;

for (let index = 0; index <= number1 && number2; index++) {
  
  if(number1 % index== 0 && number2 % index == 0 ){
    cosdep = index;
  }
  
}

alert(cosdep);

//Запитай у користувача число і виведи всі дільники цього числа.

let numDivision = Number(prompt('Введіть число'));
let allDivisions ="";

for (let index = 0; index <= numDivision; index++) {
  
  if(numDivision % index== 0 ){
    allDivisions += index;
  }
  
}

alert(allDivisions);

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


let norNum = String(prompt('Введіть пятизначне число'));
temp = Array.from(norNum).reverse().join('');
console.log(norNum);
console.log(temp);
if(norNum.length == 5 ){
    if(norNum == temp){
      alert('yes')
    }
}

/**
 * Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
  від 200 до 300 - знижка буде 3%; 
  від 300 до 500 - 5%;
  від 500 і вище - 7%.  
 * 
 */

let variation = Number(prompt('Введіть вартість покупки'))
let discount = 1;
if(variation >= 200 && variation < 300){
  discount = 0.97;
  console.log(variation*discount);
} else if(variation >= 300 && variation < 500){
  discount = 0.95;
  console.log(variation*discount);
}else if(variation >= 500){
  discount = 0.93;
  console.log(variation*discount);
}


/**
 * Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
 * При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
 * Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
 */

const numTen = [];

for (let index = 0; index < 10; index++) {
  numTen[index] = prompt('Введіть значення масиву' + index);
}

for (let index = 0; index < numTen.length; index++) {
  console.log(numTen[index]);
}

let numPlus = 0;
let numMinus = 0;
let numNull = 0;

for (let index = 0; index < numTen.length; index++) {

  if(numTen[index] > 0){
    numPlus++;
  }else if(numTen[index] < 0){
    numMinus++;
  }else if(numTen[index] == 0){
    numNull++;
  }
  
}

alert(`Кількість додатніх числел ${numPlus}`);
alert(`Кількість відємних числел ${numMinus}`);
alert(`Кількість відємних числел ${numNull}`);



/**
 * Зацикли відображення днів тижня таким чином: «День тижня. 
 * Хочеш побачити наступний день? » і так до тих пір, п
 * оки користувач натискає OK.
 */



let dayOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота", "Неділя"];
let dayi = 0;

while(confirm(`${dayOfWeek[dayi]} Хочеш побачити наступний день?`)){
  if(dayi == 6){
    dayi = -1;
  }
  dayi++;
}

/** 
Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, 
<N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, 
поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
 */

let min = 0;
let max = 100;
let N = Math.floor((min+max)/2);
let answer;
debugger;
do{
   answer = prompt(`ваше число > ${N} , чи < ${N} чи = ${N}`)
   
   if(answer == '>'){
      min = N;
   } else if(answer == '<'){
      max= N;
   } 
   N = Math.floor((min+max)/2);
}while(answer !== "=");

alert(`Ваше число ${N}`);

//Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

let arrNum = [2, 3, 4, 5, 6, 7, 8, 9]
for (let index = 0; index < 8; index++) {
   const numMulti = arrNum[index];
   for(let j = 1; j < 11; j++){
      arrNum[index] = numMulti  * j;
      // alert(arrNum[index]);
      console.log(arrNum[index]);
   }  
}


/**
 * Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
 * Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
 */




