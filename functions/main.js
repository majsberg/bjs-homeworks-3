// Задача № 1 "Решение квадратного уравнения"
"use strict";

function showSolutionsMessage( a, b, c ) {

  let solution = new Object;

  let result = getSolutions (a, b, c);
  if (c > 0) {
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  } else {
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x ${c}`);
  }
  console.log(`Значение дискриминанта: ${solution.D}`);
  if (solution.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (solution.D == 0) {
    console.log(`Уравнение имеет один корень X₁: ${solution.roots}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${solution.roots[0]}, X₂ = ${solution.roots[1]}`)
  }

  function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1, x2;
    if (d < 0) {
      solution.D = d;
    } else if (d == 0) {
      x1 = -b / (2 * a);
      solution.D = d;
      solution.roots = [x1];
    } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    solution.D = d;
    solution.roots = [x1, x2];
    }
  //console.log(solution);
  return solution;
  }

}
showSolutionsMessage(1, 2, -3)

//Задача № 2 "Эмильо и Родриго"
let secretData = {
    aaa: 0,
    bbb: 1
};

function getPersonData (obj) {
  let realName = {};
  realName.firstName = obj.aaa;
  realName.lastName = obj.bbb;

  for (let key in realName) {
    let value = secretService (realName[key]);
    realName[key] = value;
  }
  return (realName);
}
console.log(getPersonData(secretData));

function secretService(a) {
  if (a == 0) {
    return 'Родриго'
  } else {
    return 'Эмильо'
  }
}

//Задача № 3 "Журнал успеваемости с итоговой оценкой"
let data = {
  algebra: [4, 3, 5, 4],
  geometry: [5, 4, 5, 4],
  physics: [3, 2, 5, 5, 4],
  music: [5, 5, 5,],
  english: [4, 5, 3, 4],
  history: [5, 5, 5, 4],
  biology: [3, 3, 4, 5, 3],
  russian: [4, 4, 4, 3, 4],
  geography: [5, 3, 4, 4, 5],
  chemistry: [3, 3, 4, 3, 4]
};

function getAverageScore(object) {
  let arr = [];
  let result = {};
  
  for (let key in object) {
    let value = object[key];
    result[key] = object[key];
    let average = getCount (value);
    result[key] = average;
    arr.push(average);
    result.total = getCount (arr);
  }

  return (result);
}
console.log (getAverageScore(data));

function getCount (arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  average = sum / arr.length;
  return (average);
}