'use strict';

//=================================================ПЕРВАЯ ЗАДАЧА=================================================//

class Weapon {
	constructor (name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durabilityFirst = durability;
		this.range = range;
		this.durability = durability;
	}

	takeDamage (damage) {
		this.durability = this.durability - damage;
		if (this.durability < 0) {
			this.durability = 0
		} 
	}

	getDamage () {
		if (this.durability >= this.durabilityFirst * 0.3) {
			return this.attack
		} else if (this.durability == 0) {
			return 0
		} else {
			return this.attack / 2
		}
	}

	isBroken () {
		return (this.durability == 0);
	}
}

/*
const arm = new Weapon ("Рука", 1, Infinity, 1);

const bow = new Weapon ("Лук", 10, 200, 3);

const sword = new Weapon ("Старый меч", 25, 500, 1);

const knife = new Weapon ("Нож", 5, 300, 1);

const staff = new Weapon ("Посох", 8, 300, 2);

const longBow = new Weapon ("Длинный лук", 15, 200, 4);

const axe = new Weapon ("Секира", 27, 800, 1);

const stormStaff = new Weapon ("Посох Бури", 10, 300, 3);

sword.takeDamage(200);
console.log("Начальная прочность оружия: " + sword.durabilityFirst + " , текущая прочность: " + sword.durability);

sword.getDamage();
console.log("Урон от удара: " + sword.attack);

sword.takeDamage(400);
console.log("Начальная прочность оружия: " + sword.durabilityFirst + " , текущая прочность: " + sword.durability);

sword.getDamage();
console.log("Урон от удара: " + sword.attack);

sword.isBroken();
console.log("Сломано ли оружие " + sword.isBroken());
*/

//=================================================ВТОРАЯ ЗАДАЧА=================================================//

class Sword extends Weapon {
	constructor () {
		super ("Старый меч", 25, 500, 1);
	}
}

class Arm extends Weapon {
	constructor () {
		super ("Рука", 1, Infinity, 1);
	}
}

class Bow extends Weapon {
	constructor () {
		super ("Лук", 10, 200, 3);
	}
}

class Knife extends Weapon {
	constructor () {
		super ("Нож", 5, 300, 1);
	}
}

class Staff extends Weapon {
	constructor () {
		super ("Посох", 8, 300, 1);
	}
}

class Axe extends Sword {
	constructor () {
		super ();
		this.name = "Секира";
		this.attack = 27;
		this.durability = 800;
		this.range = 1;
		this.durabilityFirst = 800;
	}
}

const axe = new Axe;
axe.takeDamage(700);
console.log(axe.getDamage());
console.log(axe);
console.log(axe.isBroken());
console.log("Начальная прочность оружия: " + axe.durabilityFirst + " , текущая прочность: " + axe.durability);


class LongBow extends Bow {
	constructor () {
		super ();
		this.name = "Длинный лук";
		this.attack = 15;
		this.durability = 200;
		this.range = 4;
		this.durabilityFirst = 200;
	}
}

class StormStaff extends Staff {
	constructor () {
		super ();
		this.name = "Посох бури";
		this.attack = 10;
		this.durability = 300;
		this.range = 3;
		this.durabilityFirst = 300;
	}
}

//=================================================ТРЕТЬЯ ЗАДАЧА=================================================//
class StudentLog {
  constructor(name) {
    this.name = name;
    this.data = new Object;
    this.data.arr = new Array;
  }

  getName() {
    return(this.name);
  }

  addGrade(grade, subject) {
    let count = 0;
    if (typeof grade != "number" || grade < 1 || grade > 5) {
			console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`);
      return count;
    }
    
    if (subject in this.data) {
      for (let key in this.data) {
        if (key == subject) {
          this.data[key].push(grade);
        }
      }
    } else {
      for (let key in this.data) {
        key = subject;
        this.data[key] = [grade];
      }
    }
    count++;
    return count;
  }
    
  getAverageBySubject(subject) {
    if (subject in this.data) {
      for (let key in this.data) {
        if (key == subject) {
          let arr = this.data[key];
          let sum = 0;
          let count = 0;
          for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            count++;
          }
          let average = sum / count;
          return average;
        }
      }
    } else {
      console.log(`Предмет ${subject} не найден`);
    }  
  }

  getTotalAverage() {
    let arrAverage = [];
    let sum = 0;
    arrAverage.push(name.getAverageBySubject("История"));
    sum += name.getAverageBySubject("История");

    arrAverage.push(name.getAverageBySubject("Русский язык"));
    sum += name.getAverageBySubject("Русский язык");

    arrAverage.push(name.getAverageBySubject("Алгебра"));
    sum += name.getAverageBySubject("Алгебра");

    let average = sum / arrAverage.length;
    console.log(`Средняя оценка по всем предметам равна ${average.toFixed(1)}`);
    return average;
  }
}

const name = new StudentLog ("Игорь Сергеев");
name.addGrade(5, "Алгебра");
name.addGrade(4, "Алгебра");
name.addGrade(5, "Геометрия");
name.addGrade(4, "Информатика");
name.addGrade(5, "Русский язык");
name.addGrade(3, "История");

name.getTotalAverage();