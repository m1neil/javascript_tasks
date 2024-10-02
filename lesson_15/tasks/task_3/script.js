'use strict'

// 

class MultChecker {
	constructor(checkValue) {
		this.checkValue = isNaN(checkValue) ? 'Не визначено' : checkValue
		this.quantityCorrectAnswer = 0
		this.quantityWrongAnswer = 0
	}

	getExample() {
		const secondValue = Math.floor(Math.random() * 10 + 1)
		return {
			correctAnswer: this.checkValue * secondValue,
			example: `${this.checkValue} * ${secondValue} = ?`
		}
	}

	isCorrectAnswer(userAnswer, correctAnswer) {
		let isRightAnswer = true
		if (userAnswer === correctAnswer)
			this.quantityCorrectAnswer++
		else {
			this.quantityWrongAnswer++
			isRightAnswer = false
		}
		return isRightAnswer
	}

	render(output) {
		output.insertAdjacentHTML('beforeend',
			`<ul class="list-object">
				<li class="list-object__item">Перевіряєме число: ${this.checkValue}</li>
				<li class="list-object__item">Кількість правильних відповідей: ${this.quantityCorrectAnswer}</li>
				<li class="list-object__item">Кількість не правильних відповідей: ${this.quantityWrongAnswer}</li>
			</ul>`
		)
	}
}

if (confirm('Розпочати тестування?')) {
	const checkValue = parseInt(prompt('Число для перевірки множення', 7))
	const output = document.querySelector('.page__container');
	const multChecker = new MultChecker(checkValue)
	let isContinue = isNaN(checkValue) ? false : true

	while (isContinue) {
		const { correctAnswer, example } = multChecker.getExample()
		const userAnswer = parseInt(prompt(`Приклад: ${example}`))
		if (isNaN(userAnswer)) break
		const isCorrectAnswer = multChecker.isCorrectAnswer(userAnswer, correctAnswer)
		alert(isCorrectAnswer ? 'Вірна відповідь' : 'Не вірна відповідь')
		isContinue = confirm('Продовжувати?')
	}

	multChecker.render(output)
}

