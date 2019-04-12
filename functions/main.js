"use strict";

let secretData = {
  aaa: 0,
  bbb: 1
}

function getPersonData() {
  function realName() {
    let realNameObj = new Object;
    for (let key in secretData) {
      let value = secretData[key];
      if (key == "aaa") {
        realNameObj.firstName;
        if (value == 0) {
          realNameObj.firstName = "Родриго";
        } else {
          realNameObj.firstName = "Эмильо";
        }
      } else {
        realNameObj.lastName;
        if (value == 0) {
          realNameObj.lastName = "Родриго";
        } else {
          realNameObj.lastName = "Эмильо";
        }
      }
    }
    return(realNameObj);
  }
  console.log(realName(secretData));
}
getPersonData(secretData);