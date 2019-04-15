"use strict";

let solution = new Object;

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

function showSolutionsMessage( a, b, c ) {
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
}
showSolutionsMessage(1, 2, -3)