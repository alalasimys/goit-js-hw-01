/** Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.*/
import Users from "./users.js";
const getTotalFriendCount = (users) => {
  return users.reduce((totalAmount, user) => {
    totalAmount +=
  }, 0);
};
console.log(getTotalFriendCount(Users));
