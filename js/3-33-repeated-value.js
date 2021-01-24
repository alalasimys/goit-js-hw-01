// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.
// Пиши код ниже этой строки
function findMatches([...arrArgs], ...args) {
  const matches = []; // Не изменяй эту строку
  for (let arg of args) {
    for (let arrArg of arrArgs) {
      if (arg === arrArg) {
        matches.push(arg);
      }
    }
  }
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

/**Примеры на поиск повторяющихся аргуентов */
/**const arr3 = [1, 2, 3, 4];
const arr4 = [2, 6, 12, 4, 8];

const getRepeatedValues = (arr1, arr2) => {
  let result = [];
  // for (let value1 of arr1) {
  //   for (let value2 of arr2) {
  //     if (value2 === value1) {
  //       result.push(value1);
  //       break;
  //     }
  //   }
  // }

  for (let value1 of arr1) {
    const hasValue = arr2.includes(value1);

    if (hasValue) {
      result.push(value1);
    }
  }

  return result;
};

const repeated = getRepeatedValues(arr3, arr4);
console.log(repeated);
 */
