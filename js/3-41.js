/**Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
  Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
 */
const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    // this.potions = this.potions.filter((potion) => {
    //   return potion.name !== potionName;
    // });
    for (let potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1);
      }
    }
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
    // console.log(this.potions);
  },
  // Пиши код выше этой строки
};

// atTheOldToad.addPotion({ name: "Невидимка", price: 620 });
// atTheOldToad.addPotion({ name: "Зелье силы", price: 270 });
console.log(atTheOldToad.removePotion("Дыхание дракона"));
console.log(atTheOldToad.removePotion("Зелье скорости"));
// atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
// atTheOldToad.updatePotionName("Каменная кожа", "Зелье неуязвимости");
