//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let num1 = 0.1;
let num2 = 0.2;
let result = num1+num2;
console.log(result);

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся

let numSecond_1 = "1";
let numSecond_2 = 2;
result = Number(numSecond_1) + numSecond_2;
console.log(result);

/*
Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки 
файлів розміром в 820 Мб поміщається на флешку.
*/

let flashDrive = prompt('Введіть обєм флешки у гб');
let flashDriveMb = flashDrive * 1024;
let fileSize = 820;
result = Math.floor(flashDriveMb / fileSize);
console.log(result);

/*
Користувач вводить суму грошей в гаманці і 
ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
*/

let moneySum = prompt('Введіть скільки у вас грошей в гаманці, щоб дізнатись скільки ви можете придбати шоколаду.');
let chocolate = prompt('Ціна шоколаду.');
let moneyRest = Number(moneySum%chocolate);
result = Math.floor(Number(moneySum/chocolate));
console.log(result);
console.log(moneyRest);

/*
Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
*/

let number = prompt("Введіть тризначне число:");
let reverseNumber = "";

let numberAsString = number.toString();
let length = numberAsString.length;

for (let i = length - 1; i >= 0; i--) {
  reverseNumber += numberAsString[i];
}

console.log("Число задом наперед: " + reverseNumber);

/*
Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
Вивести суму нарахованих відсотків.
*/

let moneyDep = 1000;
let month = 2;
let yearPrecent = 5;
let yearMonth = 12;
let precentMoney = moneyDep * 0.05 * month / yearMonth;
console.log(precentMoney);

console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);


