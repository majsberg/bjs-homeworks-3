"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    console.log(`Процентная ставка ${percent} число`)
    console.log(`Первоначальный взнос ${contribution}`)
    console.log(`Сумма кредита ${amount}`);
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    console.log(`Текущий год ${nowYear} и месяц ${nowMonth}`);
    let lastDate = new Date(date);
    let lastDateYear = lastDate.getFullYear();
    let lastDateMonth = lastDate.getMonth();
    console.log(`Год ${lastDateYear} и месяц окончания: ${lastDateMonth}`);
    if (lastDate < now) {
        return "Срок окончания не может быть меньше текущей даты"
    } else {
        let periodYear = lastDateYear - nowYear;
        let periodMonth = lastDateMonth - nowMonth;
        let period = periodYear * 12 + periodMonth; //срок кредита в месяцах
        console.log(`Срок кредита в месяцах ${period}`);
    }
    
    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
    console.log("Тип имени: " + typeof name);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь

    let greeting;
      if (!! name == true && name != 'undefined' && name != 'null' && typeof name != 'number') {
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним`;
    }
    console.log(typeof name);
    return greeting;
}
console.log(getGreeting(1))