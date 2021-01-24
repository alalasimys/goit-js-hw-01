//Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    let index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);
    console.log(this.potions);
    // Пиши код выше этой строки
  },
};
atTheOldToad.removePotion("Дыхание дракона");
atTheOldToad.removePotion("Зелье скорости");
