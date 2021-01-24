//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let total = 0;
  for (const product of products) {
    for (const key in product) {
      if (productName === product.name) {
        total = product.price * product.quantity;
      }
    }
  }
  return total;
  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Бластер"));
console.log(calculateTotalPrice("Радар"));
console.log(calculateTotalPrice("Дроид"));
console.log(calculateTotalPrice("Захват"));
console.log(calculateTotalPrice("Сканер"));
