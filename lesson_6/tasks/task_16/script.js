'use strict'

if (confirm('Розпочати тестування:')) {
	const gameField = document.querySelector('.page__game')
	const interfaceHealth = document.querySelector('.page__health span')
	const interfaceShells = document.querySelector('.page__shells span')
	for (let i = 1; i <= 10; i++) {
		gameField.insertAdjacentHTML('beforeend', `<input type="checkbox" id="${i}">`)
	}
	let quantityShells = parseInt(prompt('Ведіть кількість снарядів:'))
	let positionTank = Math.floor(Math.random() * (10 - 1 + 1) + 1)
	let healthTank = 100
	interfaceHealth.textContent = healthTank
	interfaceShells.textContent = quantityShells
	gameField.addEventListener('click', shotInTank)

	function shotInTank(e) {
		const target = e.target
		interfaceShells.textContent = --quantityShells
		if (parseInt(target.id) === positionTank) {
			target.classList.add('--green')
			setTimeout(() => target.classList.remove('--green'), 1000);
			healthTank -= 30
			interfaceHealth.textContent = healthTank > 0 ? healthTank : 0
		} else {
			target.classList.add('--miss')
			setTimeout(() => target.classList.remove('--miss'), 1000);
		}

		if (healthTank <= 0 || quantityShells === 0)
			gameField.removeEventListener('click', shotInTank)
		else {
			const newPosition = Math.floor(Math.random() * (1 - -1 + 1) + -1) + positionTank
			if (newPosition < 1)
				positionTank = 10
			else if (newPosition > 10)
				positionTank = 1
			else
				positionTank = newPosition
		}
	}
}