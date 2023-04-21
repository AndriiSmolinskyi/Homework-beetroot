

/**
 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
   Метод, який виводить на екран інформацію про автомобіль.
   Додавання ім’я водія у список
   Перевірка водія на наявність його ім’я у списку
   Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, 
   що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
 */


const car = {
   manufacturer: 'toyota',
   model: 'supra',
   year: '1996',
   averageSpeed: 120,
   fuelCapacity: '50 liter',
   fuelConsumption: '15 liter',
   drivers: [],

  addDriver: function(driverName) {
    this.drivers.push(driverName);
  },

   carInfo: function(){
      console.log(`manufacturer: ${this.manufacturer}`);
      console.log(`model: ${this.model}`);
      console.log(`year: ${this.year}`);
      console.log(`averageSpeed: ${this.averageSpeed}`);
      console.log(`fuelCapacity: ${this.fuelCapacity}`);
      console.log(`fuelConsumption: ${this.fuelConsumption}`);
      console.log(`driver: ${this.drivers}`);
   },

   ifDriver: function(someName){
      if(this.drivers == someName){
         console.log('This driver is');
      }else{
         console.log('This driver is`nt');
      }
   },

   necessaryTime: function(km){
      let time1 = km / this.averageSpeed;
      let time2 = time1 / 4;
      let time3 = Math.floor(time1+time2);
      return time3;
   }

}

car.addDriver('iam');
car.carInfo();
car.ifDriver('iam');
console.log(car. necessaryTime(1000));



/**
 Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
   Зміни часу на передану кількість секунд.
   Зміни часу на передану кількість хвилин.
   Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
 */


const dateUser = {
   hours: 0,
   minutes: 0,
   seconds: 0,

   info: function(){
      console.log(`${this.hours.toString().padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`);
   },
   
   plusSeconds: function (sec){
      this.seconds = this.seconds + sec;
      if(this.seconds>=60){
         this.minutes = Math.floor(this.seconds/60)
         this.seconds = this.seconds % 60;         
         if(this.minutes >= 60){
            this.hours = Math.floor(this.minutes/60)
            this.minutes = this.minutes % 60; 
            if(this.hours >= 24){
               this.hours = Math.floor(this.hours%24)
            }
         }
      }
   },

   plusMinutes: function(min){
      this.minutes = min;
      if(this.minutes >= 60){
         this.hours = Math.floor(this.minutes/60)
         this.minutes = this.minutes % 60; 
         if(this.hours >= 24){
            this.hours = Math.floor(this.hours%24)
         }
      }
   },

   plusHour: function(time){
      this.hours = time;
      if(this.hours >= 24){
         this.hours = Math.floor(this.hours%24)
      }
   }
  
   
}

Number(dateUser.plusSeconds(126534));
dateUser.info();
Number(dateUser.plusMinutes(375));
dateUser.info();
Number(dateUser.plusHour(172));
dateUser.info();



/**
Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу.
 */


const fractionFirst = {
   x : 7,
   y: 10,

}

const fractionSecond = {
   x : 5,
   y: 8,

}

const fractionMethods = {
   //(знаменник першого дробу * знаменник другого дробу) / НСД (знаменник першого дробу, знаменник другого дробу)
   add: function(frac1, frac2){
      let nsd = 0;
      for (let index = 0; index < fractionFirst.y && fractionSecond.y; index++) {
         if(fractionFirst.y%index==0 && fractionSecond.y%index==0){
            nsd = index;   
         }
      }
      let commonDeminator = (fractionFirst.y*fractionSecond.y) /nsd;
      console.log(commonDeminator);
      let temp1x = 0;
      let temp2x = 0;
      for (let index = fractionFirst.y; index >= 1; index--) {
         if(commonDeminator % index == 0  && index*fractionFirst.y==commonDeminator){
            temp1x = index;   
         }
      }
      console.log(temp1x);
      for (let index = fractionSecond.y; index >= 1; index--) {
         if(commonDeminator % index == 0  && index*fractionSecond.y==commonDeminator){
            temp2x = index;   
         }
      }
      console.log(temp2x);
      let result = (fractionFirst.x * temp1x) + (fractionSecond.x*temp2x);
      console.log(`${result}\n--\n${commonDeminator}`);
   }

   

}

fractionMethods.add();






