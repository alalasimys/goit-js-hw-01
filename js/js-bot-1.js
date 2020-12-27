const pricePerDroid = 800;
const orederedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orederedQuantity + deliveryFee;
console.log(totalPrice);

const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа`;
