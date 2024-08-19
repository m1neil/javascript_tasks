'use strict'

// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

const numberDay = parseInt(prompt('Ведіть номер дня:'))
alert(getTypeDay(numberDay))

function getTypeDay(numberDay) {
	let typeDay = ''
	switch (numberDay) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			typeDay = 'робочий'
			break;
		case 6:
		case 7:
			typeDay = 'вихідний'
			break;
	}
	return typeDay ? `День ${typeDay}` : 'Такого номеру дня не існує'
}