'use strict'

const totalPricePayment = 5200
let userMoneyBalance = 0

do {
	let derivedSum = parseFloat(prompt(`Ведіть суму грошей до сплати товарів. Для оплати потрібно ${(totalPricePayment - userMoneyBalance).toFixed(2)}`))
	if (isNaN(derivedSum)) {
		alert('Ведіть коректну суму!')
		continue
	}

	userMoneyBalance += derivedSum
} while (userMoneyBalance < totalPricePayment);
