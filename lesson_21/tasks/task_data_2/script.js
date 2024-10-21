'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {

	const startProceduresElement = document.querySelector('.start-procedures')
	const currentTimeElement = document.querySelector('.current-time-procedures')
	const answerElement = document.querySelector('.answer')

	const durationSession = 30
	startProceduresElement.textContent = `Час процедури: ${durationSession} хв.`
	currentTimeElement.textContent = `Процедура будет ще тривати: ${addZero(durationSession)} хв. та 00 сек.`

	const deadline = new Date()
	deadline.setMinutes(deadline.getMinutes() + durationSession)
	deadline.setSeconds(deadline.getSeconds() + 1)

	const interval = setInterval(() => {
		const time = deadline - Date.now()
		const seconds = Math.floor(time / 1000) % 60
		const minutes = Math.floor(time / 1000 / 60) % 60

		if (time > 0) {
			currentTimeElement.textContent = `Процедура будет ще тривати: ${addZero(minutes)} хв. та ${addZero(seconds)} сек.`
		} else {
			answerElement.textContent = 'Процедура закінчена'
			clearInterval(interval)
		}
	}, 1000)
}

function addZero(value) {
	return value.toString().padStart(2, 0)
}