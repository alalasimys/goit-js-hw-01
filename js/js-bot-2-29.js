/**Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка. */

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let result = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  console.log(result);
  return result;

  // Пиши код выше этой строки
}
getEvenNumbers(2, 5);
getEvenNumbers(6, 12);
