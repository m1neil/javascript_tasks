'use strict'

if (confirm('Розпочати тестування')) {
	const pupilsClass = getNamesPupils(15)
	const numberNamesIvan = getNumberNamesIvan(pupilsClass)
	document.querySelector('.page__container').insertAdjacentHTML('beforeend', `
		<div>Учні: ${pupilsClass.join(', ')}</div>
		<div>Кількість імен Іван: ${numberNamesIvan}</div>
	`)

	function getNamesPupils(quantityPupils) {
		const names = ['Іван', 'Олександр', 'Михайло', 'Дмитро', 'Андрій']
		const pupilClass = []
		for (let i = 0; i < quantityPupils; i++) {
			pupilClass.push(names[getRandomValue(0, 4)])
		}
		return pupilClass
	}

	function getNumberNamesIvan(pupilsClass) {
		let quantityNamesIvan = 0
		for (let i = 0; i < pupilsClass.length; i++) {
			if (pupilsClass[i] === 'Іван')
				quantityNamesIvan++
		}
		return quantityNamesIvan
	}


	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}

}