/* Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.*/

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  console.log(numbers);
  // Пиши код выше этой строки
  return numbers;
}

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);
createArrayOfNumbers(1111, 1211);
