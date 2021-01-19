/** Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

В противном случае функция должна вернуть новый массив целиком. */
function makeArray(firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray).slice(0, maxLength);
  console.log(newArray);
  return newArray;
}
makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3);
makeArray(["Манго", "Поли", "Хьюстон"], ["Аякс", "Челси"], 4);
makeArray(["Манго"], ["Аякс", "Челси", "Поли", "Хьюстон"], 3);
makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 2);
makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 4);
makeArray(["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0);
