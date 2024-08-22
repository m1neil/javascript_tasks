'use strict'

if (confirm('Розпочати тестування:')) {
	const gameField = document.querySelector('.page__game')
	const positionShip = Math.floor(Math.random() * 25) + 1

	for (let i = 1; i <= 25; i++) {
		gameField.insertAdjacentHTML('beforeend', `<input type="checkbox" id="${i}">`)
	}

	gameField.addEventListener('click', shotOnField)

	function shotOnField(e) {
		const targetElement = e.target
		if (targetElement.tagName === 'INPUT') {
			if (parseInt(targetElement.id) === positionShip) {
				targetElement.classList.add('--green')
				gameField.removeEventListener('click', shotOnField)
				alert('Ви влучили')
			}
			else {
				targetElement.classList.add('--miss')
				targetElement.disabled = true
			}
		}
	}
}