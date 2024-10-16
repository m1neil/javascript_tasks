'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	document.querySelector('.page__container').append(createListInputs())
}

function createListInputs(amountInputs = 5) {
	const container = document.createElement('div')
	container.className = 'inputs'

	for (let indexInput = 1; indexInput <= amountInputs; indexInput++) {
		const item = document.createElement('div')
		item.className = 'line'

		const label = document.createElement('label')
		label.className = 'line__label'
		label.textContent = `Value ${indexInput}`
		item.append(label)

		const input = document.createElement('input')
		input.type = 'number'
		input.className = 'line__input'
		input.addEventListener('input', changeValue)
		item.append(input)

		container.append(item)
	}

	return container
}

function changeValue(e) {
	let input = e.target
	changeValueSiblingInput(input, 'next')
	changeValueSiblingInput(input, 'prev')
}

function changeValueSiblingInput(input, directionSibling = 'next') {
	const sibling = directionSibling === 'next' ?
		'nextElementSibling' : 'previousElementSibling'
	const addedValue = directionSibling === 'next' ? 1 : -1

	while (input.parentElement[sibling]) {
		const currentElement = input.parentElement[sibling]
		const inputCurrentElement = currentElement.querySelector('input')
		const value = parseInt(input.value)
		if (isNaN(value)) return
		inputCurrentElement.value = value + addedValue
		input = inputCurrentElement
	}
}