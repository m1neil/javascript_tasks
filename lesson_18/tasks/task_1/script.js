'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.fields')
	const inputFirstNumber = document.querySelector('#first-number')
	const inputSecondNumber = document.querySelector('#second-number')
	const inputResult = document.querySelector('#result')
	const actionsList = document.querySelectorAll('[data-operation]')

	actionsList.forEach(button => {
		button.addEventListener('click', () => {
			removeElement('.fields__error')
			const operation = button.dataset.operation ? button.dataset.operation : ''
			try {
				calcNumbers(operation)
			} catch (error) {
				const errorDiv = createElement('div', 'fields__error info', error.message)
				container.append(errorDiv)
				inputResult.value = 0
			}
		})
	})

	function calcNumbers(operation) {
		const firstValue = parseFloat(inputFirstNumber.value)
		const secondValue = parseFloat(inputSecondNumber.value)
		if (isNaN(firstValue) || isNaN(secondValue))
			throw new Error('Not a number!')

		let result = 0
		switch (operation) {
			case '+':
				result = firstValue + secondValue
				break;
			case '-':
				result = firstValue - secondValue
				break;
			case '*':
				result = firstValue * secondValue
				break;
			case '/':
				if (!secondValue)
					throw new Error("You can’t divide into zero!");
				result = firstValue / secondValue
				break;
			default:
				throw new Error("Unknown operation!");
		}
		inputResult.value = result
	}
}

function removeElement(selector) {
	const element = document.querySelector(selector)
	if (element) element.remove()
}

function createElement(tag = 'div', className = '', content = '', type = '', value, minValue, maxValue) {
	const element = document.createElement(tag)
	element.className = className

	switch (tag) {
		case 'div':
		case 'p':
		case 'button':
			element.textContent = content
			break
		case 'input':
			element.min = minValue ?? null
			element.max = maxValue ?? null
			element.value = value
			break
		default:
			throw new Error('Not provided for tags!')
	}

	if (element.tagName === 'BUTTON' || element.tagName === 'INPUT')
		element.type = type

	return element
}