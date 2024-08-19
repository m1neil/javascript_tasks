'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const seconds = parseFloat(prompt('Ведіть кількість секунд, що пройшли від початку доби'))

	if (seconds >= 0) {
		const minutesOfHours = Math.round(seconds / 60) % 60
		printResult(round(convertInMinutes(seconds), 0), convertInHours(seconds), minutesOfHours, output)
	} else {
		output.insertAdjacentHTML('beforeend', '<div class="info">Ведіть секунди щоб вони були більше або рівні 0</div>')
	}
})

function convertInMinutes(seconds) {
	return seconds / 60
}

function convertInHours(seconds) {
	return Math.floor(seconds / 60 / 60) % 24
}

function printResult(minutes, hours, minutesOfHours, output) {
	const table = `
		<table class="page__table table">
			<thead class="table__thead">
				<tr>
					<th>Шуканий результат</th>
					<th>Отримане значення</th>
				</tr>
			</thead>
			<tbody class="table__tbody">
				<tr>
					<th>Хвилини</th>
					<td>${minutes} хв</td>
				</tr>
				<tr>
					<th>Години</th>
					<td>${hours} г. ${minutesOfHours} хв.</td>
				</tr>
			</tbody>
		</table>
		`
	output.insertAdjacentHTML('beforeend', table)
}

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
