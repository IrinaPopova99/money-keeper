'use strict';

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
};

function chooseExpenses() {
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
}

function chooseOptExpenses() {
    let questionFirst = "";

    for (let i = 0; i < 3; i++) {
        questionFirst = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[(i+1)] = questionFirst;
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (+appData.budget/30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Что-то пошло не так");
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
}

start();
chooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();