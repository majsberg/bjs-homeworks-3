// Задача № 1 "Решение квадратного уравнения"
"use strict";

function showSolutionsMessage( a, b, c ) {

  let solution = new Object;

  let result = getSolutions (a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
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
showSolutionsMessage(3, 4, 1)

//Задача № 2 "Эмильо и Родриго"
let secretData = {
  aaa: 0,
  bbb: 1
}

function getPersonData (secret) {
  let realName = {};
  realName.firstName = secretService (secret.aaa);
  realName.lastName = secretService (secret.bbb);
  return (realName)
}
console.log (getPersonData(secretData));

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
  let result = {};
  let count = 0;
  let total = 0;

  for (let key in object) {
    result[key] = object[key];
    result[key] = getCount (object[key]);
    total += result[key];
    count++;
  }
  result.total = total / count;
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