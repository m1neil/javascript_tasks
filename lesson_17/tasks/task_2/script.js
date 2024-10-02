'use strict'

class Car {
	static carRef
	constructor(driver, brand, number) {
		if (Car.carRef) return Car.carRef
		this.driver = new Driver(driver)
		this.brand = brand
		this.number = number
		Car.carRef = this
	}

	toString() {
		return `Водій: ${this.driver}; марка: ${this.brand}; номер: ${this.number}`
	}
}

class Driver {
	constructor({ firstName, lastName, age, passportNumber, numberDriverLicense }) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
		this.passportNumber = passportNumber
		this.numberDriverLicense = numberDriverLicense
	}


	toString() {
		return `${this.firstName} ${this.lastName}; вік: ${this.age}; Номер паспорту: ${this.passportNumber}; Номер водійських прав: ${this.numberDriverLicense}`
	}
}

const driver = {
	firstName: 'Владислав',
	lastName: 'Алексеєвіч',
	age: 38,
	passportNumber: '00452341',
	numberDriverLicense: '2352984'
}

const car = new Car(driver, 'Porsche', 'AX04843')
const car2 = new Car(driver, 'Nisan', 'AX00544')
print('.page__container', `Машина №1: ${car}`)
print('.page__container', `Машина №2: ${car}`)

function print(outputSelector, data, classes = '', teg = 'div') {
	const output = document.querySelector(outputSelector)
	if (!output)
		throw new Error('Not found element!')
	const block = document.createElement(teg)
	block.className = classes
	block.textContent = data
	output.append(block)
}
