'use strict'

const elements = getArrayWithRandomValues(5)
let sum = 0
for (const number of elements) {
	if (number > 0) sum += number
}
const output = document.querySelector('.page__container')
output.innerHTML += `<div>${elements}</div>`
output.innerHTML += `<div>${sum}</div>`

function getArrayWithRandomValues(quantityElements) {
	const array = []
	for (let i = 0; i < quantityElements; i++) {
		array.push(getRandomValue(-500, 500))
	}
	return array
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

