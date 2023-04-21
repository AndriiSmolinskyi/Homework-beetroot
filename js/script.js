

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
   hours: 20,
   minutes: 30,
   seconds: 30,

   info: function(){
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
   }
   
}

dateUser.info()







