'use strict'

class MultChecker {
	#firstNum
	#secondNum
	#operation = '*'
	#userAnswer
	#correctAnswer

	constructor(minValue, maxValue) {
		this.#firstNum = this.getRandomValue(minValue, maxValue)
		this.#secondNum = this.getRandomValue(minValue, maxValue)
		this.#correctAnswer = this.FirstNum * this.SecondNum
	}

	get UserAnswer() {
		return this.#userAnswer
	}

	set UserAnswer(answer) {
		this.isNumber(answer)
		this.#userAnswer = answer
	}

	getRandomValue(min = 1, max = 10) {
		this.isNumber(min)
		this.isNumber(max)
		if (min < 1)
			throw new Error('Min value must be more than 0!')
		else if (max > 10)
			throw new Error('Max value mustn`t be more than 10!')
		else if (max <= min)
			throw new Error('Max value mustn`t be equal or less than min value!')
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	isNumber(value) {
		if (isNaN(value))
			throw new Error('Not a number!')
		return true
	}

	getExample() {
		return `${this.#firstNum} ${this.#operation} ${this.#secondNum} = ${this.UserAnswer ?? '?'}`
	}

	toString() {
		return this.getExample()
	}
}

class AddChecker {
	#firstNum
	#secondNum
	#operation = '+'
	#userAnswer
	#correctAnswer

	constructor(minValue, maxValue) {
		this.#firstNum = this.getRandomValue(minValue, maxValue)
		this.#secondNum = this.getRandomValue(minValue, maxValue)
		this.#correctAnswer = this.#firstNum + this.#secondNum
	}

	get UserAnswer() {
		return this.#userAnswer
	}

	set UserAnswer(answer) {
		this.isNumber(answer)
		this.#userAnswer = answer
	}

	getRandomValue(min = 0, max = 250) {
		this.isNumber(min)
		this.isNumber(max)
		if (min < 0)
			throw new Error('Min value must be equal or more than 0!')
		else if (max < min)
			throw new Error('Max value mustn`t be equal or less than min value!')
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	isNumber(value) {
		if (isNaN(value))
			throw new Error('Not a number!')
		return true
	}

	getExample() {
		return `${this.#firstNum} ${this.#operation} ${this.#secondNum} = ${this.UserAnswer ?? '?'}`
	}

	toString() {
		return this.getExample()
	}
}


class History {
	#historyList
	static historyRef
	constructor(initHistList = []) {
		if (History.historyRef) return History.historyRef
		this.HistoryList = initHistList
		History.historyRef = this
	}

	set HistoryList(initHistList) {
		this.isArray(initHistList)
		this.#historyList = initHistList
	}
	get HistoryList() {
		return this.#historyList
	}

	isArray(array) {
		if (!Array.isArray(array))
			throw new Error('It isn`t an array!')
		return true
	}

	setNewItem(item) {
		this.HistoryList.push(this.parseToObject(item))
	}

	parseToObject(item) {
		if (item instanceof AddChecker || item instanceof MultChecker) {
			return {
				firstNum: item.FirstNum,
				secondNum: item.SecondNum,
				operation: item.Operation,
				userAnswer: item.UserAnswer,
				correctAnswer: item.CorrectAnswer
			}
		}
		else
			throw new Error('An object of the Addchecker or Multchecker type was expected!')
	}

	generateList(className = 'list', tag = 'ul') {
		const list = document.createElement(tag)
		list.className = className
		this.HistoryList.forEach(({ firstNum, secondNum, operation, userAnswer, correctAnswer }, index) => {
			const li = document.createElement('li')
			const classWrang = userAnswer !== correctAnswer ? 'wrang' : ''
			li.className = `${className}__item ${classWrang}`
			li.textContent = `Приклад ${index + 1}) ${firstNum} ${operation} ${secondNum} = ${userAnswer}`
			if (classWrang) {
				const correctAnswerDiv = document.createElement('div')
				correctAnswerDiv.className = 'correct'
				correctAnswerDiv.textContent = `Правильна відповідь: ${correctAnswer}`
				li.append(correctAnswerDiv)
			}
			list.append(li)
		})
		return list
	}

	printHistory(output) {
		if (!output)
			throw new Error('Not found element!')
		output.append(this.generateList())
	}
}

class TestData {
	constructor(amountTest = 5, intervalMultiply, intervalAdd) {
		this.history = new History()
		this.testManager = new TestManager(amountTest, this.history, intervalMultiply, intervalAdd)
	}

	test(output) {
		if (!output)
			throw new Error("Not found Element!");

		this.testManager.start()
		this.history.printHistory(output)
	}
}

class TestManager {
	#amountExercises
	#history
	constructor(initAmountExercises, history, intervalMultiply, intervalAdd) {
		this.AmountExercises = initAmountExercises
		this.intervalAdd = intervalAdd
		this.intervalMultiply = intervalMultiply
		this.exercisesList = this.generateExercisesList()
		this.#history = history
	}

	set AmountExercises(newAmountExercises) {
		if (newAmountExercises < 0)
			throw new Error('Amount exercises can`t be negative')
		this.#amountExercises = newAmountExercises
	}
	get AmountExercises() {
		return this.#amountExercises
	}

	generateExercisesList() {
		const exercisesList = []
		for (let indexExercises = 0; indexExercises < this.AmountExercises; indexExercises++) {
			const exercise = this.generateUnitOrZero() ?
				new MultChecker(this.intervalMultiply?.min, this.intervalMultiply?.max) :
				new AddChecker(this.intervalAdd?.min, this.intervalAdd?.max)
			exercisesList.push(exercise)
		}
		return exercisesList
	}

	generateUnitOrZero() {
		return Math.floor(Math.random() * 2)
	}

	start() {
		for (let i = 0; i < this.AmountExercises;) {
			const exercise = this.exercisesList[i]
			const userAnswer = parseFloat(prompt(`#${i + 1}) ${exercise}`))
			if (isNaN(userAnswer)) continue
			exercise.UserAnswer = userAnswer
			this.#history.setNewItem(exercise)
			i++
		}
	}
}
if (confirm('Розпочати тестування?')) {
	const output = document.querySelector('.page__container')
	try {
		const test = new TestData(5, { min: 2, max: 9 }, { min: 1, max: 125 })
		test.test(output)
	} catch (error) {
		console.error(error.message)
	}
}


