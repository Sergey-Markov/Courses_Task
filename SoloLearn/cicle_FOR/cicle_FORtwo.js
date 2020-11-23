
// Задание установить факториал числа
var inputNumber = 5; // вводимое число
var total = 1;

for (i = 0; i < inputNumber; i++) {
    total = total * (inputNumber - i);
    t = total;
} //нужно учесть что консоль прописуется ниже " { " иначе в ней будет выведено весь процес обчисления
console.log(t);