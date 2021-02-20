let credits = 23580;
let pricePerDroid = 3000;
let ask = prompt("Укажите количество дроидов");
let total = 0;
if (ask === null) {
  console.log("Отменено пользователем!");
} else {
  total = ask * pricePerDroid;
  if (total > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let rest = credits - total;
    console.log(
      `Вы купили ${ask} дроидов, на счету осталось ${rest} кредитов.`
    );
  }
}
