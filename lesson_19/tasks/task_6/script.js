'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const athletes = ['John Depp', 'Sara Wik', 'Den Miro', 'Alan Woo']
	const selectedAthletes = ['Olga Sich', 'Ivan Hal']
	const manager = new ManagerAthletes(athletes, selectedAthletes)
	manager.render('.page__container')
}

class List {
	constructor(initTitle, athletesList, actionType = 'add') {
		this.title = initTitle
		this.athletesList = athletesList
		this.actionType = actionType
	}

	createItemList(nameAthlete) {
		const li = document.createElement('li')
		li.className = 'list-athletes__item'
		li.textContent = nameAthlete

		const button = document.createElement('button')
		button.type = 'button'
		button.className = 'list-athletes__button'
		const buttonModify = this.actionType === 'add' ? '--arrow-right' : '--arrow-left'
		button.classList.add(buttonModify)
		button.addEventListener('click', e => this.onClick(e.target, this.actionType))
		li.append(button)

		return li
	}

	onClick(target, actionType) {
		const clickEvent = new CustomEvent('move_element', {
			detail: { actionType },
			bubbles: true
		})
		target.dispatchEvent(clickEvent)
	}

	updateList() {
		this.list.innerHTML = ''
		this.athletesList.forEach(athlete => {
			this.list.append(this.createItemList(athlete))
		})
	}

	cutItem(name) {
		const index = this.athletesList.indexOf(name)
		const cutElement = this.athletesList.splice(index, 1)
		this.updateList()
		return cutElement
	}

	insertItem(name) {
		this.athletesList.push(name)
		this.updateList()
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element! selector - ${selectorContainer}`)

		const wrapperList = document.createElement('div')
		wrapperList.className = 'athletes'

		const title = document.createElement('h2')
		title.className = 'athletes__title'
		title.textContent = this.title
		wrapperList.append(title)

		this.list = document.createElement('ul')
		this.list.className = 'athletes__list list-athletes'
		this.updateList()
		wrapperList.append(this.list)

		container.append(wrapperList)
	}
}

class ManagerAthletes {
	constructor(generalList, selectedList, cssClass = 'lists') {
		this.generalList = new List('Загальний список', generalList)
		this.selectedList = new List('Обрані для змагання', selectedList, 'remove')
		this.cssClass = cssClass
	}

	onMove(e) {
		const target = e.target

		if (e.detail.actionType === 'add') {
			const nameAthlete = target.closest('.list-athletes__item').textContent
			this.cutElementThenInsert(nameAthlete, this.generalList, this.selectedList)
		} else if (e.detail.actionType === 'remove') {
			const nameAthlete = target.closest('.list-athletes__item').textContent
			this.cutElementThenInsert(nameAthlete, this.selectedList, this.generalList)
		}
	}

	cutElementThenInsert(element, listFromCut, listWhereInsert) {
		const cutElement = listFromCut.cutItem(element)
		listWhereInsert.insertItem(cutElement)
	}

	render(selector) {
		const container = document.querySelector(selector)
		if (!container) throw new Error('Not found an element!')
		const wrapper = document.createElement('div')
		wrapper.className = this.cssClass
		wrapper.addEventListener('move_element', this.onMove.bind(this))
		container.append(wrapper)
		this.generalList.render(`.${this.cssClass}`)
		this.selectedList.render(`.${this.cssClass}`)
	}
}