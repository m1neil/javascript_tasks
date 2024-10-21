'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const inputProduction = document.querySelector('#date-production')
	const inputSuitability = document.querySelector('#suitability')
	const button = document.querySelector('.production__button')

	if (inputProduction && inputSuitability && button) {
		inputProduction.addEventListener('change',
			() => toggleBlockButton(inputProduction, inputSuitability, button))
		inputSuitability.addEventListener('input',
			() => toggleBlockButton(inputProduction, inputSuitability, button))
		button.addEventListener('click', () => calcSuitability(inputProduction, inputSuitability))
	}
}

function toggleBlockButton(inputDate, inputSuitability, button) {
	const date = inputDate.value
	const amountDays = parseInt(inputSuitability.value)

	if (date && amountDays)
		button.removeAttribute('disabled')
	else
		button.setAttribute('disabled', true)
}

function calcSuitability(inputDate, inputSuitability) {
	const date = inputDate.value
	const amountDays = parseInt(inputSuitability.value)

	const currentDate = Date.now()
	const endProduction = new Date(date)
	endProduction.setDate(endProduction.getDate() + amountDays)

	const isProductSuitable = currentDate < endProduction

	const answer = document.querySelector('.production__answer')
	answer.textContent = `Продукт ${isProductSuitable ? 'можна споживати' : 'не можна споживати'}`
}