'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const cars = [
		{
			model: 'Audi',
			year: 2000,
			price: 7000
		},
		{
			model: 'Opel',
			year: 2004,
			price: 15000
		},
		{
			model: 'Opel',
			year: 2000,
			price: 5000
		},
		{
			model: 'Mersedes',
			year: 2018,
			price: 25000
		},
	]

	const listTransport = new ListTransport(cars)
	listTransport.render('.page__container')
}

class ListTransport {
	
	constructor(cars) {
		this.cars = cars
		this.filter = {
			model: '',
			year: 0
		}
	}

	changeFilter(select) {
		const name = select.name

		this.filter[name] = name === 'model' ?
			select.value :
			parseInt(select.value)

		this.fillTransportsList()
	}

	createSelect(field, id, name, placeholder) {
		const select = document.createElement('select')
		select.id = id
		select.name = name
		select.className = 'search-filter__select'
		select.addEventListener('change', this.changeFilter.bind(this, select))

		const optionPlaceholder = document.createElement('option')
		optionPlaceholder.textContent = placeholder
		optionPlaceholder.setAttribute('selected', '')
		optionPlaceholder.setAttribute('disabled', '')
		select.append(optionPlaceholder)

		let listFields = this.cars.map(car => car[field])
			.filter((field, index, arr) =>
				arr.indexOf(field) === index
			)

		listFields.forEach(field => {
			const option = document.createElement('option')
			option.value = field
			option.textContent = field
			select.append(option)
		})

		return select
	}

	createTransportList() {
		const transportList = document.createElement('ul')
		transportList.className = 'search-filter__transports'
		this.transportList = transportList
		this.fillTransportsList()
	}

	fillTransportsList() {
		if (this.transportList.children.length)
			this.transportList.innerHTML = ''

		let filterCars = this.cars

		for (const key in this.filter) {
			if (this.filter[key])
				filterCars = this.filterArrayByFieldName(filterCars, key)
		}

		filterCars.forEach(({ model, year, price }) => {
			const itemList = document.createElement('li')
			itemList.className = 'search-filter__item'
			itemList.textContent = `${model} - ${year}р. - ${price}$`
			this.transportList.append(itemList)
		})
	}

	filterArrayByFieldName(array, field) {
		return field ?
			array.filter(car => car[field] === this.filter[field]) :
			array
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element by selector ${selectorContainer}`)

		const wrapper = document.createElement('div')
		wrapper.className = 'search-filter'

		const selects = document.createElement('div')
		selects.className = 'search-filter__selects'

		const selectModel = this.createSelect('model', 'car-model', 'model', 'Модель')
		const selectYear = this.createSelect('year', 'car-year', 'year', 'Рік')
		selects.append(selectModel)
		selects.append(selectYear)

		wrapper.append(selects)

		this.createTransportList()
		wrapper.append(this.transportList)
		container.append(wrapper)
	}
} 