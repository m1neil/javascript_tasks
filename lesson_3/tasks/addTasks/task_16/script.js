'use strict'

const numberMonth = parseInt(prompt('Ведіть номер місяця: ', '6'))
const numberPastMonths = parseInt(prompt('Ведіть кількість минулих місяців:', '2'))

const result = (numberMonth + numberPastMonths) % 12 + 1
const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>Через ${numberPastMonths} місяців буде місяць ${getNameMonth(result)}</div>`)

function getNameMonth(numberMonth) {
	switch (numberMonth) {
		case 1:
			return 'Січень'
		case 2:
			return 'Лютий'
		case 3:
			return 'Березень'
		case 4:
			return 'Квітень'
		case 5:
			return 'Травень'
		case 6:
			return 'Червень'
		case 7:
			return 'Липень'
		case 8:
			return 'Серпень'
		case 9:
			return 'Вересень'
		case 10:
			return 'Жовтень'
		case 11:
			return 'Листопад'
		case 12:
			return 'Грудень'
	}
}