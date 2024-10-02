'use strict'

/*
	Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.

*/

const shot = {
	field: [0, 0, 1, 0, 0],
	quantityHares: 1,
	setShot(positionShot) {
		positionShot -= 1
		if (this.field[positionShot] === 1) {
			this.field[positionShot] = 'Підстрелений заєць'
			this.quantityHares--
			alert('Ви влучили')
		} else {
			this.field[positionShot] = 'Мимо'
			alert('Мимо')
		}
	},
	toString(separator = ', ') {
		return this.field.join(separator)
	}
}

if (confirm('Розпочати тестування?')) {
	const output = document.querySelector('.page__container');
	while (shot.quantityHares > 0) {
		const positionShot = parseInt(prompt(`Ведіть позицію пострілу від 1 до ${shot.field.length}`))
		shot.setShot(positionShot)
		output.insertAdjacentHTML('beforeend', `<div>Ігрове поле: ${shot}</div>`)
	}
}