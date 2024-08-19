'use strict'

let rabbitPositionRow = 0,
	rabbitPositionColumn = 0

let userScore = 0

let pasteRow = parseInt(prompt('Встановити пастку, номер рядка (0, 1):'))
let pasteColumn = parseInt(prompt('Встановити пастку, номер колонки рядка (0, 1):'))

rabbitPositionRow = Math.floor(Math.random() * (2))
rabbitPositionColumn = Math.floor(Math.random() * (2))

if (pasteRow === rabbitPositionRow && pasteColumn === rabbitPositionColumn) {
	alert('спіймав');
	userScore += 100
} else {
	alert('Ви не спіймали зайця, спробуйте ще раз')

	rabbitPositionRow = Math.floor(Math.random() * (2))
	rabbitPositionColumn = Math.floor(Math.random() * (2))
	pasteRow = parseInt(prompt('Встановити пастку, номер рядка (0, 1):'))
	pasteColumn = parseInt(prompt('Встановити пастку, номер колонки рядка (0, 1):'))

	if (pasteRow === rabbitPositionRow && pasteColumn === rabbitPositionColumn) {
		alert('спіймав');
		userScore += 50
	} else
		alert('Ви не спіймали зайця і програли')
}