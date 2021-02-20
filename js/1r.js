const logItems = function (array) {
  for (let index = 1; index < array.length; index++) {
    console.log(`${index} - ${array[index]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
