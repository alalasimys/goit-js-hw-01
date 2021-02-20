/**Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке. */
const findLongestWord = function (string) {
  let strArr = string.split(" ");
  // console.log(strArr);
  let logestWord = strArr[0];
  for (let i = 0; i < strArr.length; i++) {
    if (logestWord.length < strArr[i].length) {
      logestWord = strArr[i];
    }
  }
  return logestWord;
};

/*
Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
