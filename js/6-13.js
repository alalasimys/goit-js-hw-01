/**Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users. */
import Users from "./users.js";

const getUserNames = (users) => {
  const usersArr = users.map((user) => user.name);
  return usersArr;
};
console.log(getUserNames(Users));
