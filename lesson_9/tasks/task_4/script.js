'use strict'

const elements = getArrayWithRandomValues(40)
let result = ''
for (const number of elements) {
	if (number > 100) result += `${number} `
}
const output = document.querySelector('.page__container')
output.innerHTML += `<div>${result}</div>`

function getArrayWithRandomValues(quantityElements) {
	const array = []
	for (let i = 0; i < quantityElements; i++) {
		array.push(getRandomValue(0, 200))
	}
	return array
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

