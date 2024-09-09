'use strict'


const array = new Array(10)
array.fill(0, 1, 9)
	.fill(1, 0, 1)
	.fill(1, array.length - 1)

document.querySelector('.page__container')
	.insertAdjacentHTML('beforeend', `<div>Масив: ${array}</div>`)