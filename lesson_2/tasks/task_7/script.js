'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const month = getRandomValue(1, 12)
	const day = getRandomValue(0, 6)
	const sum = month + day
	printResult(day, month, sum, output)
})

function printResult(day, month, sum, output) {
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
					<th>Номер місяця</th>
					<td>${month}</td>
				</tr>
				<tr>
					<th>Номер дня</th>
					<td>${day}</td>
				</tr>
				<tr>
					<th>Сума</th>
					<td>${sum}</td>
				</tr>
			</tbody>
		</table>
	`
	output.insertAdjacentHTML('beforeend', table)
}

function getRandomValue(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}