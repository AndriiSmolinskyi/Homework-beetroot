
//Напиши всі можливі варіанти створення функцій.

function someFunc(){
   
}

const funcSome = function(){

}

const abc = () =>{

}

// Створи функцію, яка буде виводити кількість переданих їй аргументів.


function amountArguments() {
   console.log(arguments.length);
 }
 
amountArguments(1, 2, 3); 


/**
 Напиши функцію, яка приймає 2 числа і повертає :
   1)-1, якщо перше число менше, ніж друге; 
   2)1 - якщо перше число більше, ніж друге; 
   3)0 - якщо числа рівні.
 */


function comparison(num1,num2){
   if(num1<num2){
      return -1;
   }else if(num1>num2){
      return 1;
   }else if(num1 == num2){
      return 0;
   }
}

console.log(comparison(1,2));


//Напиши функцію, яка обчислює факторіал переданого їй числа.


function factorialCount(num1){
   let res = 1;
   for (let index = num1; index > 1; index--) {
      res *= index;
   }
   return res;
}

console.log(factorialCount(5));


//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function functionSumRow(num1,num2,num3){
   let res = `${num1}${num2}${num3}`;
   return Number(res);
}

console.log(functionSumRow(1,2,3));


/**
Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
 */

function square(num1,num2){
   let res;
   if(num2 == undefined){
      res = num1 * num1;
   }else{
      res = num1 * num2;
   }
   return res;
}

console.log(square(4,5));


//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


const perfectNumber = (num)=>{
   let res = 0;
   for (let index = 0; index <= num/2; index++) {
      if(num % index === 0){
         res += Number(index);
      }   
   }
   if(res === num){
      return num;
   }
}

console.log(perfectNumber(6));

/**
 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
 і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, 
 щоб дізнатися, чи є це число досконалим.
 */


 const getPerfectNumbersInRange = (min, max) => {
   let perfectNumbers = [];
   for (let i = min; i <= max; i++) {
      if (perfectNumber(i)) {
         perfectNumbers.push(i);
      }
   }
   return perfectNumbers;
}

console.log(getPerfectNumbersInRange(1, 1000));

