//Напиши скрипт имитирующий авторизацию администратора в панели управления.
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let sign = prompt("Введите пароль");

if (sign === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (sign === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
