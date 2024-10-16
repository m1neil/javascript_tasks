'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.page__container')
	for (let indexList = 1; indexList <= 5; indexList++) {
		const title = document.createElement('h2')
		title.textContent = `Список ${indexList}`
		container.append(title)
		container.append(createNumericList())
	}
	const button = document.createElement('button')
	button.className = 'button'
	button.textContent = 'Помітити списки із парною кількість елементів'
	button.type = 'button'
	button.addEventListener('click', markListWithEvenElements.bind(null, '.some-list'))
	container.append(button)
}

function createNumericList() {
	const list = document.createElement('ol')
	list.className = 'some-list'
	const amountElements = getRandomValue(1, 10)
	for (let indexEl = 0; indexEl < amountElements; indexEl++) {
		const li = document.createElement('li')
		li.className = 'some-list__item'
		li.textContent = getRandomValue(1, 100)
		list.append(li)
	}
	return list
}


function getRandomValue(minValue, maxValue) {
	return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
}

function markListWithEvenElements(selectorList) {
	const allLists = document.querySelectorAll(selectorList)
	if (!allLists.length) return
	allLists.forEach(list => {
		const quantityChildren = list.children.length
		const className = quantityChildren % 2 === 0 ? '--even' : '--odd'
		list.classList.add(className)
	})
}