"use strict";

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
  
  //console.log(data);
  //console.log(arr);
  console.log(result);
}
getAverageScore(data);

function getCount (arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  average = sum / arr.length;
  return (average);
}