/**Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.*/
const changeEven = (numbers, value) => {
  /**Вариант простой */
  // Пиши код ниже этой строки
  // let newArr = [...numbers];
  // numbers.forEach((number, index) => {
  //   if (number % 2 === 0) {
  //     newArr.splice(index, 1, number + value);
  //   }
  // });
  // return newArr;

  /**Вариант в мапом */
  const newArr = numbers.map((number) =>
    number % 2 === 0 ? number + value : number
  );
  return newArr;
};

console.log(changeEven([1, 2, 3, 4, 5], 10));
//возвращает новый массив [1, 12, 3, 14, 5].
