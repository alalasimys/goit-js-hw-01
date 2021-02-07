/**Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach. */
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}
filterArray([1, 2, 3, 4, 5], 3); //возвращает [4, 5].
