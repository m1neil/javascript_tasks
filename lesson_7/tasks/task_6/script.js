'use strict'

// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

const quantityRow = parseInt(prompt('Ведіть кількість рядків: '))
const quantityColumn = parseInt(prompt('Ведіть кількість колонок: '))
const customText = prompt('Ведіть текст який заповнить комірки')

const output = document.querySelector('.page__container')
output.insertAdjacentElement('beforeend', createTable(quantityRow, quantityColumn))

function createTable(quantityRow = 0, quantityColumn = 0, fixedText = 'Текст') {
	const table = document.createElement('table')
	const tbody = table.createTBody()
	table.classList.add('table')
	tbody.classList.add('table__tbody')

	for (let indexRow = 0; indexRow < quantityRow; indexRow++) {
		const tr = document.createElement('tr')
		for (let indexColumn = 0; indexColumn < quantityColumn; indexColumn++) {
			tr.insertAdjacentHTML('beforeend', `<td>${fixedText}</td>`)
		}
		tbody.insertAdjacentElement('beforeend', tr)
	}
	return table
}