import users from './users.js';
const getSortedUniqueSkills = users =>
  users
    .flatMap(user => user.skills)
    .filter((uniq, index, arr) => arr.indexOf(uniq) === index)
    .sort((a, b) => a.localeCompare(b));
console.log(getSortedUniqueSkills(users));
