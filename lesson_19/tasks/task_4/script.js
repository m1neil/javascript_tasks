'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	document.addEventListener('click', documentActions)
	const container = document.querySelector('.page__container')
	for (let indexTable = 1; indexTable <= 3; indexTable++) {
		const title = document.createElement('h2')
		title.textContent = `Таблиця ${indexTable}`
		container.append(title)

		const amountClick = document.createElement('div')
		amountClick.className = 'amount-click'
		amountClick.innerHTML = 'Кількість кліків: '
		amountClick.setAttribute('data-amount', 0)

		container.append(amountClick)
		container.append(createTable())
	}
}

function documentActions(e) {
	const target = e.target
	if (target.closest('td')) {
		const currentTable = target.closest('table')
		currentTable.classList.add('--border-red')
		const amountClicksDiv = currentTable.previousElementSibling
		const amountClicks = parseInt(amountClicksDiv.getAttribute('data-amount'))
		amountClicksDiv.setAttribute('data-amount', amountClicks + 1)
	}
}



function createTable(amountRows = 3, amountColumns = 3) {
	const table = document.createElement('table')
	table.className = 'table'
	const tableBody = table.createTBody()
	tableBody.className = 'table__tbody'
	for (let indexRow = 0; indexRow < amountRows; indexRow++) {
		const row = document.createElement('tr')
		for (let indexColumn = 0; indexColumn < amountColumns; indexColumn++) {
			const td = document.createElement('td')
			td.textContent = getRandomValue(0, 500)
			row.append(td)
		}
		tableBody.append(row)
	}
	return table
}

function getRandomValue(minValue, maxValue) {
	return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
}
