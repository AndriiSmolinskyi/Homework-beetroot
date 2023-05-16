/*
Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, 
замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
*/

const divBlock = document.querySelector(".text-block");
const textAreaBlock = document.createElement("textarea");
const container = document.querySelector(".container");
textAreaBlock.id = "textarea";
textAreaBlock.style.backgroundColor = "red";
textAreaBlock.textContent = "Це новий блок textarea!";
container.append(textAreaBlock);

let text = divBlock.innerText;
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "y") {
    textAreaBlock.style.display = "block";
    textAreaBlock.innerText = text;
    divBlock.style.display = "none";
  }
  if (event.ctrlKey && event.key === "i") {
    text = textAreaBlock.value;
    divBlock.innerText = text;
    textAreaBlock.style.display = "none";
    divBlock.style.display = "block";
  }
});
console.log(1)
/*
Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
, Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
*/

// const table = document.querySelector('table');
// const headerTable = table.querySelectorAll('th');
// console.log(table);




function sortTable(colIndex) {
  var table = document.getElementById("myTable");
  var rows = table.rows;
  var switching = true;
  var shouldSwitch;
  var i;

  while (switching) {
    switching = false;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      var x = rows[i].getElementsByTagName("td")[colIndex];
      var y = rows[i + 1].getElementsByTagName("td")[colIndex];
      if (isNaN(x.innerHTML)) {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}