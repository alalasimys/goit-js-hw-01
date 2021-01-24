//Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    let index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);
    console.log(this.potions);
    // Пиши код выше этой строки
  },
};
atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
atTheOldToad.updatePotionName("Каменная кожа", "Невидимка");
