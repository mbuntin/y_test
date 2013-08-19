/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {
	if(this instanceof Vessel) {
		this.name = name || "Грузовой корабль";
		this.position = position || [0, 0];
		this.capacity = capacity || 1000;
		this.cargoWeight = 0;
	} else {
		return new Vessel(name, position, capacity)
	}
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
	var availableAmountOfCargo = "Занято " + this.getOccupiedSpace() + " из " + this.capacity;
	// (!this.capacity) ? capacity = "Товаров нет" : capacity = "Груз: " + this.capacity + "т.";
	// if(!this.capacity) {
	// 	capacity = "Товаров нет"
	// } else {
	// 	capacity = "Груз: " + this.capacity;
	// }
	return this.name + ". " + "Местоположение: " + this.position + " " + availableAmountOfCargo;
}

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
	return this.capacity - this.cargoWeight;
}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
	return this.cargoWeight;
}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {
	//проверить массив или нет if(arguments[0])
	if(Array.isArray(arguments[0])) {
		this.position = newPosition;
	// } else if (isObject(arguments[0])) {
	} else if (arguments[0] instanceof Planet) {
		this.position = arguments[0].position;
	} else {
		console.log('Введите правильные координаты');
	}
	
}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
	if(this instanceof Planet) {
		this.name = name;
		this.position = position;
		this.availableAmountOfCargo = availableAmountOfCargo;	
	} else {
		return new Planet(name, position, availableAmountOfCargo);
	}
	
}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
	var availableAmountOfCargo =  (!this.availableAmountOfCargo) ? "Грузов нет" : "Доступно груза: " + this.availableAmountOfCargo + "т."
	return "Планета " + this.name + ". Местоположение: " + this.position + ". " + availableAmountOfCargo;
}

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {
	return this.availableAmountOfCargo;
}

/**
 * Загружает на корабль заданное количество груза.
 * 
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
	if(vessel instanceof Vessel) {
		if(vessel.position[0] === this.position[0] && vessel.position[1] === this.position[1]) {
			if((this.getAvailableAmountOfCargo() - vessel.getFreeSpace()) < 0){
				console.log('доступно груза ' + this.getAvailableAmountOfCargo());
			} else {
				if((vessel.getFreeSpace() - cargoWeight) < 0) {
					console.log('доступно свободного места ' + vessel.getFreeSpace());
				} else {
					vessel.cargoWeight += cargoWeight;
					this.availableAmountOfCargo -= cargoWeight;
				}

			}
		}
	}
}

/**
 * Выгружает с корабля заданное количество груза.
 * 
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
	if(vessel instanceof Vessel) {
		if(vessel.position[0] === this.position[0] && vessel.position[1] === this.position[1]) {
			this.availableAmountOfCargo += cargoWeight;
			vessel.cargoWeight -= cargoWeight;
		}
	}
}
// 
if(!Array.isArray) {
  Array.isArray = function (vArg) {
    return Object.prototype.toString.call(vArg) === "[object Array]";
  };
}
function isObject (obj) {
	return Object.prototype.toString.call(obj) === "[object Object]";
};

var myShip = new Vessel('mySuperShip', [0,0], 1000);
var mySmallShip = new Vessel('mySmallShip', [0,0], 300);
var earth = new Planet('Earth', [1, 1], 10000);
var saturn = new Planet('Saturn', [2,2], 500);
myShip.flyTo([1,1]);
earth.loadCargoTo(myShip, 500);
myShip.report();
earth.report();
myShip.flyTo(saturn);
saturn.loadCargoTo(myShip, 300);
myShip.report();
saturn.unloadCargoFrom(myShip, 800);
myShip.report();