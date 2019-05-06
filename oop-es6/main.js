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
			this.attack = this.attack
		} else if (this.durability == 0) {
			this.attack = 0
		} else {
			this.attack = this.attack / 2
		}
		//return
	}

	isBroken () {
		return (this.durability > 0);
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
axe.takeDamage(400);
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
	constructor (name) {
		this.name = name;
		this.data = {};	
		this.data.grades = [];
	}

	getName () {
		return (this.name); 
	}

	addGrade (grade, subject) {
		let count = 0;
		if (typeof grade != "number" || grade < 1 || grade > 5) {
			console.log(`Вы пытались поставить оценку "${grade}" по предмету ${subject}. Допускаются только числа от 1 до 5.`);
		} else {
			//console.log(`Вы поставили оценку "${grade}" по предмету ${subject}`);
			this.data.subject = subject;
			this.data.grades.push(grade);
			count++;
		}
		return count;
	}

	getAverageBySubject (subject) {

	}

	getTotalAverage () {

	}
}

const name = new StudentLog ('Дмитрий Харламов');
console.log(name.getName());
console.log(name.addGrade("Супер", "Алгебра"));
console.log(name.addGrade("Хорошо", "Алгебра"));
console.log(name.addGrade("Хорошо", "Геометрия"));
//console.log(name.addGrade(5, "Алгебра"));
console.log(name);
