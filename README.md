# exam.js
1) Напишите все что знаете про сложение строк.
 конкатенация - это сложение строк. Для этого мы можем использовать обычный "+", например, "....... + "а" + ......", "а" + "с" и т.д.
 

2) Логическое умножение и сложение
Коньюнкция - это логическое умножение(&&), то есть "и".  Все данные должны быть правильными, чтобы получить результат 
Дизьюнкция - это логическое сложение (||), то есть "или". Чтобы получить результат, хоть один данный должен быть правильным


3) V8 - это
V8 - это двигатель Javascript. Благодаря ему на сайтах работает Javascript.

4) Что такое ECMAScript и какой сейчас в ходу.
JavaScript создавался как скриптовый язык для Netscape. После чего он был отправлен в ECMA International для стандартизации. ECMAScript это стандарт, а JavaScript его реализация. ECMAScript говорит как должно быть, а JavaScript выполняет то, что говорит ECMAScript.

5) Что такое NaN и как его можно получить?
Not a number, то есть не число

6) Что такое Хоистинг
 Переменная var  перемещаются в начало кода

7) Напишите как мы можем получить ошибку Reference Error
Появляется, когда мы хотим сослаться на некоторую переменную, которая не существует.

8) В чем отличие между .split .substr
может это не split, а slice
.substr есть 2 параметра: это индекс (символ в указанной позиции) и необязательное количество символов для извлечения (возвращает указанное количество символов)
.slice извлекает части строки и возвращает извлеченные части в новой строке. 

9) Приведите пример Function Expression и Function Declaration. Укажите в чем разница.
 Function Expression
 function sum(a + b)  {
	console.log(sum)
}
 
sum( 10 , 20)

Function Declaration
let a = function sum (a + b ){
    return sum
    }
console.log(sum(10 , 20))    

18) Создайте объект "Склад" и опишите его
const склад = {
      мандарин: 25 
      апельсин: 50
      яблоко: 70
      банан: 65
}
Объект "склад" имеет три свойства. Каждое свойство состоит из пары имя: кг
Если мы хотим получить значение свойства "банан", мы можем воспользоваться точечной нотацией объекта, т.е. 
console.log (склад.банан)

Обращение через скобки: []
console.log (склад["банан"])
      
