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
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this._role = "user";
  }

  get Name() {
    return this.name;
  }

  get Role() {
    return this._role;
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
  constructor(name, password) {
    super(name, password);
    this._role = "admin";
  }

  
  addUser(userid, usernam, userrole, userpass,){
   
  }
}


const user1 = new User("Andrii", "user", "1234");
const user2 = new User("Vasiliy", "user", "1234");
const user3 = new User("Nataliya", "user", "1234");
// user1.login();
console.log(user1);
// user1.changeName();
// user1.changePass();
// console.log(user1);
const admin1 = new Admin("Bill", "admin", "1111");
console.log(admin1);


