'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1999-12-12");

let appData = {
    budget: money,
    timeData: time,
    necessaryExpenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let questionFirst = prompt(
    "Введите обяхательную статью расходов в этом месяце", "");

appData.necessaryExpenses[questionFirst] = prompt(
    "Во сколько обойдется", "");




