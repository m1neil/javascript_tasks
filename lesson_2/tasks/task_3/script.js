'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const quantity = parseFloat(prompt('Кількість товару'))
	const price = parseFloat(prompt('Вартість одиниці товару'))
	const RATE_PDV = 5;

	if (quantity && price && quantity > 0 && price > 0) {
		const totalPrice = getTotalPrice(quantity, price)
		const pdv = getPDV(totalPrice, RATE_PDV)
		printResult(totalPrice, pdv, output)
	} else {
		output.insertAdjacentHTML('beforeend', `<div class="info">Ви не вказали кількість товару або його ціну!!!</div>`)
	}
})

function getTotalPrice(quantity, price) {
	return round(quantity * price)
}

function getPDV(totalPrice, rate) {
	return round(totalPrice * rate / 100)
}

function printResult(totalPrice, pdv, output) {
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
					<th>Загальна вартість</th>
					<td>${totalPrice}₴</td>
				</tr>
				<tr>
					<th>ПДВ під 5%</th>
					<td>${pdv}₴</td>
				</tr>
			</tbody>
		</table>
		`
	output.insertAdjacentHTML('beforeend', table)
}

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
