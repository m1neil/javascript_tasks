'use strict'

if (confirm('Почати тестування?')) {
	const quantityElements = parseInt(prompt('Ведіть кількість елементі:'))
	const elements = new Array(quantityElements).fill(0)
	const output = document.querySelector('.page__container')
	output.innerHTML += `<div>${elements.join(' - ')}</div>`
}