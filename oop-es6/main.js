'use strict';

//=================================================ПЕРВАЯ ЗАДАЧА=================================================//

class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.durabilityArr = [];
		this.takeDamage = function(damage) {
			let ostatok = this.durability - damage;
			if (ostatok < 0) {
				ostatok = 0
			} 
			this.durabilityArr.push(this.durability);
			this.durability = ostatok;
			return
		}
		this.getDamage = function() {
			if (this.durability >= this.durabilityArr[0] * 0.3) {
				this.attack = this.attack
			} else if (this.durability == 0) {
				this.attack = 0
			} else {
				this.attack = this.attack / 2
			}
			return
		}
		this.isBroken = function() {
			if (this.durability > 0) {
				return false
			} else {
				return true
			}
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
	constructor (takeDamage, getDamage, isBroken) {
		super.takeDamage();
		this.name = "Старый меч";
		this.attack = 25;
		this.durability = 500;
		this.range = 1;
		this.durabilityArr = [];
	}
}
const sword = new Sword(20);
console.log(sword);



