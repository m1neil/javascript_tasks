'use strict'

const prices = getPrices(5)
const pricesTax = calcTaxProductsPrices(prices)
const output = document.querySelector('.page__container')
output.innerHTML += `<div>Ціна товарів: ${prices.join(', ')}</div>`
output.innerHTML += `<div>Податки які будут сплачені за товар ${pricesTax.join(', ')}</div>`

function calcTaxProductsPrices(prices, tax = 20) {
	return prices.map(price => floorValue(price * tax / 100))
}

function getPrices(quantityPrices = 10) {
	const prices = []
	for (let i = 0; i < quantityPrices; i++) {
		prices.push(getRandomValue(100, 3000))
	}
	return prices
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function floorValue(value, quantityDots = 2) {
	const factor = Math.pow(10, quantityDots)
	return Math.floor(value * factor) / factor
}

