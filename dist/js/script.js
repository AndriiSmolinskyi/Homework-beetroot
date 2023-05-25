// Реалізуй клас User. Під час створення екземпляру на базі цього класу,
// обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user).
// У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно.
// У класі User повинні бути такі компоненти:

// getName
// getRole
// login
// logout
// сhangeName
// changePassword
// У класі Admin повинні бути такі компоненти:

// addUser
// removeUser
// changeUserRole
// getAllUsers

class User {
  static users = [];
  constructor(name, role, password) {
    this.name = name;
    this.password = password;
    this.role = role;
    User.users.push(this);
  }

  get Name() {
    return this.name;
  }

  get Role() {
    return this.role;
  }

  login() {
    const userName = prompt("Введіть логін");
    const userPass = prompt("Введіть пароль");
    if (userName === this.name && userPass === this.password) {
      alert("Ви залогінились");
    } else {
      alert("Невірний логін або пароль");
    }
  }

  logOut() {
    const userName = prompt("Введіть логін");
    const userPass = prompt("Введіть пароль");
    if (userName === this.name && userPass === this.password) {
      alert("Ви Вийшли з акаунта");
    } else {
      alert("Невірний логін або пароль");
    }
  }

  changeName() {
    const userName = prompt("Введіть логін");
    const userPass = prompt("Введіть пароль");
    if (userName === this.name && userPass === this.password) {
      const newName = prompt("Введіть нове імя");
      this.name = newName;
    } else {
      alert("Невірний логін або пароль");
    }
  }

  changePass() {
    const userName = prompt("Введіть логін");
    const userPass = prompt("Введіть пароль");
    if (userName === this.name && userPass === this.password) {
      const newPass = prompt("Введіть новий пароль");
      this.password = newPass;
    } else {
      alert("Невірний логін або пароль");
    }
  }
}

class Admin extends User {
  constructor(name, role, password) {
    super(name, role, password);
    this.role = "admin";
  }

  addUser(username, userrole, userpass) {
    const newUser = new User(username, userrole, userpass);
    console.log(newUser);
  }

  removeUser(id) {
    User.users.find((value, index, array) => {
      if (index === id) {
        User.users.splice(index, 1);
      }
    });
  }

  changeUserRole(changedRole, id) {
    const changedRol = changedRole;
    User.users.forEach((user, index) => {
      if (id === index) {
        User.users[index].role = changedRol;
        if (User.users[index].role == "admin") {
          User.users[index] = new Admin(
            User.users[index].name,
            User.users[index].role,
            User.users[index].password
          );
          User.users.splice(index, 1);
        }
      }
    });
  }

  getAllUsers() {
    console.log(User.users);
  }
}

const user1 = new User("Andrii", "user", "1234");
const user2 = new User("Vasiliy", "user", "1234");
const user3 = new User("Nataliya", "user", "1234");
console.log(user1);
const admin1 = new Admin("Bill", "admin", "1111");
console.log(admin1);
admin1.addUser("Bogdan", "user", "1234");
admin1.addUser("Heroin", "user", "1234");
admin1.getAllUsers();
admin1.removeUser(0);
admin1.getAllUsers();
admin1.changeUserRole("admin", 0);
admin1.getAllUsers();

/*
В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. Це годинники для різних куточків світу. 
Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. 
Реалізація WorldClock відбувається через class. 
Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

getCurrentDate
getCurrentDateTime
deleteClock
1 кнопка — показує користувачу час у текстовому варіанті
2 кнопка — показує користувачу поточну дату й час у текстовому варіанті
3 кнопка — видаляє годинник зі «стіни» годинників
*/

const clockBlock = document.querySelector(".clock-block");
const inputClock = document.querySelector(".clock-block__input");
const btnClock = document.querySelector(".clock-block__btn");
const clockWrapper = document.querySelector(".clock-wrapper");

class WorldClock {
  constructor(timezone) {
    this.timeZone = timezone;
  }

  createClock() {
    const clockItem = document.createElement("div");
    clockItem.style.width = "156px";
    clockItem.style.height = "auto";

    const clockCircle = document.createElement("div");
    clockCircle.style.width = "156px";
    clockCircle.style.height = "152px";
    clockCircle.style.borderRadius = "50%";
    clockCircle.style.backgroundColor = "#D9D9D9";
    clockCircle.style.marginBottom = "24px";

    const btnBlock = document.createElement("div");
    btnBlock.style.width = "100%";
    btnBlock.style.display = "flex";
    btnBlock.style.justifyContent = "space between";

    const btn1 = document.createElement("button");
    btn1.classList.add("btnClockItem");

    const btn2 = document.createElement("button");
    btn2.classList.add("btnClockItem");

    const btn3 = document.createElement("button");
    btn2.classList.add("btnClockItem");
  }

  getCurrentDate() {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: this.timeZone,
    };

    const formatter = new Intl.DateTimeFormat("default", options);
    const currentTime = formatter.format(new Date());

    console.log(`Поточний час у ${this.timeZone}: ${currentTime}`);
  }
}

// Приклад виклику функції для часового поясу "Europe/Kiev"
const Kiyv = new WorldClock("Europe/Kiev");
Kiyv.getCurrentDate();
