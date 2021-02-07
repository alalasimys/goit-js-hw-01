/**Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach. */
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  firstArray.forEach((arrItem) => {
    if (secondArray.includes(arrItem)) {
      commonElements.push(arrItem);
    }
  });
  return commonElements;
  // Пиши код выше этой строки
}
getCommonElements([1, 2, 3], [2, 4]); //возвращает [2].
