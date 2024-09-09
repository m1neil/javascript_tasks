'use strict'

if (confirm('Розпочати тестування?')) {
	const quantityElements = parseInt(prompt('Ведіть кількість елементів:'))
	const elements = new Array(quantityElements)
		.fill(1, 0, 5)
		.fill(7, 5)
	const output = document.querySelector('.page__container')
	output.innerHTML += `<div>${elements.join(' - ')}</div>`
}