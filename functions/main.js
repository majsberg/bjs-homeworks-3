"use strict";

let secretData = {
    aaa: 1,
    bbb: 0
};

function getPersonData (obj) {
  let realName = {};
  realName = secretService (obj.aaa, obj.bbb)

  function secretService(a, b) {
  if (a == 0) {
    realName.firstName = 'Родриго';
  } else {
    realName.firstName = 'Эмильо';
  }
  if (b == 0) {
    realName.lastName = 'Родриго';
  } else {
    realName.lastName = 'Эмильо';
  }
  return(realName);
}
  
  console.log(realName);
}
getPersonData(secretData)