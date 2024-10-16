'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	document.addEventListener('click', documentActions)
}

function documentActions(e) {
	const target = e.target

	if (target.closest('button')) {
		const amountClicksDiv = document.querySelector('[data-click="button"]')
		const amountClicks = parseInt(amountClicksDiv.getAttribute('data-amount'))
		amountClicksDiv.setAttribute('data-amount', amountClicks + 1)
	}

	if (target.closest('input')) {
		const amountClicksDiv = document.querySelector('[data-click="input"]')
		const amountClicks = parseInt(amountClicksDiv.getAttribute('data-amount'))
		amountClicksDiv.setAttribute('data-amount', amountClicks + 1)
	}
}