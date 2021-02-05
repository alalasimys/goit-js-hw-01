/**Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value. */
class StringBuilder {
  value;
  constructor(value) {
    this.value = value;
  }
  get value() {
    return this.value;
  }
  append(str) {
    return (this.value += str);
  }
  prepend(str) {
    return (this.value = str + this.value);
  }
  pad(str) {
    return (this.value = str + this.value + str);
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
