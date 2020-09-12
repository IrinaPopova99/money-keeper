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

let questionFirst = "",
    questionSecond = ""; 

// for (let i = 0; i < 2; i++) {
//     questionFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
//     questionSecond = +prompt("Во сколько обойдется", "");

//     if (typeof(questionFirst) === "string" && typeof(questionFirst) != null 
//         && typeof(questionSecond) != null && questionFirst != '' 
//         && questionSecond != '' && questionFirst.length < 50) {

//         appData.necessaryExpenses[questionFirst] = questionSecond;
//     }else { 
    //     i--;
    // }

// }
let i = 0;
// while (i < 2) {
//     questionFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
//     questionSecond = +prompt("Во сколько обойдется", "");

//     if (typeof(questionFirst) === "string" && typeof(questionFirst) != null 
//         && typeof(questionSecond) != null && questionFirst != '' 
//         && questionSecond != '' && questionFirst.length < 50) {

//         appData.necessaryExpenses[questionFirst] = questionSecond;
//     } else { 
    //     i--;
    // }

//     i++;
// }
do {
    questionFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
    questionSecond = +prompt("Во сколько обойдется", "");

    if (typeof(questionFirst) === "string" && typeof(questionFirst) != null 
        && typeof(questionSecond) != null && questionFirst != '' 
        && questionSecond != '' && questionFirst.length < 50) {

        appData.necessaryExpenses[questionFirst] = questionSecond;
    } else { 
        i--;
    }

    i++;
} while (i < 2);

appData.moneyPerDay = (+appData.budget/30).toFixed(2);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Что-то пошло не так");
}


