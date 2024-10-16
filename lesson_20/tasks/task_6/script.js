'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const auto = [
		'Toyota Camry',
		'BMW X5',
		'Audi A4',
		'Honda Civic',
		'Mercedes-Benz C-Class',
	]

	const list = createList(auto)
	list.addEventListener('click', toggleMarkElement)
	const container = document.querySelector('.page__container')
	container.append(list)
}

function toggleMarkElement(e) {
	const target = e.target

	if (target.closest('.list__button')) {
		const currentButton = target.closest('.list__button')
		currentButton.classList.toggle('--active')
	}
}

function createList(array) {
	const list = document.createElement('ul')
	list.className = 'list'

	array.forEach(item => {
		const li = document.createElement('li')
		li.className = 'list__item'

		const button = document.createElement('button')
		button.className = 'list__button'
		button.type = 'button'
		button.textContent = item
		li.append(button)

		list.append(li)
	})

	return list
}
