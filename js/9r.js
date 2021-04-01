import users from './users.js';
const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
