import Users from "./users.js";
/**Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке. */
const sortByName = (users) => {
  return [...users].sort((firstName, secondName) =>
    firstName.name.localeCompare(secondName.name)
  );
};
console.log(sortByName(Users));
