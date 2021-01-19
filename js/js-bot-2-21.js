/* Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке. */

function findLongestWord(string) {
  // Пиши код ниже этой строки
  let stringArray = string.split(" ");
  let longestWord = stringArray[0];
  console.log(stringArray);

  for (let i = 0; i < stringArray.length; i += 1) {
    if (longestWord.length < stringArray[i].length) {
      longestWord = stringArray[i];
    }
  }
  console.log(longestWord);
  return longestWord;
  // Пиши код выше этой строки
}

findLongestWord("The quick brown fox  jumped over the lazy dog");
//findLongestWord("Google do a roll");
