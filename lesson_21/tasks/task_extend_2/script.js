'use strict'

// .page__container

'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const clients = [
		new Client(1, 'John Doe', 5000),
		new Client(2, 'Jane Smith', 7500),
		new GoldenClient(3, 'Alice Johnson', 10000, 2000, 5),
		new GoldenClient(4, 'Bob Brown', 15000, 3000, 4)
	]

	const bank = new Bank(clients)
	bank.render('.page__container')
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

class Bank {
	constructor(clientsList) {
		this.clientsList = clientsList
		this.currentFilter = null
	}

	getTotalSumAllClients(array = this.clientsList) {
		return array.reduce((prevSum, { amountMoney }) => prevSum + amountMoney, 0)
	}

	installCurrentFilter(filter, target) {
		this.currentFilter = filter
		const activeButton = this.wrapperElement.querySelector('.bank__filter.--active')
		if (activeButton)
			activeButton.classList.remove('--active')
		target.classList.add('--active')
	}

	updateClientsList(filter = 'all', target) {
		if (filter === this.currentFilter)
			return

		if (target)
			this.installCurrentFilter(filter, target)
		this.clientsListElement.innerHTML = ''

		const filterClientsList = this.filteredList()
		filterClientsList.forEach(client => {
			const li = document.createElement('li')
			li.className = 'clients-list__item'
			li.textContent = client
			this.clientsListElement.append(li)
		})

		this.updateTotalSum(filterClientsList)
	}

	updateTotalSum(array) {
		this.totalSumElement.textContent = `Повна сума грошей банку ${this.getTotalSumAllClients(array)}$`
	}

	filteredList() {
		let filteredList
		if (this.currentFilter === 'default') {
			filteredList = this.clientsList.filter(client => client instanceof Client && !client.limitCreditMoney)
		} else if (this.currentFilter === 'gold') {
			filteredList = this.clientsList.filter(client => client instanceof GoldenClient)
		}

		return filteredList ?? this.clientsList
	}

	createNavFilter() {
		const navigation = document.createElement('div')
		navigation.className = 'bank__nav'

		const buttonAllClient = this.createButton('Всі')
		buttonAllClient.classList.add('--active')
		buttonAllClient.addEventListener('click', e => this.updateClientsList('all', e.currentTarget))

		const buttonDefaultClient = this.createButton('Звичайні клієнти')
		buttonDefaultClient.addEventListener('click', e => this.updateClientsList('default', e.currentTarget))

		const buttonGoldClient = this.createButton('Преміум клієнти')
		buttonGoldClient.addEventListener('click', e => this.updateClientsList('gold', e.currentTarget))

		navigation.append(buttonAllClient)
		navigation.append(buttonDefaultClient)
		navigation.append(buttonGoldClient)
		return navigation
	}

	createButton(text) {
		const button = document.createElement('button')
		button.className = 'bank__filter button'
		button.textContent = text
		button.type = 'button'
		return button
	}

	createTotalSum() {
		const totalSumElement = document.createElement('div')
		totalSumElement.className = 'bank__total-sum'
		return totalSumElement
	}

	render(selectorContainer) {
		const wrapper = document.createElement('div')
		wrapper.className = 'bank'
		this.wrapperElement = wrapper

		if (selectorContainer) {
			const container = document.querySelector(selectorContainer)
			if (!container)
				throw new Error(`Not found element by selector - ${selectorContainer}`)
			container.append(wrapper)
		}

		wrapper.append(this.createNavFilter())

		const clientsListElement = document.createElement('ul')
		clientsListElement.className = 'bank__clients clients-list'

		this.totalSumElement = this.createTotalSum()
		this.clientsListElement = clientsListElement
		this.updateClientsList()

		wrapper.append(clientsListElement)
		wrapper.append(this.totalSumElement)

		return wrapper
	}
}