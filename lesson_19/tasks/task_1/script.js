'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	document.addEventListener('click', documentActions)
	const container = document.querySelector('.page__container')
	container.append(createList())
}

function documentActions(e) {
	const target = e.target

	if (target.closest('.clickable__item')) {
		let element = target.closest('.clickable__item')
		if (
			element.nextElementSibling &&
			!element.nextElementSibling.classList.contains('clickable__item--red')
		) {
			while (element.nextElementSibling) {
				element = element.nextElementSibling
				element.classList.add('clickable__item--red')
			}
		}
		element = target.closest('.clickable__item')
		while (element.previousElementSibling) {
			if (!element.classList.contains('clickable__item--red'))
				break
			element.classList.remove('clickable__item--red')
			element = element.previousElementSibling
		}
	}
}

function createList(amountItems = 10, content = 'Hello!', tag = 'div', className = 'clickable') {
	const list = document.createElement('div')
	list.className = className
	for (let indexEl = 0; indexEl < amountItems; indexEl++) {
		const element = document.createElement(tag)
		element.className = `${className}__item`
		element.textContent = content
		list.append(element)
	}
	return list
}