'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.fields')
	const inputUserYearBirth = document.querySelector('#user-year-birth')
	const inputUserAge = document.querySelector('#user-age')
	const buttonCalcAge = document.querySelector('#calc-age')

	buttonCalcAge.addEventListener('click', () => {
		removeElement('.error')
		try {
			inputUserAge.value = calcUserAge(parseInt(inputUserYearBirth.value))
		} catch (error) {
			const errorDiv = createElement('div', 'error info', error.message)
			container.append(errorDiv)
			inputUserAge.value = ''
		}
	})
}

function calcUserAge(userYearBirth) {
	const MIN_YEAR = 1874
	const CURRENT_YEAR = 2024
	if (isNaN(userYearBirth))
		throw new Error("Not a number!")
	else if (userYearBirth <= MIN_YEAR)
		throw new Error(`Year must be more than ${MIN_YEAR}!`)
	return CURRENT_YEAR - userYearBirth
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

function removeElement(selector) {
	const element = document.querySelector(selector)
	if (element) element.remove()
}