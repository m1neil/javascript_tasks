'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const yearOfBirthday = parseInt(prompt('Рік вашого народження:'))
	const CURRENT_YEAR = 2024;
	const userAge = CURRENT_YEAR - yearOfBirthday;
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
					<th>Вік</th>
					<td>Ваш вік - ${userAge}</td>
				</tr>
			</tbody>
		</table>
		`
	output.insertAdjacentHTML('beforeend', table)
})