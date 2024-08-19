'use strict'

const out = document.querySelector('.page__container')
const quantityListItems = parseInt(prompt('Кількість пунктів списку'))

if (quantityListItems > 0) {
	const ul = document.createElement('ul')
	ul.classList.add('list')
	for (let i = 0; i < quantityListItems; i++) {
		const randomValue = Math.floor(Math.random() * 100 + 1)
		ul.innerHTML += `<li class="list__item">${randomValue}</li>`
	}
	out.insertAdjacentElement('beforeend', ul)
} else
	out.insertAdjacentHTML('beforeend', '<div class="info">Кількість пунктів повинна бути більше 0</div>')



