'use strict'

const output = document.querySelector('.page__container');
const array = getArrayWithRandomValues(30, 10, 100)
insertTable(createTable(array), output)
const [quantityComparisons, quantityChanges] = sortArray(array, cocktailShaker)
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

function cocktailShaker(array) {
	let quantityChanges = 0, quantityComparisons = 0
	let startIndex = 0, lastIndex = array.length - 1

	while (startIndex < lastIndex) {
		let isChange = false
		for (let i = startIndex; i < lastIndex; i++) {
			if (array[i] > array[i + 1]) {
				const t = array[i]
				array[i] = array[i + 1]
				array[i + 1] = t
				quantityChanges++
				if (!isChange)
					isChange = true
			}
			quantityComparisons++
		}
		lastIndex--

		if (!isChange) break

		for (let i = lastIndex; i > startIndex; i--) {
			if (array[i] < array[i - 1]) {
				const t = array[i]
				array[i] = array[i - 1]
				array[i - 1] = t
				quantityChanges++
			}
			quantityComparisons++
		}

		startIndex++
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