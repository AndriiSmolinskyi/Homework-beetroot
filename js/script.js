
/*
Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
*/


let shoppingList = [
   {
      name: 'banana',
      count: 5,
      acquired: true,
      price: 15,
      sum: 0,
   },
   {
      name: 'apple',
      count: 10,
      acquired: true,
      price: 5,
      sum: 0,
   },
   {
      name: 'kiwi',
      count: 3,
      acquired: false,
      price: 12,
      sum: 0,
   },
   {
      name: 'beetroot',
      count: 5,
      acquired: false,
      price: 4,
      sum: 0,
   },
]


function arrayLog(array){
   let boughtTrue = [];
   let boughtFalse;
   array.forEach((value, index, array) => {
      if(array[index].acquired === false){
         boughtTrue.push(array[index]);
      }
   })
   array.forEach((value, index, array) => {
      if(array[index].acquired === true){
         array[index].sum = array[index].count * array[index].price;
         boughtTrue.push(array[index]);
      }
   })
   console.log(boughtTrue);
   return boughtTrue;
}



arrayLog(shoppingList);


function itemBought(list,name){
   for (let index = 0; index < list.length; index++) {
      if(list[index].name == name){
         list[index].acquired = true;
         list[index].sum = list[index].count * list[index].price;            
         console.log(shoppingList.acquired);
         return
      }
   }
}

itemBought(shoppingList, 'beetroot');
console.log(shoppingList);


//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)


function listDelete(arr, deleteIndex){
   let newList = [...arr];
   return newList.splice(deleteIndex, 1);   
}

listDelete(shoppingList, 1);

/*
Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, 
наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
*/


function newItem(arr, name, count, acquired, price){

   for (let index = 0; index < arr.length; index++) {
      if(arr[index].name == name){
         arr[index].count += count;
         arr[index].sum = arr[index].count * arr[index].price;        
      }
   }  

   arr.push({name,count,acquired,price,sum: count*price});
   
    
}

newItem(shoppingList, 'guava', 5, true, 9);
console.log(shoppingList);


//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function allSum(arr){
   let listSum = 0;
   arr.forEach((value, index, arr) => {
      listSum += arr[index].count;
   })
   return listSum;
}

console.log(allSum(shoppingList));

//Підрахунок суми всіх (не) придбаних продуктів.

function sumFalseProduct(arr){
   let listSum = 0;
   arr.forEach((value, index, arr) => {
      if(arr[index].acquired === false){
         listSum += arr[index].count;
      }
   })
   return listSum;
}

console.log(sumFalseProduct(shoppingList));

//Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
//в залежності від параметра функції, який вона приймає)


function sortArray(arr, comparison){

   if(comparison == '>'){
      return arr.sort((a, b) => a.sum - b.sum);
   }else if(comparison == '<'){
      return arr.sort((a, b) => b.sum - a.sum);
   }
   
}

sortArray(shoppingList, '<');
console.log(shoppingList);









