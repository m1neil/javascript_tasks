'use strict'

const productPrice = parseFloat(prompt('Ведіть ціну товару: ', '1500'))
const userMoney = parseFloat(prompt('Ведіть кількість грошей'))
let remainder = 0
const output = document.querySelector('.page__container')

if (userMoney < productPrice)
	output.insertAdjacentHTML('beforeend', '<div>На вашому рахунку не достатньо грошей для купівлі цього продукту!</div>')
else {
	remainder = userMoney - productPrice
	output.insertAdjacentHTML('beforeend', `<div>Залишок грошей на рахунку користувача: ${remainder.toFixed(2)}</div>`)

	if (remainder > 0) {
		const isNeedLottery = confirm('Бажаєте купити лотерею за 4 грн?')
		if (isNeedLottery)
			output.insertAdjacentHTML('beforeend', '<div>Користувач придбав товар та хоче купити лотерею за 4 грн</div>')
		else
			output.insertAdjacentHTML('beforeend', '<div>Користувач придбав товар та не хоче купувати лотерею за 4 грн</div>')
	}
}





