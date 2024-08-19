'use strict'

const quantitySquares = parseInt(prompt('Ведіть кількість квадратів', '5'))
const randomPositionShip = Math.floor(Math.random() * (quantitySquares - 1 + 1) + 1)

const firstShot = parseInt(prompt(`Ведіть квадрат в який будете стріляти (квадрати від ${1} до ${quantitySquares}):`, '5'))

const noticeVictory = '<div class="victory">Корабель втоплено</div>'
const noticeDamage = 'Корабель пошкоджено'
const noticeMiss = 'Ваш постріл не влучив в ціль'
const noticeMistake =
	`<div class="info">Ви робити постріл поза зоною клітинок, клітинки від ${1} до ${quantitySquares}</div>`
const noticeLose = '<div class="info">Ви програли бо не змогли втопити корабель за два постріли</div>'

const output = document.querySelector('.page__container')

if (firstShot > 0 && firstShot <= quantitySquares) {
	if (firstShot === randomPositionShip)
		output.insertAdjacentHTML('beforeend', noticeVictory)
	else {
		if (
			firstShot + 1 === randomPositionShip ||
			firstShot - 1 === randomPositionShip
		)
			alert(noticeDamage)
		else
			alert(noticeMiss)

		const secondShot =
			parseInt(prompt(`Ведіть квадрат в який будете стріляти (квадрати від ${1} до ${quantitySquares}):`, '4'))

		if (secondShot === randomPositionShip)
			output.insertAdjacentHTML('beforeend', noticeVictory)
		else
			output.insertAdjacentHTML('beforeend', noticeLose)
	} 4
} else
	output.insertAdjacentHTML('beforeend', noticeMistake)



