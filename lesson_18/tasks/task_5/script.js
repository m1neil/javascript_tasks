'use strict'


window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.page__container')
	const table = createTable()
	if (container) container.append(table)
}

function createTable(amountRow = 3, amountCol = 4, minRandomValue = 0, maxRandomValue = 120) {
	const table = document.createElement('table')
	table.className = 'table'
	const tableBody = table.createTBody()
	tableBody.className = 'table__tbody'
	for (let indexRow = 0; indexRow < amountRow; indexRow++) {
		const row = document.createElement('tr')
		for (let indexCol = 0; indexCol < amountCol; indexCol++) {
			const td = document.createElement('td')
			td.textContent = getRandomValue(minRandomValue, maxRandomValue)
			row.append(td)
		}
		tableBody.append(row)
	}
	return table
}

function getRandomValue(minValue = 0, maxValue = 50) {
	return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}