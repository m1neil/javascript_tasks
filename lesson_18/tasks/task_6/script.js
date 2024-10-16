'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.fields')
	const inputAmountAssessments = document.querySelector('#amount-assessments')
	const buttonGetTable = document.querySelector('#get-table')

	buttonGetTable.addEventListener('click', () => {
		const amountAssessments = parseInt(inputAmountAssessments.value)
		if (isNaN(amountAssessments))
			throw new Error("Not a number!")
		else if (amountAssessments < 1)
			throw new Error("The number should be more than 0!");

		removeElement('.table-container')

		const tableContainer = createElement('div', 'table-container')
		const table = createTable(1, amountAssessments)
		tableContainer.append(table)

		const buttonGetMiddleAverage = createElement('button', 'button', 'get middle average', 'button')
		buttonGetMiddleAverage.addEventListener('click', () => {
			removeElement('.middle-average', '.error')
			try {
				const middleAverage = calcMiddleAverage('input.assessment')
				const middleAverageDiv = createElement('div', 'middle-average', `middle average = ${middleAverage.toFixed(1)}`)
				tableContainer.append(middleAverageDiv)
			} catch (error) {
				const errorDiv = createElement('div', 'error info', error.message)
				container.append(errorDiv)
			}
		})
		tableContainer.append(buttonGetMiddleAverage)
		container.append(tableContainer)
	})
}

function calcMiddleAverage(selector) {
	const inputs = document.querySelectorAll(selector)
	if (!inputs.length) return
	const totalSum = Array.from(inputs).reduce((prevSum, input) => {
		const value = parseInt(input.value)
		if (isNaN(value))
			throw new Error('Not a number!')
		else if (value < 0 || value > 12)
			throw new Error('Going beyond the permissible boundaries!')
		return prevSum + value
	}, 0)

	return totalSum / inputs.length
}

function createTable(amountRow = 1, amountCol = 4) {
	const table = document.createElement('table')
	table.className = 'table'
	const tableBody = table.createTBody()
	tableBody.className = 'table__tbody'
	for (let indexRow = 0; indexRow < amountRow; indexRow++) {
		const row = document.createElement('tr')
		for (let indexCol = 0; indexCol < amountCol; indexCol++) {
			const td = document.createElement('td')
			const input = createElement('input', 'input assessment', '', 'number', 0, 0, 12)
			td.append(input)
			row.append(td)
		}
		tableBody.append(row)
	}
	return table
}

function removeElement(...selectors) {
	selectors.forEach(selector => {
		const element = document.querySelector(selector)
		if (element) element.remove()
	})
}

function createElement(tag = 'div', className = '', content = '', type = '', value, minValue, maxValue) {
	const element = document.createElement(tag)
	element.className = className

	switch (tag) {
		case 'div':
		case 'p':
		case 'button':
			element.textContent = content
			break
		case 'input':
			element.min = minValue ?? null
			element.max = maxValue ?? null
			element.value = value
			break
		default:
			throw new Error('Not provided for tags!')
	}

	if (element.tagName === 'BUTTON' || element.tagName === 'INPUT')
		element.type = type

	return element
}