let money = prompt("Ваш бюджет на месяц.", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    };

let q1 = prompt("Введите обязательную статью расходов.", ""),
    q2 = prompt("Во сколько обойдется?", ""),
    q3 = prompt("Введите обязательную статью расходов.", ""),
    q4 = prompt("Во сколько обойдется?", "");

let obj = {};

        obj[q1] = q2;
        obj[q3] = q4;
        
alert(appData.budjet / 30);