// 1.

let f1 = function (user) {
  user = {
    name: 'Ivan',
    surname: 'Vatolin',}
    for (let key in user) {
      console.log (key+ ': ' + user[key]);
    }
}
f1();

// 2.

function showProps(obj, objKeyName) {
  return (objKeyName in obj);
}

const student1 = {
  name: "Petr", 
  ownCity: "Moscow",
  age: 30,
  course: "Frontend"
};


console.log(showProps(student1, "same"));  
console.log(showProps(student1, "name"));

// 3.

function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));

// 4. 

function ElectricalAppliance(name) {
	this.device = 'household electrical appliance',
	this.name = name
	
}

ElectricalAppliance.prototype.getPowerConsumption = function (power, t, on) {
	let turnOn = on;
	if(on === 1){
		turnOn = 'Вкл';
	}else{
		turnOn = 'Выкл';
	};
	

	console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};

function Characteristic(name, color) {
	this.name = name,
	this.color = color
}

Characteristic.prototype = new ElectricalAppliance();

const teapot = new Characteristic ('Teapot', 'black');
const fridge = new Characteristic ('Fridge', 'red');
const luminaire = new Characteristic ('Luminaire', 'green');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);

// 5.
 
class ElectricalAppliance {
	constructor(name) {
		this.device = 'household electrical appliance';
		this.name = name;
	}

	getPowerConsumption (power, t, on) {
		let turnOn = on;
		if(on === 1){
			turnOn = 'Вкл';
		}else{
			turnOn = 'Выкл';
		};
		
	
		console.log(`Расход эл. энергии ${this.name} - (${this.color}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
	}

}

class Characteristic extends ElectricalAppliance {
	constructor (name, color) {
		super(name);
		this.color = color;
	}
}

const teapot = new Characteristic ('Teapot', 'black');
const fridge = new Characteristic ('Fridge', 'red');
const luminaire = new Characteristic ('Luminaire', 'green');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);





