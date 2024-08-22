'use strict'

if (confirm('Розпочати тестування:')) {
	const gameField = document.querySelector('.page__game')

	for (let i = 1; i <= 10; i++) {
		gameField.insertAdjacentHTML('beforeend', `<input type="checkbox" id="${i}">`)
	}

	let positionHare = Math.floor(Math.random() * (10 - 1 + 1) + 1)
	gameField.addEventListener('click', catchHare)

	function catchHare(e) {
		const target = e.target
		if (positionHare === parseInt(target.id)) {
			target.classList.add('--green')
			gameField.removeEventListener('click', catchHare)
		}
		else {
			target.classList.add('--miss')
			setTimeout(() => target.classList.remove('--miss'), 1000);
			const randomValue = Math.floor(Math.random() * (1 - -1 + 1) + -1)
			const sign = randomValue === 0 ? -1 : randomValue
			const newPosition = Math.floor(Math.random() * (3 + 1)) * sign + positionHare
			if (newPosition > 10) positionHare = 10
			else if (newPosition < 1) positionHare = 1
			else positionHare = newPosition
		}
		console.log(positionHare)
	}
}