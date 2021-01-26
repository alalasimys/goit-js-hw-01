function sumArgs() {
  return this.name + " " + this.secondname;
}
sumArgs.call({ name: "alla", secondname: "vvv" });

function getAge() {
  return this.age;
}

const obj = {
  age: 22,
};

// age.call(obj);
const arr = [
  { nameGuest: "a", age: 11 },
  { nameGuest: "d", age: 66 },
  { nameGuest: "j", age: 33 },
];

const ages = arr.map(function (item) {
  console.log(item);
  return getAge.call(item);
});
console.log(ages);

// 1 вернуть список имен всех гостей "Имя:имя гостя, имя: имя гостя... "
function getGuestList() {
  return `Имя: ${this.nameGuest}`;
}
let messages = arr.map(function (guest) {
  console.log(guest);
  return getGuestList.call(guest);
});
console.log(messages.join(","));

//2 посчитать  сколько в сумме лет всем гостям
function sumGuestAge() {
  let totalAge = 0;
  arr.map(function (item) {
    totalAge += getAge.call(item);
  });
  return totalAge;
}
console.log(sumGuestAge());
