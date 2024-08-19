'use strict'

const firstProductPrice = parseFloat(prompt('Вартість одиниці товару:', '250.70'))
const quantityFirstProduct = parseFloat(prompt('Кількість одиниць товару:', '7'))

const secondProductPrice = parseFloat(prompt('Вартість одиниці товару:', '130'))
const quantitySecondProduct = parseFloat(prompt('Кількість одиниць товару:', '23'))

const totalPriceFirstProduct = firstProductPrice * quantityFirstProduct
const totalPriceSecondProduct = secondProductPrice * quantitySecondProduct

const totalPrice = totalPriceFirstProduct + totalPriceSecondProduct

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `
	<table class="table">
		<thead class="table__thead">
			<tr>
				<th>Товару</th>
				<th>Ціна товару</th>
				<th>Кількість товару</th>
				<th>Загальна сума товару</th>
			</tr>
		</thead>
		<tbody class="table__tbody">
			<tr>
				<th>Товар №1</th>
				<td>${firstProductPrice.toFixed(2)} грн.</td>
				<td>${quantityFirstProduct}</td>
				<td>${totalPriceFirstProduct.toFixed(2)} грн.</td>
			</tr>
			<tr>
				<th>Товар №2</th>
				<td>${secondProductPrice.toFixed(2)} грн.</td>
				<td>${quantitySecondProduct}</td>
				<td>${totalPriceSecondProduct.toFixed(2)} грн.</td>
			</tr>
		</tbody>
		<tfoot class="table__tfoot">
			<tr>
				<th colspan="3">Загальна вартість</th>
				<td>${totalPrice.toFixed(2)} грн.</td>
			</tr>
		</tfoot>
	</table>
`)