// Задание 1: Найти сумму всех элементов массива
// Напишите функцию  sumArray , которая принимает массив чисел и возвращает сумму всех
// элементов. Реализуйте это с помощью цикла  for .
let numbers_1 = [1, 2, 3, 4, 5]; // Пример массива 
 
// Напишите функцию здесь
function sumArray(arr) { 
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
} 
 
console.log(sumArray(numbers_1)); // Пример вывода: 15


// Задание 2: Найти максимальный элемент массива
// Напишите функцию  findMax , которая принимает массив чисел и возвращает максимальный
// элемент. Используйте цикл  for .
let numbers_2 = [3, 1, 4, 1, 5, 9]; // Пример массива 
 
// Напишите функцию здесь
function findMax(arr) { 
    // Реализация через цикл for
    maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
      maxNum > arr[i] ? maxNum = maxNum : maxNum = arr[i];
  }
  return maxNum;
} 
 
console.log(findMax(numbers_2)); // Пример вывода: 9


// Задание 3: Фильтрация массива по условию
// Создайте функцию  filterArray , которая принимает массив чисел и возвращает новый
// массив, содержащий только четные числа. Реализуйте это с использованием цикла  for .
let numbers_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива 
 
// Напишите функцию здесь
function filterArray(arr) { 
    // Реализация через цикл for
    let evenNum = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNum.push(arr[i])};
  }
  return evenNum; 
} 
 
console.log(filterArray(numbers_3)); // Пример вывода: [2, 4, 6, 8]


// Задание 4: Реализация метода массива "map" через цикл
// Напишите функцию  mapArray , которая принимает массив и функцию-преобразователь. Эта
// функция должна возвращать новый массив, где каждый элемент является результатом
// применения функции-преобразователя к каждому элементу исходного массива. Реализуйте
// это с использованием цикла.
let numbers_4 = [1, 2, 3, 4, 5]; // Пример массива 
 
// Пример функции-преобразователя:
function multiplyByTwo(num) { 
  return num * 2; 
} 
 
// Напишите функцию здесь
function mapArray(arr, callback) {
    // Реализация через цикл for 
    let mapArr = [];
    for (let i = 0; i < arr.length; i++) {
      mapArr[i] = callback(arr[i]);
  }
  return mapArr;
} 
 
console.log(mapArray(numbers_4, multiplyByTwo)); // Пример вывода: [2, 4, 6, 8, 10]


// Задание 5: Реализация метода массива "forEach" через цикл
// Создайте функцию  forEachArray , которая принимает массив и функцию, и применяет эту
// функцию к каждому элементу массива. Реализуйте это с использованием цикла  for .
let numbers_5 = [1, 2, 3, 4, 5]; // Пример массива 
 
// Пример функции для вывода:
function printElement(element) { 
    console.log(element); 
} 
 
// Напишите функцию здесь
function forEachArray(arr, callback) { 
    // Реализация через цикл for
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
  }
} 
 
forEachArray(numbers_5, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на строку)


// Задание 6: Развернуть массив
// Напишите функцию  reverseArray , которая принимает массив и возвращает его развернутую
// версию. Реализуйте это без использования встроенного метода  reverse , используя цикл
// for .
let numbers_6 = [1, 2, 3, 4, 5]; // Пример массива 
 
// Напишите функцию здесь
function reverseArray(arr) {
    // Реализация через цикл for
    let revArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
      revArr.push(arr[i]);
  }
  return revArr;  
} 
 
console.log(reverseArray(numbers_6)); // Пример вывода: [5, 4, 3, 2, 1]