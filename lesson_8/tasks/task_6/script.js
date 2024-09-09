'use strict'

if (confirm('Почати тестування?')) {
	const productsPrices = [1000, 20, 31]
	const productsTitles = ['cheese', 'juice', 'bread']
	const amountMoney = parseFloat(prompt('Ведіть кількість грошей:'))
	const indexesAvailableGoods = getGoodsIndexAvailableUser(amountMoney, productsPrices)
	let result = '<div>Доступні товари: </div>'
	for (let i = 0; i < indexesAvailableGoods.length; i++) {
		result +=
			`<div>Товар: ${productsTitles[indexesAvailableGoods[i]]} - ціна: ${productsPrices[indexesAvailableGoods[i]]} грн.</div>`
	}
	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML('beforeend', result)

	function getGoodsIndexAvailableUser(amountUserMoney, productPrices) {
		const indexesAvailableGoods = []
		for (let i = 0; i < productPrices.length; i++) {
			if (amountUserMoney >= productPrices[i])
				indexesAvailableGoods.push(i)
		}
		return indexesAvailableGoods
	}
}
