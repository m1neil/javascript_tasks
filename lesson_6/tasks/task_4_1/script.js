'use strict'

if (confirm('Почати тестування?')) {
	let firstNumber = parseFloat(prompt('Ведіть число: '))
	let secondNumber = parseFloat(prompt('Ведіть число: '))
	const ul = document.createElement('ul')
	while (firstNumber <= secondNumber) {
		ul.insertAdjacentHTML('beforeend',
			`<li>${firstNumber}---${secondNumber}</li>`
		)
		firstNumber++
		secondNumber--
	}
	const output = document.querySelector('.page__container')
	output.insertAdjacentElement('beforeend', ul)
}

