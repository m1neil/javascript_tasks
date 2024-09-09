'use strict'

const array = getArrayWithRandomValues(30, 8, 100)
sortArray(array, bubbleSort)

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

function bubbleSort(array) {
	let lastIndex = array.length - 1
	let quantityChanges = 0, quantityComparisons = 0

	while (lastIndex > 0) {
		for (let i = 0; i < lastIndex; i++) {
			if (array[i] > array[i + 1]) {
				const t = array[i]
				array[i] = array[i + 1]
				array[i + 1] = t
				quantityChanges++
			}
			quantityComparisons++
		}
		lastIndex--
	}
	console.log('quantityComparisons: ', quantityComparisons);
	console.log('quantityChanges: ', quantityChanges);
}



