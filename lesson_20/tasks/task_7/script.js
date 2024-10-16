'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const names = ['Працівники', 'Іванов І.І', 'Петров П.П', 'Скрипка С.П.', 'Гончаренко Г.О', 'Івась І.І']
	const list = new List(names)
	list.render('.page__container')
}

class List {
	constructor(array) {
		this.arrayList = array
	}

	createSearchField() {
		const container = document.createElement('div')
		container.className = 'name-list__search'

		const label = document.createElement('label')
		label.for = 'search'
		label.className = 'name-list__label'
		container.append(label)

		const input = document.createElement('input')
		input.type = 'text'
		input.className = 'name-list__input'
		input.placeholder = 'Я шукаю...'
		input.addEventListener('input', this.filterItemsList.bind(this))
		container.append(input)

		return container
	}

	filterItemsList(e) {
		const value = e.target.value.toLowerCase()
		const filteredList = this.arrayList.filter(item => item.toLowerCase().includes(value))
		this.updateList(filteredList)
	}


	updateList(array) {
		if (this.list.children.length)
			this.list.innerHTML = ''

		array.forEach(name => {
			const li = document.createElement('li')
			li.className = 'content-name-list__item'
			li.textContent = name
			this.list.append(li)
		})
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element by selector - ${selectorContainer}`);

		const wrapper = document.createElement('div')
		wrapper.className = 'name-list'

		wrapper.append(this.createSearchField())

		const list = document.createElement('ul')
		list.className = 'name-list__content content-name-list'
		this.list = list
		this.updateList(this.arrayList)
		wrapper.append(list)

		container.append(wrapper)
	}
}