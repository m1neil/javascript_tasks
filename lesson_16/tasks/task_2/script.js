'use strict'

// .page__container

/*
	+ Створити клас TMoney для роботи з грошовими сумами. 
	+ Сума повинна зберігатися у вигляді доларового еквіваленту.
	+ Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях,
	+ Визначення курсу долара, при якому сума у гривнях збільшиться на 100. 
	+ Курс долара зберігати в окремому полі. 
*/

class TMoney {
	#sumMoneyInUSD
	#rateUSD
	#rateUSDIncrease

	constructor(initSumMoneyInUAH = 0, initRateUSD = 5, initRateUSDIncrease = 35) {
		this.RateUSD = initRateUSD
		this.RateUSDIncrease = initRateUSDIncrease
		this.SumMoneyInUSD = initSumMoneyInUAH
	}

	// get
	get SumMoneyInUSD() {
		return this.#sumMoneyInUSD
	}

	get RateUSD() {
		return this.#rateUSD
	}

	get RateUSDIncrease() {
		return this.#rateUSDIncrease
	}

	// set
	set SumMoneyInUSD(newSumMoneyInUAH) {
		if (newSumMoneyInUAH < 0)
			throw new Error('Грошова сума, повинна бути більше 0')

		this.#sumMoneyInUSD = this.#rateUSD === this.#rateUSDIncrease ?
			this.convertUAHToUSD(newSumMoneyInUAH + 100) :
			this.convertUAHToUSD(newSumMoneyInUAH)
	}

	set RateUSD(newRateUSD) {
		if (newRateUSD <= 0)
			throw new Error('Не коректно вказаний курс доллару!')
		this.#rateUSD = newRateUSD
	}

	set RateUSDIncrease(newRateUSDIncrease) {
		if (newRateUSDIncrease <= 0)
			throw new Error('Не вірно вказаний курс долару, при якому буде додано 100 грн до депозиту!')
		this.#rateUSDIncrease = newRateUSDIncrease
	}

	// methods
	withdrawMoney(withdrawMoneyInUAH) {
		if (withdrawMoneyInUAH <= 0)
			throw new Error('Сума, що знімається, повинна бути більше 0!')
		const withDrawMoneyInUSD = this.convertUAHToUSD(withdrawMoneyInUAH)
		if (withDrawMoneyInUSD > this.#sumMoneyInUSD)
			throw new Error('На рахунку не достатньо грошей!')
		this.#sumMoneyInUSD -= withDrawMoneyInUSD
	}

	putMoney(depositMoneyInUAH) {
		if (depositMoneyInUAH <= 0)
			throw new Error('Кількість депозитних грошей, повинна бути більше 0!')
		this.#sumMoneyInUSD += this.convertUAHToUSD(depositMoneyInUAH)
	}

	convertUAHToUSD(moneyInUAH) {
		return moneyInUAH / this.#rateUSD
	}

	toString() {
		return `Сума на рахунку: ${this.#sumMoneyInUSD}$, курс долару: ${this.#rateUSD}, курс долару при якому нарахуються додаткові 100 грн на рахунок ${this.#rateUSDIncrease}`
	}
}

const output = document.querySelector('.page__container');

try {
	const bank = new TMoney(1200, 35)
	bank.withdrawMoney(1300)
	bank.putMoney(100)
	output.insertAdjacentHTML('beforeend', `<div>${bank}</div>`)
} catch (error) {
	output.insertAdjacentHTML('beforeend', `<div class="info">Сталася помилка: ${error.message}</div>`)
	console.error(error.message)
}