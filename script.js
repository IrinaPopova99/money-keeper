'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "1999-12-12");

let appData = {
    budget: money,
    timeData: time,
    necessaryExpenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let questionFirst = prompt(
        "Введите обязательную статью расходов в этом месяце", ""),
    questionSecond = prompt(
        "Введите обязательную статью расходов в этом месяце", "");

appData.necessaryExpenses[questionFirst] = prompt(
    "Во сколько обойдется", "");
appData.necessaryExpenses[questionSecond] = prompt(
    "Во сколько обойдется", "");

alert((+appData.budget/30).toFixed(2));

console.log(appData.budget + " " + appData.timeData + " " + 
    appData.necessaryExpenses[questionFirst]);


