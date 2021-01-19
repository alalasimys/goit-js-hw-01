/*Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.*/
function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки

  let result = [];
  for (let value1 of array1) {
    const hasValue = array2.includes(value1);
    if (hasValue) {
      result.push(value1);
    }
  }
  return result;
  // Пиши код выше этой строки
}
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
