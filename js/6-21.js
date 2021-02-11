import Users from "./users";
/**Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений. */
const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((freind, index, arr) => arr.indexOf(freind) === index);
};
console.log(getFriends(Users));
