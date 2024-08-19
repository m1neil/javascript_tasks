'use strict'

const value = 9
const value2 = 8
const value3 = 12
const value4 = 10

alert(`Сума: ${getSum(value, value2, value3, value4)}`)
alert(`Добуток: ${getMultiply(value, value2, value3, value4)}`)
alert(`Середнє арифметичне ${getArithmeticMean(value, value2, value3, value4).toFixed(2)}`)
alert(`Мінімальне значення ${getMinValue(value, value2, value3, value4)}`)


function getSum(a = 0, b = 0, c = 0, d = 0) {
	return a + b + c + d
}

function getMultiply(a = 0, b = 0, c = 0, d = 0) {
	return a * b * c * d
}

function getArithmeticMean(a = 0, b = 0, c = 0, d = 0) {
	return (a + b + c + d) / 4
}

function getMinValue(a = 0, b = 0, c = 0, d = 0) {
	let minValue = a

	if (minValue > b) minValue = b
	if (minValue > c) minValue = c
	if (minValue > d) minValue = d

	return minValue
}