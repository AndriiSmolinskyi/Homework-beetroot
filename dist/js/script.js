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

class Circle{
   constructor(attitude, radius){
      this.attitude = attitude;
      this.radius = radius;
   }

   get _Radius(){
      return `Cicrle-number: ${this.attitude}, radius: ${this.radius}`; 
   }

   get Diameter(){
      return `diametr = ${Number(this.radius)*2}`;
   }

   set _Radius(_Radius){
      [this.attitude, this.radius] = _Radius.split(' ');
   }

   circleArea(){
      return Math.PI * (this.radius*this.radius);
   }

   circleLength(){
      return 2*Math.PI *this.radius;
   }

   
}

const firstCircle = new Circle(1, 5);
console.log(firstCircle);
firstCircle._Radius = '1, 6';
console.log(firstCircle);
console.log(firstCircle.Diameter)
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


class Marker{

   constructor(order, color, precent){
      this.order = order;
      this.color = color;
      this.precent = precent;
   }

   get markInfo(){
      return this.order, this.color, this.precent;
   }

   set markInfo(markInfo){
      [this.order, this.color, this.precent] = markInfo.split(' ');
   }

   markInfoWrite() {
      const bodyJs = document.querySelector('body');
      const marketText = document.createElement('span');
      marketText.innerText = `Це ${this.order}ий маркер, його колір ${this.color} та він повний на ${this.precent}%!\n`;
      marketText.style.color = this.color;
      
      for (let index = this.precent; index !== 0; index -= 0.5) {
        const clonedMarketText = marketText.cloneNode(true);
        bodyJs.appendChild(clonedMarketText);
      }
    }
}

const firstMarker = new Marker(1, 'blue', 10);
console.log(firstMarker);
firstMarker.markInfoWrite();
firstMarker.markInfo = '1 red 2';
console.log(firstMarker);
firstMarker.markInfoWrite();


