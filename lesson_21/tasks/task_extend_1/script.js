'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const defaultClient = new Client(1, 'John Doe', 5000)
	const goldClient = new GoldenClient(3, 'Alice Johnson', 10000, 2000, 5)
	const container = document.querySelector('.page__container')

	container.insertAdjacentHTML('beforeend', `<div>${defaultClient}</div>`)
	container.insertAdjacentHTML('beforeend', `<div>${goldClient}</div>`)
}

class Client {
	constructor(id, clientName, amountMoney) {
		this.id = id
		this.clientName = clientName
		this.amountMoney = amountMoney
	}

	addMoney(addAmountMoney) {
		this.isCorrectValue(addAmountMoney)
		this.amountMoney += addAmountMoney
	}

	withdrawingMoney(amountMoney) {
		this.isCorrectValue(amountMoney)
		if (amountMoney > this.amountMoney)
			throw new RangeError("Not enough money on an account!");
		this.amountMoney -= amountMoney
	}

	isCorrectValue(value) {
		if (value < 0)
			throw new RangeError('The amount cannot be negative!')
		return true
	}

	toString() {
		return `Name: ${this.clientName}, amount money ${this.amountMoney}$`
	}
}

class GoldenClient extends Client {
	constructor(id, clientName, amountMoney, limitCreditMoney, percentForUseCreditMoney) {
		super(id, clientName, amountMoney)
		this.limitCreditMoney = limitCreditMoney
		this.percentForUseCreditMoney = percentForUseCreditMoney
	}

	get SumMoneyForUseCredit() {
		return this.amountMoney * this.percentForUseCreditMoney / 100
	}

	getSumForUseCreditMoney() {
		return this.percentForUseCreditMoney === 0 ? 'Ви не оформлювали кредит' : this.SumMoneyForUseCredit
	}

	toString() {
		return `${super.toString()}, кредитний ліміт: ${this.limitCreditMoney}$, процентная ставка: ${this.percentForUseCreditMoney} `
	}
}

