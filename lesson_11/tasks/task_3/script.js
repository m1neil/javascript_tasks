'use strict'

if (confirm('Розпочати тестування')) {
	const field = []
	for (let row = 0; row < 7; row++) {
		field.push(new Array(6).fill(0, 0))
	}

	let quantityShips = 5
	let quantityShells = parseInt(prompt('Ведіть кількість снарядів: ', '20'))

	for (let numberShip = 0; numberShip < 6;) {
		const positionX = getRandomValue(0, 6)
		const positionY = getRandomValue(0, 6)
		if (field[positionY][positionX] !== 1) {
			field[positionY][positionX] = 1
			numberShip++
		}
	}

	const gameField = document.createElement('div')
	gameField.classList.add('game-field')
	for (let row = 0; row < 6; row++) {
		for (let col = 0; col < 6; col++) {
			const input = document.createElement('input')
			input.type = 'checkbox'
			input.classList.add('cell')
			input.setAttribute('data-x', col)
			input.setAttribute('data-y', row)
			gameField.append(input)
		}
	}

	const output = document.querySelector('.page__container')
	output.append(gameField)
	const shells = document.querySelector('.shells span')
	shells.textContent = quantityShells
	const ships = document.querySelector('.ships span')
	ships.textContent = quantityShips

	gameField.addEventListener('click', makeShot)

	function makeShot(e) {
		const targetElement = e.target
		if (targetElement.tagName !== 'INPUT' ||
			targetElement.classList.contains('--miss') ||
			targetElement.classList.contains('--complete'))
			return

		const positionX = parseInt(targetElement.dataset.x)
		const positionY = parseInt(targetElement.dataset.y)

		if (field[positionY][positionX] === 1) {
			targetElement.classList.add('--complete')
			field[positionY][positionX] = 0
			ships.textContent = --quantityShips
		} else targetElement.classList.add('--miss')

		shells.textContent = --quantityShells

		if (!quantityShips || !quantityShells) {
			gameField.removeEventListener('click', makeShot)
			gameField.classList.add('--end')
			alert('Гра скінчена')
		}
	}

	function getRandomValue(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}

