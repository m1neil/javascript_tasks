'use strict'

// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
if (confirm('Розпочати тестування?')) {
	const day = parseInt(prompt('Ведіть номер день: ', 11))
	const month = parseInt(prompt('Ведіть номер місяця: ', 9))
	const year = parseInt(prompt('Ведіть рік: ', 2024))
	const quantityMonths = parseInt(prompt('Ведіть N місяців: '))
	const willBeYear = getMonthFrom({ day, month, year }, quantityMonths)
	outputResult('Буде рік:', willBeYear, '.page__container')
}


function getMonthFrom({ month, year }, nMonth) {
	const quantityYears = Math.floor((month + nMonth - 1) / 12)
	return year + quantityYears
}

function outputResult(text, result, selectorContainer, printInList = false, position = 'beforeend') {
	const output = document.querySelector(selectorContainer)
	if (!output) throw new Error(`Not found element with such selector - ${selectorContainer}`)
	if (!printInList)
		output.insertAdjacentHTML(position, `<div>${text} ${result}</div>`)
	else {
		output.insertAdjacentHTML(position, `<div>${text}</div>`)
		output.append(createList(result))
	}
}