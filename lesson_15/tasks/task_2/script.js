'use strict'

// 

const auto = {
	brand: 'Porsche',
	sizeTank: 125,
	quantityLitersAvailable: 65,
	quantitySeats: 4,
	quantityPassengers: 2,

	addLiters(quantityLiters) {
		this.quantityLitersAvailable += quantityLiters
		if (this.quantityLitersAvailable > this.sizeTank)
			this.quantityLitersAvailable = this.sizeTank
	},

	printQuantityPassengers(output, tag = 'div') {
		if (output)
			output.insertAdjacentHTML('beforeend',
				`<${tag}>Кількість пасажирів: ${this.quantityPassengers}</${tag}>`)
	},

	addPassengers(quantityPassengers) {
		this.quantityPassengers += quantityPassengers
	},

	clearPassenger() {
		this.quantityPassengers = 0
	},

	toString() {
		return `Характеристики: Модель: ${this.brand};<br>
		Розмір баку: ${this.sizeTank};<br>
		Кількість наявних літрів: ${this.quantityLitersAvailable};<br>
		Кількість пасажирських місць: ${this.quantitySeats};<br>
		Кількість пасажирів: ${this.quantityPassengers};`
	}
}

document.querySelector('.page__container').insertAdjacentHTML('beforeend', `<div>${auto}</div>`)