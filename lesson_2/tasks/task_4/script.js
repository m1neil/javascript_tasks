'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const widthInCentimeters = parseFloat(prompt('Ширина в сантиметрах'))

	if (widthInCentimeters >= 0) {
		printResult(convertToMeters(widthInCentimeters), convertToKilometers(widthInCentimeters), output)
	} else {
		output.insertAdjacentHTML(
			'beforeend',
			'<div class="info">Ведіть коректне значення і щоб воно було більше або рівне 0</div>'
		)
	}
})

function convertToMeters(centimeters) {
	return round(centimeters / 100)
}

function convertToKilometers(centimeters) {
	return round(centimeters / 100_000)
}

function printResult(meters, kilometers, output) {
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
					<th>Ширина в метрах</th>
					<td>${meters} м.</td>
				</tr>
				<tr>
					<th>Ширина в кілометрах</th>
					<td>${kilometers} км.</td>
				</tr>
			</tbody>
		</table>
		`
	output.insertAdjacentHTML('beforeend', table)
}

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
