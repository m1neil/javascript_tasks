'use strict'

const productsPrices = getArrayWithRandomValues(5)
const productsPricesWithDiscount = productsPrices.map(price => {
	return price > 1000 ? floorValue(price - price * 0.3) : price
})

const output = document.querySelector('.page__container')
output.innerHTML += `<div>Ціни без скидки: ${productsPrices.join(', ')}</div>`
output.innerHTML += `<div>Ціни із знижкою ${productsPricesWithDiscount.join(', ')}</div>`

function getArrayWithRandomValues(quantityElements) {
	const array = []
	for (let i = 0; i < quantityElements; i++) {
		array.push(getRandomValue(500, 2000))
	}
	return array
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function floorValue(value, quantityDots = 2) {
	const factor = Math.pow(10, quantityDots)
	return Math.floor(value * factor) / factor
}