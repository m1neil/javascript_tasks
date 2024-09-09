'use strict'

const array = getArrayWithRandomValues(30, 8, 100)
sortArray(array, includesSort)


function sortArray(array, typeSort) {
	console.log(`Масив до сортування: ${array.join(', ')}`);
	typeSort(array)
	console.log(`Масив після сортування: ${array.join(', ')}`);
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
	console.log('quantityComparisons: ', quantityComparisons);
	console.log('quantityChanges: ', quantityChanges);
}