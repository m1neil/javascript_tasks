'use strict'

// Дано покази температур(довільна кількість).Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

alert(`Кількість ід’ємних показів температури - ${calcNumberNegativeTemperatures()}`)

function calcNumberNegativeTemperatures() {
	let quantityNegativeTemperatures = 0
	let valueTemperature
	while (true) {
		valueTemperature = parseInt(prompt('Ведіть показник температури: '))
		if (isNaN(valueTemperature)) break
		else if (valueTemperature < 0) quantityNegativeTemperatures++
	}
	return quantityNegativeTemperatures
}