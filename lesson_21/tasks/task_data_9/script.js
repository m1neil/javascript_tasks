'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const vacation = new MaternityLeave()
	vacation.render('.page__container')
}


class MaternityLeave {
	constructor() {
		this.vacation = JSON.parse(localStorage.getItem('vacation'))
	}

	createInputDate() {
		const input = document.createElement('input')
		input.type = 'date'
		input.name = 'date-vacation'
		input.addEventListener('change', this.toggleBlockButton.bind(this))
		return input
	}

	createButton() {
		const button = document.createElement('button')
		button.type = 'button'
		button.className = 'vacation__button button'
		button.textContent = 'Встановити відпустку'
		button.addEventListener('click', this.setVacation.bind(this))
		return button
	}

	toggleBlockButton() {
		if (!this.input.value)
			this.button.setAttribute('disabled', true)
		else
			this.button.removeAttribute('disabled')
	}
	setVacation() {
		const date = this.input.value
		this.input.value = ''
		this.toggleBlockButton()

		const startVacation = new Date(date)
		const endVacation = new Date(date)
		endVacation.setHours(23)
		endVacation.setMinutes(59)
		endVacation.setDate(endVacation.getDate() + 200)

		const infoVacation = {
			start: startVacation,
			end: endVacation
		}

		localStorage.setItem('vacation', JSON.stringify(infoVacation))
		this.vacation = infoVacation
		this.analysisVocation()
	}

	createLabel() {
		const label = document.createElement('label')
		label.textContent = 'Дата початку відпустки:'
		label.className = 'vacation__label'
		return label
	}

	analysisVocation() {
		const startVacation = new Date(this.vacation.start)
		const endVacation = new Date(this.vacation.end)
		const currentDate = Date.now()

		let statusVocation = ''

		if (currentDate < startVacation) {
			statusVocation = 'Відпустка ще не почалась'
		} else if (currentDate >= startVacation && currentDate <= endVacation) {
			statusVocation = 'Відпустка вже іде'
			this.input.setAttribute('disabled', true)
			console.log();
		} else {
			statusVocation = 'Відпустка скінчилась'
			this.input.removeAttribute('disabled')
		}

		this.infoAboutVocation.textContent = statusVocation
	}

	render(selectorContainer) {
		const wrapper = document.createElement('div')
		wrapper.className = 'vacation'

		if (selectorContainer) {
			const container = document.querySelector(selectorContainer)
			if (!container)
				throw new Error(`Not found element by selector - ${selectorContainer}`)
			container.append(wrapper)
		}

		const label = this.createLabel()
		this.input = this.createInputDate()
		label.append(this.input)
		wrapper.append(label)

		const button = this.createButton()
		this.button = button
		this.toggleBlockButton()
		wrapper.append(button)

		const infoAboutVocation = document.createElement('div')
		infoAboutVocation.className = 'vocation__info'
		infoAboutVocation.textContent = 'Відпустка не встановлена'
		this.infoAboutVocation = infoAboutVocation

		if (this.vacation) this.analysisVocation()

		wrapper.append(infoAboutVocation)

		return wrapper
	}
}