'use strict'

const output = document.querySelector('.page__container')

const firstCurrentTime = getFullTimeInSeconds()
printTime('Час до додавання', convertTotalTime(firstCurrentTime))

const firstPastSeconds = getPastTime()
const firstTotalTime = firstCurrentTime + firstPastSeconds
printTime('Час після додання секунд', convertTotalTime(firstTotalTime))

output.insertAdjacentHTML('beforeend', '<hr>')

const secondCurrentTime = getFullTimeInSeconds()
printTime('Час до додавання', convertTotalTime(secondCurrentTime))

const secondPastSeconds = getPastTime(1, 1)
const secondsTotalTime = secondCurrentTime + secondPastSeconds
printTime('Час після додання секунд', convertTotalTime(secondsTotalTime))


function convertTotalTime(timeInSeconds) {
	const seconds = Math.floor(timeInSeconds % 60)
	const minutes = Math.floor(timeInSeconds / 60 % 60)
	const hours = Math.floor(timeInSeconds / 60 / 60 % 24)

	return {
		seconds,
		minutes,
		hours
	}
}

function printTime(title, { seconds, minutes, hours }) {
	output.insertAdjacentHTML('beforeend', `
	<div style="margin-bottom: ${15 / 16}rem">
		<div>${title}</div>
		<div>Години: ${hours}, хвилини: ${minutes}, секунди: ${seconds}</div>
	</div>`
	)
}

function getFullTimeInSeconds() {
	const currentHours = parseInt(prompt('Ведіть поточну годину: ', '2'))
	const currentMinutes = parseInt(prompt('Ведіть поточні хвилини: ', '35'))
	const currentSeconds = parseInt(prompt('Ведіть поточні секунди: ', '15'))
	return currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds
}

function getPastTime(isGetSeconds = 1, isGetMinutes = 0) {
	let seconds = 0, minutes = 0

	if (isGetMinutes)
		minutes = parseInt(prompt('Ведіть яка кількість хвилин пройшла з моменту веденого часу:', '5'))
	if (isGetSeconds)
		seconds = parseInt(prompt('Ведіть яка кількість секунд пройшла з моменту веденого часу:', '120'))

	return seconds + minutes * 60
}