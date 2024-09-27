// Задание 1: Определение функций (Function Declaration)
// Напишите функцию greet , которая принимает имя пользователя и выводит сообщение в
// формате: "Привет, [имя]!"
function greet(name) {
  console.log(`Привет, ${name}!`);
}
// Пример вызова функции:
greet("Иван");

// Задание 2: Function Expression
// Создайте функцию multiply , которая принимает два числа и возвращает их произведение.
// Используйте Function Expression.
// Пример вызова функции:
let multiply = function (num1, num2) {
  return num1 * num2;
};
let result = multiply(3, 4);
console.log(result);

// Задание 3: Анонимные функции
// Создайте анонимную функцию, которая выводит в консоль "Анонимная функция вызвана!" и
// немедленно вызовите её.
// Вызов функции:
(function () {
  console.log("Анонимная функция вызвана!");
})();

// Задание 4: Самовызывающаяся функция (IIFE)
// Создайте самовызывающуюся функцию, которая выводит в консоль "IIFE выполнена".
// // Пример вызова IIFE:
(function IIFE() {
  console.log("IIFE выполнена");
})();

// Задание 5: Вложенные функции
// Создайте функцию outer , которая внутри содержит функцию inner . Функция inner
// должна возвращать строку "Внутренняя функция". Функция outer должна вызывать функцию
// inner и возвращать её результат.

function outer() {
  return (function inner() {
    return "Внутренняя функция";
  })();
}

// Пример вызова функции:
let message = outer();
console.log(message);

// Задание 6: Привязка функции к контексту (bind)
// Создайте объект person с полем name . Добавьте функцию sayName , которая выводит имя
// объекта. Привяжите функцию к объекту с помощью bind .
let person = {
  name: "Вася",
  sayName(str) {
    return str + " " + this.name;
  },
};
let personName1 = person.sayName;
console.log(personName1("Вызов без привязки контекста "));

let personName2 = person.sayName.bind(person);
console.log(personName2("Вызов с привязкой контекста "));


// Задание 7: Замыкания
// Создайте функцию counter , которая возвращает другую функцию. Эта внутренняя функция
// должна увеличивать счетчик на 1 при каждом вызове и выводить текущее значение.
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// Пример использования:
let count = counter();
console.log(count()); // 1
console.log(count()); // 2


// Задание 8: Передача функции в качестве аргумента
// Создайте функцию execute , которая принимает функцию и два числа в качестве
// аргументов. Выполните переданную функцию с этими числами.

// функция multiply создана в задании №2
function execute(fn, num1, num2) {
  return fn(num1, num2);
}
// Пример использования:
console.log(execute(multiply, 2, 5));