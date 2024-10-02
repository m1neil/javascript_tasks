'use strict'

// .page__container

// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

class TDate {
	#day
	#month
	#year

	constructor(initDay, initMonth, initYear) {
		this.Day = initDay
		this.Month = initMonth
		this.Year = initYear
	}

	// get
	get Day() {
		return this.#day
	}

	get Month() {
		return this.#month
	}

	get Year() {
		return this.#year
	}

	// set
	set Day(newDay) {
		if (newDay <= 0 || newDay > 30)
			throw new Error('Incorrect day number entered!')
		this.#day = newDay
	}

	set Month(newMonth) {
		if (newMonth <= 0 || newMonth > 12)
			throw new Error('Incorrect month number entered!')
		this.#month = newMonth
	}

	set Year(newYear) {
		if (newYear <= 0)
			throw new Error('Incorrect year entered!')
		this.#year = newYear
	}

	// methods
	increaseDay(nDays = 1) {
		this.#day += nDays
		const pastMonths = Math.floor((this.#day - 1) / 30)
		this.#day %= 30
		if (!this.#day) this.#day = 30

		if (pastMonths >= 1)
			this.increaseMonth(pastMonths)
	}

	increaseMonth(nMonths = 1) {
		this.#month += nMonths
		const pastYears = Math.floor((this.#month - 1) / 12)
		this.#month %= 12
		if (!this.#month) this.#month = 12

		if (pastYears >= 1)
			this.increaseYear(pastYears)
	}

	increaseYear(nYears = 1) {
		this.#year += nYears
	}

	toString() {
		return `${this.#day}.${this.#month}.${this.#year}`
	}
}
const output = document.querySelector('.page__container')

try {
	const date = new TDate(30, 1, 2024)
	output.insertAdjacentHTML('beforeend', `<div class="page__text">Дата: ${date}</div>`)
} catch (error) {
	output.insertAdjacentHTML('beforeend', `<div class="info">Сталася помилка: ${error.message}</div>`)
	console.error(error.message);
}
