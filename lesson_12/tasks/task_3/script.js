'use strict'

const output = document.querySelector('.page__container');
const array = getArrayWithRandomValues(30, 10, 100)
insertTable(createTable(array), output)
sortArray(array, includesSort)
insertTable(createTable(array), output)
output.insertAdjacentHTML('beforeend', `
	<div>Кількість порівнянь: ${quantityComparisons}</div>
	<div>Кількість обмінів: ${quantityChanges}</div>
`)

function sortArray(array, typeSort) {
	return typeSort(array)
}

function getArrayWithRandomValues(quantity, min, max) {
	const array = []
	for (let i = 0; i < quantity; i++) {
		const randomValue = Math.floor(Math.random() * (max - min + 1) + min)
		array.push(randomValue)
	}
	return array
}

function includesSort(array) {
	let quantityChanges = 0, quantityComparisons = 0
	for (let i = 1; i < array.length; i++) {
		const currentElement = array[i];
		let k = i - 1
		while (k >= 0 && array[k] > currentElement) {
			array[k + 1] = array[k]
			quantityChanges++
			quantityComparisons++
			k--
		}
		array[k + 1] = currentElement
		quantityChanges++
	}

	return [quantityComparisons, quantityChanges]
}

function createTable(array, indexGreenHighlight, indexRedHighlight, isNotAddMargin) {
	const table = document.createElement('table')
	table.classList.add('table')
	if (isNotAddMargin)
		table.style.marginBottom = 0
	const tbody = table.createTBody()
	tbody.classList.add('table__tbody')
	const tr = document.createElement('tr')
	for (let i = 0; i < array.length; i++) {
		let className = ''
		switch (i) {
			case indexGreenHighlight:
				className = 'green'
				break;
			case indexRedHighlight:
				className = 'red'
				break;
		}
		tr.insertAdjacentHTML('beforeend', `<td class="${className}">${array[i]}</td>`)
	}
	tbody.append(tr)
	return table
}

function insertTable(table, wrapper) {
	wrapper.append(table)
}