'use strict'

if (confirm('Розпочати тестування:')) {
	const randomGuessNumber = Math.floor(Math.random() * 10 + 1)
	let quantityTries
	let userGuessNumber
	do {
		userGuessNumber = parseInt(prompt('Ведіть число:'))
		quantityTries++
	} while (userGuessNumber !== randomGuessNumber)

	document.querySelector('.page__container').insertAdjacentHTML('beforeend',
		`<div class="info info--green">Ви вгадали! Кількість затрачених спроб: ${quantityTries}</div>`)
}