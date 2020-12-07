var amount = 15000;
var yearPercent = 20;

var loan1 = new Loan(amount, yearPercent);

//вывод результата в консоль:

document.write("<h1>Вывод с помощью JS:<br /></h1>" + loan1.yearIncome(calcYearIncome));

function Loan(amount, percent) {
    this.amount = amount;
    this.yearPercent = percent;
    // введите код сюда
    this.yearIncome = calcYearIncome; //создали свойство yearIncome и передали ему значение функции calcYearIncome 
};
function calcYearIncome() {
    //завершите функцию для вычесления годового дохода
    b = yearPercent / 100 * amount;
    return b;
}