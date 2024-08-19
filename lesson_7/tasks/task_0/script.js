'use strict'

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

const numberMonth = parseInt(prompt('Ведіть номер місяця'))
alert(getTimeYear(numberMonth))

function getTimeYear(numberMonth) {
	let timeYear = ''
	switch (numberMonth) {
		case 12:
		case 1:
		case 2:
			timeYear = 'Зима'
			break;
		case 3:
		case 4:
		case 5:
			timeYear = 'Весна'
			break;
		case 6:
		case 7:
		case 8:
			timeYear = 'Літо'
			break;
		case 9:
		case 10:
		case 11:
			timeYear = 'Осінь'
			break;
	}
	return timeYear ? timeYear : 'Не вірний номер місяця'
}
