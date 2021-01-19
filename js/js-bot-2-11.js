/* Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord) */

function calculateEngravingPrice(message, pricePerWord) {
  let messageLength = message.split(" ").length;
  console.log(messageLength);
  let total = messageLength * pricePerWord;
  console.log(total);
  return total;
}

calculateEngravingPrice("JavaScript у меня в крови", 10);
calculateEngravingPrice("JavaScript у меня в крови", 20);
calculateEngravingPrice("Веб-разработка это творческая работа", 40);
calculateEngravingPrice("Веб-разработка это творческая работа", 20);
