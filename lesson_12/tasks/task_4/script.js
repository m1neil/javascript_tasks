'use strict'

const arrayForSortBubbleSort = getArrayWithRandomValues(5, 10, 100)
const arrayForSortCocktailShaker = getArrayWithRandomValues(7, 10, 100)
const arrayForIncludesSort = getArrayWithRandomValues(5, 10, 100)


sortArray(arrayForSortBubbleSort, bubbleSort)
sortArray(arrayForSortCocktailShaker, cocktailShaker)
sortArray(arrayForIncludesSort, includesSort)


function bubbleSort(array) {
	let lastIndex = array.length - 1
	const output = document.querySelector('#bubble-sort');

	while (lastIndex > 0) {
		for (let i = 0; i < lastIndex; i++) {
			if (array[i] > array[i + 1]) {
				insertTable(createTable(array, i, i + 1, true), output)
				const t = array[i]
				array[i] = array[i + 1]
				array[i + 1] = t
				insertTable(createTable(array, i + 1, i), output)
			}
		}
		lastIndex--
	}
	insertTable(createTable(array), output)
}

function includesSort(array) {
	for (let i = 1; i < array.length; i++) {
		const currentElement = array[i];
		let k = i - 1
		while (k >= 0 && array[k] > currentElement) {
			array[k + 1] = array[k]
			k--
		}
		array[k + 1] = currentElement
	}
}

function cocktailShaker(array) {
	let startIndex = 0, lastIndex = array.length - 1
	const output = document.querySelector('#cocktail-shaker-sort');
	while (startIndex < lastIndex) {
		let isChange = false
		for (let i = startIndex; i < lastIndex; i++) {
			if (array[i] > array[i + 1]) {
				insertTable(createTable(array, i, i + 1, true), output)
				const t = array[i]
				array[i] = array[i + 1]
				array[i + 1] = t
				insertTable(createTable(array, i + 1, i), output)
				if (!isChange)
					isChange = true
			}
		}
		lastIndex--

		if (!isChange) break

		for (let i = lastIndex; i > startIndex; i--) {
			if (array[i] < array[i - 1]) {
				insertTable(createTable(array, i, i - 1, true), output)
				const t = array[i]
				array[i] = array[i - 1]
				array[i - 1] = t
				insertTable(createTable(array, i - 1, i), output)
			}
		}

		startIndex++
	}
	insertTable(createTable(array), output)
}


function sortArray(array, typeSort) {
	typeSort(array)
}

function getArrayWithRandomValues(quantity, min, max) {
	const array = []
	for (let i = 0; i < quantity; i++) {
		const randomValue = Math.floor(Math.random() * (max - min + 1) + min)
		array.push(randomValue)
	}
	return array
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