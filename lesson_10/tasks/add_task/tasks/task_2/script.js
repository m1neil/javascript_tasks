'use strict'

const array = []
for (let i = 0; i < 10; i++) {
	array.push(i % 2)
}

document.querySelector('.page__container')
	.insertAdjacentHTML('beforeend', `<div>${array}</div>`)
