/**Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций. */
/*
 Типов транзацкий всего два.
 Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   Метод создает и возвращает объект транзакции.
   Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transObj = {};
    transObj.id = Math.random() * 10 ** 17;
    transObj.type = type;
    transObj.amount = amount;

    return this.transObj;
  },

  /*
   Метод отвечающий за добавление суммы к балансу.
    Принимает сумму танзакции.
    Вызывает createTransaction для создания объекта транзакции
    после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(this.amount, Transaction.DEPOSIT);
    this.transactions.push(this.transObj);
    return (this.balance += amount);
  },

  /*
    Метод отвечающий за снятие суммы с баланса.
    Принимает сумму танзакции.
    Вызывает createTransaction для создания объекта транзакции
    после чего добавляет его в историю транзакций.
   
    Если amount больше чем текущий баланс, выводи сообщение
    о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.transactions.push(
      this.createTransaction(this.amount, Transaction.WITHDRAW)
    );
    if (amount > this.balance) {
      return "Снятие невозможно, недостаточно средств";
    }
    this.balance -= amount;
    return `Текущий баланс ${this.balance}`;
  },

  /*
    Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
    Метод ищет и возвращает объект транзации по id
   */

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (this.transactions.id === id) {
        return transaction;
      }
      return `Пользователь с ${id} не найден`;
    }
    return;
  },

  /*
    Метод возвращает количество средств
    определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (this.transactions.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
console.log(account.createTransaction(5000, "deposit"));
// console.log(account.deposit(1500));
// console.log(account.deposit(1500));
// console.log(account.deposit(1500));
// console.log(account.deposit(1500));
// console.log(account.withdraw(1500));
// console.log(account.withdraw(1500));
// console.log(account.withdraw(1500));
// console.log(account.withdraw(1500));
// console.log(account.withdraw(1500));
// console.log(account.withdraw(1500));
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(1611182701828));
// console.log(account.getTransactionDetails(1611182701828));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// ! незаконченная задача
