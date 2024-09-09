'use strict'

if (confirm('Розпочати тестування?')) {
	const numberCells = parseInt(prompt('Ведіть кількість клітинок:'))
	let numberSingleShips = parseInt(prompt('Ведіть одиночних кораблів:'))

	const field = new Array(numberCells).fill(0)
	const lastIndex = field.length - 1

	for (let i = 0; i < numberSingleShips; i++) {
		let positionShip
		do {
			positionShip = getRandomValue(0, lastIndex)
		} while (field[positionShip] === 1);

		field[positionShip] = 1
	}

	while (numberSingleShips > 0) {
		const indexTargetCell = parseInt(prompt(`Ведіть клітинку для пострілу від 1 до ${numberCells}`)) - 1
		if (field[indexTargetCell] === 1) {
			alert('Ви втопили корабель')
			numberSingleShips--
			field[indexTargetCell] = 0
		} else
			alert('Мимо')
	}

	alert('Ви втопили всі кораблі!')

	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}
}

