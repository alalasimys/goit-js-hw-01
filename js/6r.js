let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  numbers.push(Number(input));
}
total = numbers.reduce((total, number) => (total += number), 0);
console.log(`Общая сумма чисел равна ${total}`);
