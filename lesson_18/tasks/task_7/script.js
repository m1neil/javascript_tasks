'use strict'

// .page__container

window.addEventListener('click', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.page__container')
	const selectTransport = document.querySelector('#transport')
	const button = document.querySelector('#calc-price')
	button.addEventListener('click', calcPrice)

	function calcPrice() {
		const nutritionInputs = document.querySelectorAll('input:checked.nutrition__input')
		const nameGuide = document.querySelector('input:checked.guides__input').value.toLowerCase()
		try {
			let totalSum = Array.from(nutritionInputs).reduce((prevSum, input) => {
				const value = parseFloat(input.value)
				if (isNaN(value))
					throw new Error('Not a number!')
				return prevSum + value
			}, 0)
			totalSum += getPriceByTransport(selectTransport.value) + getPriceByNameGuide(nameGuide)

			removeElement('.total-price')
			const totalPriceDiv = createElement('div', 'total-price', `Повна сума: ${totalSum} грн.`)
			container.append(totalPriceDiv)
		} catch (error) {
			removeElement('.error')
			const errorDiv = createElement('div', 'error info', error.message)
			container.append(errorDiv)
		}

	}
}

function getPriceByNameGuide(name) {
	let price
	switch (name) {
		case 'valera':
			price = 500
			break
		case 'dmitry':
			price = 1500
			break
		case 'alexander':
			price = 2500
			break
		default:
			throw new Error('Unknown guide!')
	}
	return price
}

function getPriceByTransport(nameTransport) {
	let price
	switch (nameTransport) {
		case 'car':
			price = 500
			break
		case 'bus':
			price = 1500
			break
		case 'plane':
			price = 2500
			break
		default:
			throw new Error('Unknown transport!')
	}
	return price
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