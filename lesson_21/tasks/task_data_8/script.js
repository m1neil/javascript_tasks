'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	showTimeInactionUser()
}

function showTimeInactionUser() {
	const startWatching = new Date()
	document.addEventListener('mousemove', () => moveMouse(startWatching), { once: true })
}
function moveMouse(startWatching) {
	const endWatching = new Date()
	const differenceTime = endWatching - startWatching
	const seconds = Math.floor(differenceTime / 1000)
	const differenceTimeElement = createElement(`Час бездіяльності користувача: ${seconds} секунд`)
	printElement('.page__container', differenceTimeElement)
}

function createElement(str) {
	const element = document.createElement('div')
	element.textContent = str
	return element
}

function printElement(parentSelector, insertElement) {
	const parent = document.querySelector(parentSelector)
	if (parent) parent.append(insertElement)
}