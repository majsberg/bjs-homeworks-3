"use strict";

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3(это задача со звёздочкой *) писать здесь
    let now = new Date().getTime();
    console.log(now);
    birthday = new Date(birthday).getTime();
    console.log(birthday);
    let diff = now - birthday;
    let age = diff / 31536000000;
    console.log(age);
    if (age > 18) {
        return age;
    }
}

function initPrintAnimalSound() {
    const animal = {
        //sound: undefined,
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    let sound = animal.sound;
    if (sound == undefined) {
        console.log(null)
        return null
    } else {
        console.log(sound);
        return sound
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь

    let sum = 0;
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = parseInt (marks[i]);
        sum = sum + marks[i];
        count = count + 1;
    }
    let average = sum / count;
    console.log(average);
    let roundedAverage = Math.round(average);
    console.log(roundedAverage);
    return roundedAverage
}