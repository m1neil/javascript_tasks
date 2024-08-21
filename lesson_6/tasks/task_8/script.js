'use strict'

if (confirm('Розпочати тестування')) {
	let sum = 0

	do {
		console.log(sum)
		sum += parseFloat(prompt('Ведіть число:'))
	} while (sum <= 20);

	document.querySelector('.page__container').insertAdjacentHTML('beforeend', `<div>Сума: ${sum}</div>`)
}



