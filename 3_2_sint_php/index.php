<?php
// В моей версии vscode консоль не переносит строку,
// поэтому везде наставил "\n"
$name = "Alice"; 
$age =  27;
$isStudent = true; 
 
// Константа 
define("SITE_NAME", "MyWebsite");
 
// Вывод значений

echo "Имя: $name \n";
echo "Возраст: $age \n"; 
echo "Студент: $isStudent \n";  
echo "Название сайта: " . SITE_NAME ."\n";  
 
// Преобразование типов 
$numberString = "48";
$number =  (int)$numberString;
echo "Преобразованное число: $number \n";
echo "Тип переменной numberString: " . gettype($numberString) . "\n";
echo "Тип переменной number: " . gettype($number) . "\n";
 
// Арифметические операции 
$num1 = 10; 
$num2 = 5; 
echo "Сложение: " . $num1 + $num2 . "\n"; 
echo "Сравнение: " .  $num2 * $num1 . "\n";
 
// Логическое выражение
echo "Логическое выражение: " . ($num1 || $num2) . "\n";
 
// Суперглобальная переменная $_SERVER
echo "Информация о сервере: " . $_SERVER['SERVER_NAME'] . "\n"; 
echo "IP-адрес клиента: " .  $_SERVER['REMOTE_ADDR'] . "\n";