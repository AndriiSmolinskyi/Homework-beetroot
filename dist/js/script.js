/*
1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.
*/

class Circle {
  constructor(attitude, radius) {
    this.attitude = attitude;
    this.radius = radius;
  }

  get _Radius() {
    return `Cicrle-number: ${this.attitude}, radius: ${this.radius}`;
  }

  get Diameter() {
    return `diametr = ${Number(this.radius) * 2}`;
  }

  set _Radius(_Radius) {
    [this.attitude, this.radius] = _Radius.split(" ");
  }

  circleArea() {
    return Math.PI * (this.radius * this.radius);
  }

  circleLength() {
    return 2 * Math.PI * this.radius;
  }
}

const firstCircle = new Circle(1, 5);
console.log(firstCircle);
firstCircle._Radius = "1, 6";
console.log(firstCircle);
console.log(firstCircle.Diameter);
console.log(firstCircle.circleArea());
console.log(firstCircle.circleLength());

/*
2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; 
один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.
*/

class Marker {
  constructor(order, color, precent) {
    this.order = order;
    this.color = color;
    this.precent = precent;
  }

  get markInfo() {
    return this.order, this.color, this.precent;
  }

  set markInfo(markInfo) {
    [this.order, this.color, this.precent] = markInfo.split(" ");
  }

  markInfoWrite() {
    const bodyJs = document.querySelector("body");
    const marketText = document.createElement("span");
    marketText.innerText = `Це ${this.order}ий маркер, його колір ${this.color} та він повний на ${this.precent}%!\n`;
    marketText.style.color = this.color;

    for (let index = this.precent; index !== 0; index -= 0.5) {
      const clonedMarketText = marketText.cloneNode(true);
      bodyJs.appendChild(clonedMarketText);
    }
  }
}

const firstMarker = new Marker(1, "blue", 10);
console.log(firstMarker);
firstMarker.markInfoWrite();
firstMarker.markInfo = "1 red 2";
console.log(firstMarker);
firstMarker.markInfoWrite();

class RefillableMarker extends Marker {
  // constructor(order, color, precent){
  //    super(order, color, precent);
  // }

  refuel(fuelPrompt) {
    // const fuelPrompt = prompt('Введіть до 100');
    this.precent = fuelPrompt;
  }
}

const secondMarker = new RefillableMarker(2, "grey", 2);
console.log(secondMarker);
secondMarker.refuel(5);
secondMarker.markInfoWrite();

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
// Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(workers) {
    this.workers = workers;
  }

  getHTML() {
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const thName = document.createElement("th");
    thName.innerText = "name";
    table.appendChild(thName);
    const thPos = document.createElement("th");
    thPos.innerText = "position";
    table.appendChild(thPos);
    const thSalary = document.createElement("th");
    thSalary.innerText = "salary";
    table.appendChild(thSalary);
    const td = document.createElement("td");
    for (let index = 0; index < workers.length; index++) {
      const trCopy = tr.cloneNode(true);
      const tdCopy1 = td.cloneNode(true);
      const tdCopy2 = td.cloneNode(true);
      const tdCopy3 = td.cloneNode(true);
      const workersArray = workers[index];
      tdCopy1.textContent = workersArray.name;
      tdCopy2.textContent = workersArray.position;
      tdCopy3.textContent = workersArray.salary;
      trCopy.appendChild(tdCopy1);
      trCopy.appendChild(tdCopy2);
      trCopy.appendChild(tdCopy3);
      table.appendChild(trCopy);
    }
    document.body.appendChild(table);
  }
}

const workers = [
  new Employee("John Doe", "Manager", 17000),
  new Employee("Jane Smith", "Analyst", 17500),
  new Employee("Mike Johnson", "Developer", 24000),
];

console.log(workers);
const newTable = new EmpTable(workers);
newTable.getHTML();
