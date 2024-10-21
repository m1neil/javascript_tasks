'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const dateElement = document.createElement('div')
	const isPeriod = isPeriodTime("2024-10-15T12:50:00")
	dateElement.textContent = `Дата 15.10.2024 час 12:50:00 входить в проміжок тижня? ${isPeriod ? 'Так' : 'Ні'}`
	document.querySelector('.page__container').append(dateElement)
}

function isPeriodTime(date) {
	const currentDate = new Date()
	const numberCurrentDay = currentDate.getDay() === 0 ? 7 : currentDate.getDay()
	const startWeek = currentDate.getDate() - numberCurrentDay + 1
	const endWeek = startWeek + 6

	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.getMonth()

	const dateStartWeek = new Date(currentYear, currentMonth, startWeek, 0, 0)
	const dateEndWeek = new Date(currentYear, currentMonth, endWeek, 23, 59)
	const dateSearchDay = new Date(date)

	return dateSearchDay >= dateStartWeek && dateSearchDay <= dateEndWeek
}