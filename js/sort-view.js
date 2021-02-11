const users = [
  { name: "Mango", daysActive: 15 },
  { name: "Poly", daysActive: 4 },
  { name: "Ajax", daysActive: 27 },
  { name: "Chelsey", daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));
