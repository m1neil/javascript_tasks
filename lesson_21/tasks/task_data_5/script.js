'use strict'

// .page__container

// При заході на сайт вітати користувача або відображати повідомлення про те, скільки хвилин залишилось до початку робочого дня (початок о 8.00).

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const minutes = getHowManyMinutesToWorkDay()
	document.querySelector('.page__container')
		.append(`До початку робочого дня залишилось: ${minutes.toString().padStart(2, 0)} хв`)
}

function getHowManyMinutesToWorkDay() {
	const date = new Date()
	const day = date.getHours() > 8 ? 1 : 0
	date.setDate(date.getDate() + day)
	date.setHours(8)
	date.setMinutes(0)
	date.setSeconds(0)

	const resultTime = date - Date.now()
	const minutes = Math.floor(resultTime / 1000 / 60)
	return minutes
}