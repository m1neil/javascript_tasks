'use strict'

const quantitySquares = parseInt(prompt('Ведіть кількість квадратів', '5'))
let positionShip = Math.floor(Math.random() * (quantitySquares - 1 + 1) + 1)

const firstShot = parseInt(prompt(`Ведіть квадрат в який будете стріляти (квадрати від ${1} до ${quantitySquares}):`, '5'))

const noticeVictory = '<div class="victory">Корабель втоплено</div>'
const noticeDamage = 'Корабель пошкоджено'
const noticeMiss = 'Ваш постріл не влучив в ціль'
const noticeMistake =
	`<div class="info">Ви робити постріл поза зоною клітинок, клітинки від ${1} до ${quantitySquares}</div>`
const noticeLose = '<div class="info">Ви програли бо не змогли втопити корабель за два постріли</div>'

const output = document.querySelector('.page__container')

if (firstShot > 0 && firstShot <= quantitySquares) {
	if (firstShot === positionShip)
		output.insertAdjacentHTML('beforeend', noticeVictory)
	else {
		if (
			firstShot + 1 === positionShip ||
			firstShot - 1 === positionShip
		)
			alert(noticeDamage)
		else
			alert(noticeMiss)

		const isMoveRight = Boolean(Math.round(Math.random()))
		if (isMoveRight && positionShip < quantitySquares ||
			!isMoveRight && positionShip === 1
		) positionShip++
		else positionShip--

		const secondShot =
			parseInt(prompt(`Ведіть квадрат в який будете стріляти (квадрати від ${1} до ${quantitySquares}):`, '5'))

		if (secondShot === positionShip)
			output.insertAdjacentHTML('beforeend', noticeVictory)
		else
			output.insertAdjacentHTML('beforeend', noticeLose)
	}
} else
	output.insertAdjacentHTML('beforeend', noticeMistake)


