'use strict'

if (confirm('Розпочати тестування?')) {
	let startValue = 1
	let endValue = parseInt(prompt('Ведіть кінцеве значення:'))
	let userGuessNumber = parseInt(prompt(`Загадайте число від 1 до ${endValue}`))
	let guessNumber = 0
	let isLess = false
	while (startValue <= endValue && guessNumber !== userGuessNumber) {
		guessNumber = Math.ceil((endValue + startValue) / 2)
		const isCorrectGuessNumber = confirm(`Це число ${guessNumber}? Загадене число: ${userGuessNumber}`)
		if (isCorrectGuessNumber) {
			alert('Число було успішно відгадане')
		} else {
			isLess = confirm(`Число ${guessNumber} більше за загадене?, Загадене число: ${userGuessNumber}`)
			if (isLess)
				endValue = guessNumber - 1
			else
				startValue = guessNumber + 1
		}
	}
}