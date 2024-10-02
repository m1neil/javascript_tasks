'use strict'

class List {
	static getQuantityPositiveOrNegativeNumbers(array, isGetPositive = true) {
		List.isCorrectArray(array)
		const determineDirectionValue = isGetPositive ? List.isPositiveValue : List.isNegativeValue
		return array.reduce((prevCount, value) => (
			determineDirectionValue(value) ? prevCount + 1 : prevCount
		), 0)
	}

	static getQuantityEntryNumber(array, findValue) {
		List.isCorrectArray(array)
		return array.reduce((prevCount, value) =>
			value === findValue ? prevCount + 1 : prevCount, 0)
	}

	static isCorrectArray(array) {
		if (!Array.isArray(array))
			throw new Error('Очікувався масив!')
		return true
	}

	static isPositiveValue(value) {
		return value > 0
	}

	static isNegativeValue(value) {
		return value < 0
	}
}

function getArrayWithRandomNumbers(arrayLength = 20, minValue = 0, maxValue = 25) {
	const array = []
	for (let i = 0; i < arrayLength; i++) {
		array.push(Math.floor(Math.random() * (maxValue - minValue + 1) + minValue))
	}
	return array
}

const out = document.querySelector('.page__container')
const arrayRandomNumber = getArrayWithRandomNumbers(20, -25, 25)
try {
	const quantityPositiveNumbers = List.getQuantityPositiveOrNegativeNumbers(arrayRandomNumber, true)
	const quantityNegativeNumbers = List.getQuantityPositiveOrNegativeNumbers(arrayRandomNumber, false)
	const searchValue = 10
	const quantitySearchNumber = List.getQuantityEntryNumber(arrayRandomNumber, searchValue)

	print(out, `Масив: ${arrayRandomNumber.join(', ')}`)
	print(out, `Кількість позитивних чисел: ${quantityPositiveNumbers}`)
	print(out, `Кількість негативних чисел: ${quantityNegativeNumbers}`)
	print(out, `Кількість входжень числа - ${searchValue}: ${quantitySearchNumber}`)
} catch (error) {
	out.insertAdjacentHTML('beforeend', `<div class="info">Сталася помилка: ${error.message}</div>`)
}

function print(output, data, classes = '', teg = 'div') {
	if (!output)
		throw new Error('Not found element!')
	const block = document.createElement(teg)
	block.className = classes
	block.textContent = data
	output.append(block)
}

