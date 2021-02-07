// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach((item) => (totalPrice += item));

  // Пиши код выше этой строки
  return totalPrice;
}
