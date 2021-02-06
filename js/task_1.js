/**Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of */
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

// console.log(user.name);
// console.log(user["name"]);

function getObj(obj) {
  obj.mood = "happy";
  obj.hobby = "skydiving";
  obj.premium = false;

  let values = Object.keys(obj);
  for (const value of values) {
    console.log(`${value}: ${obj[value]}`);
  }
  return;
}

getObj(user);
