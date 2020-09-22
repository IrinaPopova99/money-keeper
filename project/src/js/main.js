'use strict';

let buttonStart = document.getElementById('start'),
    
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    buttonExpensesItem = document.getElementsByTagName('button')[0],
    buttonOptionalExpenses = document.getElementsByTagName('button')[1],
    inputOptimalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    buttonCountBudget = document.getElementsByTagName('button')[2],
    inputChooseIncome = document.querySelector('.choose-income'),
    inputSavings = document.querySelector('#savings'),
    inputChooseSum = document.querySelector('#sum'),
    inputChoosePercent = document.querySelector('#percent'),

    inputYearValue = document.querySelector('.year-value'),
    inputMonthValue = document.querySelector('.month-value'),
    inputDayValue = document.querySelector('.day-value');

buttonCountBudget.disabled = true;
buttonExpensesItem.disabled = true;
buttonOptionalExpenses.disabled = true;

let money, time;

buttonStart.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-09-12");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    inputYearValue.value = new Date(Date.parse(time)).getFullYear();
    inputMonthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    inputDayValue.value = new Date(Date.parse(time)).getDate();

    buttonExpensesItem.disabled = false;
    
});

buttonExpensesItem.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < inputExpensesItem.length; i++) {
        let questionFirst = inputExpensesItem[i].value,
            questionSecond = inputExpensesItem[++i].value;
    
        if (typeof(questionFirst) === "string" && typeof(questionFirst) != null 
            && typeof(questionSecond) != null && questionFirst != '' 
            && questionSecond != '' && questionFirst.length < 50) {
    
            appData.necessaryExpenses[questionFirst] = questionSecond;
            sum += +questionSecond;
        }else { 
            i--;
        }   
    }

    expensesValue.textContent = sum;

    buttonOptionalExpenses.disabled = false;
    buttonCountBudget.disabled = false;
});

buttonOptionalExpenses.addEventListener('click', function() {
    for (let i = 0; i < inputOptimalExpensesItem.length; i++) {
        let questionFirst = inputOptimalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionFirst;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
   
});

buttonCountBudget.addEventListener('click', function() {
    if (appData.budget != undefined) {
        let sum = 0;

        for(let item in appData.necessaryExpenses){
            sum += +appData.necessaryExpenses[item];
        }
        
        appData.moneyPerDay = ((+appData.budget - sum)/30).toFixed(2);
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = ("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = ("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = ("Высокий уровень достатка");
        } else {
            levelValue.textContent = ("Что-то пошло не так");
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка. Нажмите 'Начать расчет'";
    }
});

inputChooseIncome.addEventListener('input', function() {
    let items = inputChooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

inputSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

inputChooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +inputChooseSum.value,
            percent = +inputChoosePercent.value;
        appData.monthIncome = (sum/100/12*percent).toFixed(2);
        appData.yearIncome = (sum/100*percent).toFixed(2);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

inputChoosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +inputChooseSum.value,
        percent = +inputChoosePercent.value;
        appData.monthIncome = (sum/100/12*percent).toFixed(2);
        appData.yearIncome = (sum/100*percent).toFixed(2);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

let appData = {
    budget: money,
    timeData: time,
    necessaryExpenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
