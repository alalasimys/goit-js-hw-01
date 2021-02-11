import Users from "./users.js";
/**Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users. */
const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => {
    return (total += user.balance);
  }, 0);
};
