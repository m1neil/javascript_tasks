'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const array = createArray(800)
	const timeBubbleSort = watchTimeSorting(array, sortBubble)
	const timeInsertSort = watchTimeSorting(array, insertionSort)

	const container = document.querySelector('.page__container')
	container.insertAdjacentHTML('beforeend', `<div>Час сортування бульбашкою: ${timeBubbleSort} мс.</div>`)
	container.insertAdjacentHTML('beforeend', `<div>Час сортування вставкою: ${timeInsertSort} мс.</div>`)
}

function sortBubble(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let k = 0; k < array.length - i - 1; k++) {
			if (array[k] > array[k + 1]) {
				const t = array[k]
				array[k] = array[k + 1]
				array[k + 1] = t
			}
		}
	}
}

function insertionSort(array) {
	for (let i = 1, l = array.length; i < l; i++) {
		const current = array[i];
		let j = i;
		while (j > 0 && array[j - 1] > current) {
			array[j] = array[j - 1];
			j--;
		}
		array[j] = current;
	}
	return array;
};

function watchTimeSorting(array, funSort) {
	const startSort = new Date()
	funSort(array)
	const endSort = new Date()

	const differenceTime = endSort - startSort
	return differenceTime
}

function createArray(length = 800, minValue = 1, maxValue = 800) {
	const array = []
	for (let i = 0; i < length; i++) {
		const value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
		array.push(value)
	}
	return array
}