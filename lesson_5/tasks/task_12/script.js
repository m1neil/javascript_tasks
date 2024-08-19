'use strict'

const userGuessNumber = parseInt(prompt('Загадайте число: ', '5'))

if (isNaN(userGuessNumber) || userGuessNumber < 0)
	alert('Не коректне значення або значення менше нуля')
else {
	const minThreshold = userGuessNumber - 10 < 0 ? 0 : userGuessNumber - 10
	const maxThreshold = userGuessNumber + 10
	let computerGuessNumber, isComputerRight

	do {
		computerGuessNumber = Math.floor(Math.random() * (maxThreshold - minThreshold + 1) + minThreshold)
		isComputerRight = confirm(`Комп'ютер гадає, що це число: ${computerGuessNumber}?`)
	} while (!isComputerRight);

	alert('Комп\'ютер відгадав число!!!')
}

