'use strict'

if (confirm('Почати тестування?')) {
	const quantityElements = parseInt(prompt('Ведіть кількість елементів:'))
	const endFirstHalfLength = Math.ceil(quantityElements / 2)

	const elements = new Array(quantityElements)
		.fill(1, 0, endFirstHalfLength)
		.fill(7, endFirstHalfLength)

	const output = document.querySelector('.page__container')
	output.innerHTML += `<div>${elements.join(' - ')}</div>`
}