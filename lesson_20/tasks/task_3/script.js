'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const form = document.querySelector('#user-form')
	if (form)
		form.addEventListener('click', insertZeroInInput)
}

function insertZeroInInput(e) {
	const target = e.target

	if (target.closest('input')) {
		const currentInput = target.closest('input')
		if (!currentInput.value)
			currentInput.value = 0
	}
}