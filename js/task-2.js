'use strict';
const total = 20;
const ordered = 50;

if ( total > ordered) {
  let message = "Заказ оформлен, с вами свяжется менеджер";
  console.log(message);
} else {
  let message = "На складе недостаточно твоаров!";
  console.log(message);
}