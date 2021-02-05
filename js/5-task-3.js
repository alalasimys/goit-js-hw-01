/**Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items. */
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  } //- возвращает массив текущих товаров
  addItem(item) {
    this.items.push(item);
  } //- получает новый товар и добавляет его к текущим
  removeItem(item) {
    let indexItem = this.items.indexOf(item);
    this.items.splice(indexItem, 1);
  } //- получет товар и, если он есть, удаляет его из текущих
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
