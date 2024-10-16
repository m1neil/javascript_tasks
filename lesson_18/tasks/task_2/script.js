'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const RATE_DOLLAR = 41.25
	const RATE_EURO = 45.76
	const container = document.querySelector('.fields')
	const inputSumUAH = document.querySelector('#sum-uah')
	const inputSumEuro = document.querySelector('#sum-euro')
	const inputSumDollars = document.querySelector('#sum-dollars')
	const buttonConvert = document.querySelector('#convert')

	buttonConvert.addEventListener('click', convertCurrency)

	function convertCurrency() {
		removeElement('.error')
		try {
			const sumUAH = parseFloat(inputSumUAH.value)
			isCorrectSum(sumUAH)
			const sumInEuro = sumUAH / RATE_EURO
			const sumInDollars = sumUAH / RATE_DOLLAR
			inputSumEuro.value = sumInEuro.toFixed(2)
			inputSumDollars.value = sumInDollars.toFixed(2)
		} catch (error) {
			const errorDiv = createElement('div', 'error info', error.message)
			container.append(errorDiv)
			inputSumDollars.value = 0
			inputSumEuro.value = 0
		}
	}

	function isCorrectSum(value) {
		if (value < 0)
			throw new Error('The amount cannot be negative!')
		return true
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