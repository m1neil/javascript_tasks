'use strict'


if (confirm('Розпочати тестування:')) {
	const firstRandomNumber = Math.floor(Math.random() * 10 + 1),
		secondRandomNumber = Math.floor(Math.random() * 10 + 1)

	let userTries = 0
	let userFirstGuessNumber, userSecondGuessNumber
	do {
		if (firstRandomNumber !== userFirstGuessNumber) {
			userFirstGuessNumber = parseInt(prompt('Ведіть перше число: '))
			if (firstRandomNumber === userFirstGuessNumber)
				alert('Ви відгадали переш число')
		}
		if (secondRandomNumber !== userSecondGuessNumber) {
			userSecondGuessNumber = parseInt(prompt('Ведіть друге число: '))
			if (secondRandomNumber === userSecondGuessNumber)
				alert('Ви відгадали друге число')
		}

		userTries++
	} while (userFirstGuessNumber !== firstRandomNumber || userSecondGuessNumber !== secondRandomNumber);

	document.querySelector('.page__container').insertAdjacentHTML('beforeend',
		`<div class="info info--green">Ви вгадали! Кількість затрачених спроб: ${userTries}</div>`)
}