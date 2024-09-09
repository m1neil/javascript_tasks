'use strict'

const gameField = document.querySelector('.page__game')
const interfaceHealth = document.querySelector('.page__health span')
const interfaceShells = document.querySelector('.page__shells span')
const interfaceCanon = document.querySelector('.page__cannon span')
const startButton = document.querySelector('.play')
console.dir(startButton)
startButton.addEventListener('click', game)

function game() {
	startButton.disabled = true
	for (let i = 1; i <= 10; i++) {
		gameField.insertAdjacentHTML('beforeend', `<input type="checkbox" data-id="${i}">`)
	}
	let quantityShells = parseInt(prompt('Ведіть кількість снарядів:'))
	let healthTank = 100, healthCannon = 100
	let positionTank = Math.floor(Math.random() * (10 - 1 + 1) + 1)
	let positionCannon
	do {
		positionCannon = Math.floor(Math.random() * (10 - 1 + 1) + 1)
	} while (positionCannon === positionTank);


	interfaceHealth.textContent = healthTank
	interfaceCanon.textContent = healthCannon
	interfaceShells.textContent = quantityShells
	gameField.addEventListener('click', shotInTank)

	let isSTepComputer = false

	function shotInTank(e) {
		if (isSTepComputer) return
		const target = e.target
		interfaceShells.textContent = --quantityShells
		if (parseInt(target.dataset.id) === positionTank) {
			target.classList.add('--green')
			setTimeout(() => target.classList.remove('--green'), 1000);
			healthTank -= 30
			interfaceHealth.textContent = healthTank > 0 ? healthTank : 0
		} else {
			target.classList.add('--miss')
			setTimeout(() => target.classList.remove('--miss'), 1000);
		}

		if (healthTank > 0 && quantityShells > 0 && healthCannon > 0) {
			let positionShotTank
			do {
				positionShotTank = Math.floor(Math.random() * (10 - 1 + 1) + 1)
			} while (positionShotTank === positionTank);

			const input = gameField.querySelector(`[data-id="${positionShotTank}"]`)

			isSTepComputer = true
			setTimeout(() => {
				isSTepComputer = false
			}, 2000);

			setTimeout(() => {
				if (positionShotTank === positionCannon) {
					healthCannon -= 30
					input.classList.add('--yellow')
					setTimeout(() => input.classList.remove('--yellow'), 1000);
					interfaceCanon.textContent = healthCannon > 0 ? healthCannon : 0
				} else {
					input.classList.add('--blue')
					setTimeout(() => input.classList.remove('--blue'), 1000);
				}
			}, 1000);
		}

		if (healthTank <= 0 || quantityShells === 0 || healthCannon <= 0) {
			gameField.removeEventListener('click', shotInTank)
			startButton.disabled = false
			if (healthTank <= 0) {
				alert('Перемога!')
			} else if (quantityShells <= 0 || healthCannon <= 0)
				alert('Ви програли!')
		} else {
			let newPosition = Math.floor(Math.random() * (1 - -1 + 1) + -1) + positionTank
			if (newPosition === positionCannon)
				newPosition++

			if (newPosition < 1)
				positionTank = 10
			else if (newPosition > 10)
				positionTank = 1
			else
				positionTank = newPosition
		}
	}



}
