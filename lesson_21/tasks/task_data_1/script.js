'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const startSession = Date.now()
	const dateElement = document.querySelector('#date')
	setInterval(() => {
		const currentTimeSession = getCurrentMinutesSession(startSession)
		dateElement.textContent = `Час на сайті: ${currentTimeSession}`
	}, 1000);
}

function getCurrentMinutesSession(date) {
	const segmentTime = Date.now() - date
	const minutes = Math.floor(segmentTime / 1000 / 60) % 60
	const seconds = Math.floor(segmentTime / 1000) % 60
	return `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`
}