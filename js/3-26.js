//Паттерн «Объект настроек»
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.{today: { low: 10, high: 20 },tomorrow: { low: 20, high: 30 }}
function calculateMeanTemperature(forecast) {
  //const todayLow = forecast.today.low;
  //const todayHigh = forecast.today.high;
  //const tomorrowLow = forecast.tomorrow.low;
  //const tomorrowHigh = forecast.tomorrow.high;
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
