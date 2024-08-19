'use strict'

window.addEventListener('load', () => {
	const a = parseFloat(prompt('Число а:', '5'))
	const b = parseFloat(prompt('Число b:', '2'))
	const output = document.querySelector('.page__container')

	if (!a || !b && b !== 0) {
		output.insertAdjacentHTML('beforeend', '<div class="info">Ведені не всі числа!!</div>')
		return
	}

	if (b === 0) {
		output.insertAdjacentHTML('beforeend', '<div class="info">На нуль ділити не можна!!!</div>')
		return
	}

	const multiplication = a * b
	const division = a / b
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
					<th>Добуток</th>
					<td>${a} * ${b} = ${round(multiplication)}</td>
				</tr>
				<tr>
					<th>Різниця</th>
					<td>${a} / ${b} = ${round(division)}</td>
				</tr>
			</tbody>
		</table>
		`
	output.insertAdjacentHTML('beforeend', table)
})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
