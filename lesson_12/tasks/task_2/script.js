'use strict'

// 

const array = getArrayWithRandomValues(30, 8, 100)
sortArray(array, cocktailShaker)

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
	console.log('quantityComparisons: ', quantityComparisons);
	console.log('quantityChanges: ', quantityChanges);
}