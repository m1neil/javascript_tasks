'use strict'

let guessNumber = parseInt(prompt('Загадайте число'))
if (isNaN(guessNumber)) {
	alert('Ведене не коректне значення')
} else {
	const minNumber = guessNumber - 5 < 0 ? 0 : guessNumber - 5
	const maxNumber = guessNumber + 5

	let result = 'Комп\'ютер не відгадав загадане число'

	for (let i = 1; i <= 3; i++) {
		const computerNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
		const computerIsRight = confirm(`Спроба комп'ютера №${i} вгадати число. Це число: ${computerNumber}?`)
		if (computerIsRight) {
			result = 'Комп\'ютер відгадав загадане число'
			break
		}
	}

	alert(result)
}


