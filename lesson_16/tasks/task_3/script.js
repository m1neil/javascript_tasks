'use strict'

// .page__container

class Company {
	#dateRegistration
	#services
	#branchAddresses

	constructor(initName = 'unset', initDateRegistration = {}, initServices = [], initBranchAddresses = []) {
		this.name = initName
		this.DateRegistration = initDateRegistration
		this.Services = initServices
		this.BranchAddresses = initBranchAddresses
	}

	// set
	set DateRegistration(newDateRegistration) {
		if (typeof newDateRegistration !== 'object' || Array.isArray(newDateRegistration) || !newDateRegistration)
			throw new Error('Невірні дані! Очікується об`єкт з полями: місяць та рік реєстрації')

		this.#dateRegistration = newDateRegistration
	}

	set Services(newServices) {
		if (!Array.isArray(newServices))
			throw new Error('Невірні дані! Очікується масив з об`єкти!')

		this.#services = newServices
	}

	set BranchAddresses(newBranchAddresses) {
		if (!Array.isArray(newBranchAddresses))
			throw new Error('Невірні дані! Очікується масив з об`єкти!')

		this.#branchAddresses = newBranchAddresses
	}

	// get
	get DateRegistration() {
		return this.#dateRegistration
	}

	get Services() {
		return this.#services
	}

	get BranchAddresses() {
		return this.#branchAddresses
	}

	// methods
	getAgeCompany(currentYear = 2024) {
		if (currentYear < this.#dateRegistration.year)
			throw new Error('Вказано не коректний поточний рік!')
		return currentYear - this.#dateRegistration.year
	}

	getAllBranchesCompanyForCity(searchCity) {
		if (!searchCity) throw new Error('Не вказано місто!')
		searchCity = searchCity.toLowerCase()
		return this.#branchAddresses.filter(({ city }) => city.toLowerCase() === searchCity)
	}

	getServicesForSumMoneyTermExecution(filterPrice = 0, filterTermExecutionWeeks = 0) {
		return this.#services.filter(({ price, termExecutionWeeks }) => {
			return price <= filterPrice && termExecutionWeeks <= filterTermExecutionWeeks
		})
	}

	printBranchesCompanyForCity(output, filterCity) {
		if (!output) throw new Error('Не вказано куди виводити інформацію!')

		const filterBranches = filterCity ?
			this.getAllBranchesCompanyForCity(filterCity) :
			this.#branchAddresses

		const ol = document.createElement('ol')
		ol.classList.add('list-page')
		filterBranches.forEach(({ country, city, street, numberHouse }) => {
			ol.insertAdjacentHTML('beforeend',
				`<li class="list-page__item">${country}, ${city}, ${street}, ${numberHouse}</li>`)
		})
		output.append(ol)
	}

	printAvailableServices(output, filterPrice, filterTermExecutionWeeks) {
		if (!output) throw new Error('Не вказано куди виводити інформацію!')
		const filterServices = filterPrice && filterTermExecutionWeeks ?
			this.getServicesForSumMoneyTermExecution(filterPrice, filterTermExecutionWeeks) :
			this.#services

		const ul = document.createElement('ul')
		ul.classList.add('list')
		filterServices.forEach(({ name, price, termExecutionWeeks }) => {
			ul.insertAdjacentHTML('beforeend',
				`<li class="list__item">Назва послуги: ${name}, ціна: ${price} грн, час виконання ${termExecutionWeeks} тж</li>`)
		})
		output.append(ul)
	}
}

const dateRegistration = {
	month: 8,
	year: 2020
}

const initServices = [
	{
		name: 'Розробка веб-сайтів',
		price: 5000,
		termExecutionWeeks: 4
	},
	{
		name: 'SEO-оптимізація',
		price: 3000,
		termExecutionWeeks: 2
	},
	{
		name: 'Технічна підтримка',
		price: 2000,
		termExecutionWeeks: 20
	}
]

const branchAddresses = [
	{
		country: 'Україна',
		city: 'Київ',
		street: 'Хрещатик',
		numberHouse: 10
	},
	{
		country: 'Україна',
		city: 'Харків',
		street: 'Сумська',
		numberHouse: 25
	},
	{
		country: 'Україна',
		city: 'Львів',
		street: 'Городоцька',
		numberHouse: 50
	}
]

const output = document.querySelector('.page__container')

try {
	const technoWorld = new Company('ТехноСвіт', dateRegistration, initServices, branchAddresses)
	output.insertAdjacentHTML('beforeend', `<div>Років компанії: ${technoWorld.getAgeCompany()}</div>`)
	technoWorld.printBranchesCompanyForCity(output)
	technoWorld.printAvailableServices(output)
} catch (error) {
	output.insertAdjacentHTML('beforeend', `<div class="info">${error.message}</div>`)
	console.error(error)
}

