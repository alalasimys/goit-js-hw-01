import Users from "./users.js";
/**Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends). */
const getNamesSortedByFriendCount = (users) =>
  [...users]
    .sort((first, second) => first.friends.length - second.friends.length)
    .map((user) => user.name);

console.log(getNamesSortedByFriendCount(Users));
