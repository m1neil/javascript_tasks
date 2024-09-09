'use strict'

const array = getArrayWithRandomValues(5)

const modifyArray = array.map((element, index, arr) => {
	if (index !== 0 && element > arr[0])
		return element *= 2
	else
		return element
})

const output = document.querySelector('.page__container')
output.innerHTML += `<div>Масив без модифікацій ${array}</div>`
output.innerHTML += `<div>Масив із модифікаціями ${modifyArray}</div>`

function getArrayWithRandomValues(quantityElements) {
	const array = []
	for (let i = 0; i < quantityElements; i++) {
		array.push(getRandomValue(0, 100))
	}
	return array
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
