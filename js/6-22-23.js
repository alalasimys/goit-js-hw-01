import Users from "./users";
/**Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true. */
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
  //return users.filter((user) => !user.isActive); - false
};
