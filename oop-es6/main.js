'use strict';

//=================================================ПЕРВАЯ ЗАДАЧА=================================================//

class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.durabilityFirst = 0;
	}

	takeDamage = function(damage) {
		let difference = this.durability - damage;
		if (difference < 0) {
			differencek = 0
		} 
		this.durabilityFirst = this.durability;
		this.durability = difference;
		return
	}

	getDamage = function() {
		if (this.durability >= this.durabilityFirst * 0.3) {
			this.attack = this.attack
		} else if (this.durability == 0) {
			this.attack = 0
		} else {
			this.attack = this.attack / 2
		}
		return
	}

	isBroken = function() {
		if (this.durability > 0) {
			return false
		} else {
			return true
		}
	}
}


/*const arm = new Weapon ("Рука", 1, Infinity, 1);
console.log(arm);

const bow = new Weapon ("Лук", 10, 200, 3);
console.log(bow);

const sword = new Weapon ("Старый меч", 25, 500, 1);
console.log(sword.name + ", атака: " + sword.attack + ", прочность: " + sword.durability + ", уровень: " + sword.range);

const knife = new Weapon ("Нож", 5, 300, 1);

const staff = new Weapon ("Посох", 8, 300, 2);

const longBow = new Weapon ("Длинный лук", 15, 200, 4);

const axe = new Weapon ("Секира", 27, 800, 1);

const stormStaff = new Weapon ("Посох Бури", 10, 300, 3);

arm.takeDamage(20);
console.log("Прочность оружия: " + arm.durability + " , история прочности: " + arm.durabilityArr);

arm.getDamage();
console.log("Урон от удара: " + arm.attack);

sword.takeDamage(20);
console.log("Прочность оружия: " + sword.durability + " , история прочности: " + sword.durabilityArr);

sword.getDamage();
console.log("Урон от удара: " + sword.attack);

sword.takeDamage(20);
console.log("Прочность оружия: " + sword.durability + " , история прочности: " + sword.durabilityArr);

sword.getDamage();
console.log("Урон от удара: " + sword.attack);

console.log(arm.isBroken())*/

//=================================================ВТОРАЯ ЗАДАЧА=================================================//

class Sword extends Weapon {
	constructor () {
		super();
		this.name = "Старый меч";
		this.attack = 25;
		this.durability = 500;
		this.range = 1;
		this.durabilityFirst;
	}
}
const sword = new Sword();
sword.takeDamage(500);
console.log(sword);

class Arm extends Weapon {
	constructor (Weapon) {
		super();
		this.name = "Рука";
		this.attack = 1;
		this.durability = Infinity;
		this.range = 1;
		this.durabilityFirst;
	}
}

class Bow extends Weapon {
	constructor (Weapon) {
		super();
		this.name = "Лук";
		this.attack = 10;
		this.durability = 200;
		this.range = 3;
		this.durabilityFirst;
	}
}

class Knife extends Weapon {
	constructor (Weapon) {
		super();
		this.name = "Нож";
		this.attack = 5;
		this.durability = 300;
		this.range = 1;
		this.ddurabilityFirst;
	}
}

class Staff extends Weapon {
	constructor (Weapon) {
		super();
		this.name = "Посох";
		this.attack = 8;
		this.durability = 300;
		this.range = 1;
		this.durabilityFirst;
	}
}

class Axe extends Sword {
	constructor (Weapon) {
		super();
		this.name = "Секира";
		this.attack = 27;
		this.durability = 800;
		this.range = 1;
		this.durabilityFirst;
	}
}


class LongBow extends Bow {
	constructor (Weapon) {
		super();
		this.name = "Длинный лук";
		this.attack = 15;
		this.durability = 200;
		this.range = 4;
		this.durabilityFirst;
	}
}

class StormStaff extends Staff {
	constructor (Weapon) {
		super();
		this.name = "Посох бури";
		this.attack = 10;
		this.durability = 300;
		this.range = 3;
		this.durabilityFirst;
	}
}




