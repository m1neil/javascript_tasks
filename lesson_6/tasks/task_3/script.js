'use strict'

if (confirm('Розпочати тестування?')) {
	let sum = parseFloat(prompt('Ведіть початкове значення суми: '))
	while (sum < 100) {
		sum += parseFloat(prompt('Ведіть число: '))
	}
	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML('beforeend', `<div>Сума: ${sum}$</div>`)
}