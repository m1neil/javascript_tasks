'use strict'

const numberMonth = parseInt(prompt('Ведіть номер місяця'))
alert(`Місяць - ${getNameMonth(numberMonth)}`)

function getNameMonth(numberMonth) {
	let nameMonth = ''
	switch (numberMonth) {
		case 1:
			nameMonth = 'Січень'
			break
		case 2:
			nameMonth = 'Лютий'
			break
		case 3:
			nameMonth = 'Березень'
			break
		case 4:
			nameMonth = 'Квітень'
			break
		case 5:
			nameMonth = 'Травень'
			break
		case 6:
			nameMonth = 'Червень'
			break
		case 7:
			nameMonth = 'Липень'
			break
		case 8:
			nameMonth = 'Серпень'
			break
		case 9:
			nameMonth = 'Вересень'
			break
		case 10:
			nameMonth = 'Жовтень'
			break
		case 11:
			nameMonth = 'Листопад'
			break
		case 12:
			nameMonth = 'Грудень'
			break
	}
	return nameMonth ? nameMonth : 'Такого номера місяця не існує'
}