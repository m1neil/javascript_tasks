'use strict'

alert(getMiddlePositiveTemperatures())

function getMiddlePositiveTemperatures() {
	let sumPositiveTemperatures = 0
	let quantityPositiveTemperatures = 0
	let valueTemperature
	while (true) {
		valueTemperature = parseInt(prompt('Ведіть показник температури: '))
		if (isNaN(valueTemperature)) break
		else if (valueTemperature > 0) {
			sumPositiveTemperatures += valueTemperature
			quantityPositiveTemperatures++
		}
	}

	return quantityPositiveTemperatures > 0 ?
		roundNumber(sumPositiveTemperatures / quantityPositiveTemperatures) :
		0
}

function roundNumber(value, quantityDots = 2) {
	const factor = Math.pow(10, quantityDots)
	return Math.floor(value * factor) / factor
}