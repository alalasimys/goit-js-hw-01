import Users from "./users";
/**Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false. */
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive);
};
