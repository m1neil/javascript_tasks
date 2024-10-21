'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const date = new Date()
	date.setHours(17)
	date.setMinutes(0)
	date.setSeconds(0)
	printLastTime(getTimeToEndWorking(date))
	setInterval(() => {
		const lastTime = getTimeToEndWorking(date)
		printLastTime(lastTime)
	}, 60000)
}

function printLastTime({ hours, minutes }) {
	document.querySelector('.last-time span').textContent = `${hours} годин ${minutes} хвилин`
}

function getTimeToEndWorking(deadline) {
	const lastTime = deadline - Date.now()
	const hours = Math.floor(lastTime / 1000 / 60 / 60)
	const minutes = Math.floor(lastTime / 1000 / 60) % 60
	return { hours, minutes }
}