//Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки

  string = array.join(delimeter);
  console.log(string);
  // Пиши код выше этой строки
  return string;
}

makeStringFromArray(["Манго", "спешит", "на", "поезд"], " ");
makeStringFromArray(["М", "а", "н", "г", "о"], "");
makeStringFromArray(["лучшее", "за", "неделю"], "_");
