'use strict';

let buttonStart = document.getElementById('start'),
    
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    buttonExpensesItem = document.getElementsByTagName('button')[0],
    buttonOptionalExpenses = document.getElementsByTagName('button')[1],
    inputOptimalExpensesItem = document.querySelector('.optionalexpenses-item'),
    buttonCountBudget = document.getElementsByTagName('button')[2],
    inputChooseIncome = document.querySelector('.choose-income'),
    inputSavings = document.querySelector('#savings'),
    inputChooseSum = document.querySelector('#sum'),
    inputChoosePercent = document.querySelector('#percent'),

    inputYearValue = document.querySelector('.year-value'),
    inputMonthValue = document.querySelector('.month-value'),
    inputDayValue = document.querySelector('.day-value');
 
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "1999-12-12");
}

let appData = {
    budget: money,
    timeData: time,
    necessaryExpenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        let questionFirst = "",
        questionSecond = ""; 
    
        for (let i = 0; i < 2; i++) {
            questionFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
            questionSecond = +prompt("Во сколько обойдется", "");
        
            if (typeof(questionFirst) === "string" && typeof(questionFirst) != null 
                && typeof(questionSecond) != null && questionFirst != '' 
                && questionSecond != '' && questionFirst.length < 50) {
        
                appData.necessaryExpenses[questionFirst] = questionSecond;
            }else { 
                i--;
            }   
        }
    },
    chooseOptExpenses: function() {
        let questionFirst = "";

        for (let i = 0; i < 3; i++) {
            questionFirst = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[(i+1)] = questionFirst;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (+appData.budget/30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Что-то пошло не так");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую и пробел)", "");
        if (typeof(items) === "string" && items != null && items != "") {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще? (только 1 штуку). Если нет, нажмите Отмена", ""));

            this.income.forEach (function (item, i) {
                alert("Способы доп. заработка: " + (i + 1) + ". " + item + ", ");
            });
        } else {
            alert("Неверные данные");
        }
        appData.income.sort();
    }
};

// console.log("Наша программа включает в себя данные: ");
// for (let i in appData) {
//     console.log(i + appData[i]);
// }

// start();
// appData.chooseExpenses();
// appData.chooseOptExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();