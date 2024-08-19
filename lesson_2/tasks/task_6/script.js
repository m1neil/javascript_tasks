'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const goods = createGoods()
	const totalPriceAllGoods = round(goods.reduce((sum, { totalPrice }) => sum + totalPrice, 0))
	printResult(totalPriceAllGoods, getRowOfTable(goods), output)
})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}

function getRowOfTable(goods) {
	let rows = ''
	goods.forEach(item => {
		rows += `
			<tr>
				<th>${item.id}</th>
				<td>${item.label}</td>
				<td>${round(item.quantity)}</td>
				<td>${round(item.price)}₴</td>
				<td>${round(item.totalPrice)}₴</td>
			</tr>
		`
	})
	return rows
}

function printResult(totalPrice, rows, output) {
	const table = `
		<table class="page__table table">
			<thead class="table__thead">
				<tr>
					<th>Номер</th>
					<th>Назва</th>
					<th>Кількість</th>
					<th>Ціна за одиницю товару</th>
					<th>Загальна ціна</th>
				</tr>
			</thead>
			<tbody class="table__tbody">
				${rows}
			</tbody>
			<tfoot class="table__tfoot">
				<th colspan="4">До оплати</th>
				<td>${totalPrice}₴</td>
			</tfoot>
		</table>
	`
	output.insertAdjacentHTML('beforeend', table)
}

function createGoods(quantity = 3) {
	const goods = []
	for (let i = 0; i < quantity; i++) {
		const product = {}
		product.id = i + 1
		product.label = prompt('Назва товару:', 'No name')
		product.price = parseFloat(prompt('Вартість товару'))
		product.quantity = parseInt(prompt('Кількість одиниць товару'))
		product.totalPrice = product.price * product.quantity
		goods.push(product)
	}
	return goods
}