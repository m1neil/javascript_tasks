'use strict'

let totalSumTemperature = 0

for (let numberMonth = 1; numberMonth <= 12; numberMonth++) {
	const temperature = parseInt(prompt(`Ведіть температура ${getNameMonth(numberMonth)}: `))

	if (isNaN(temperature)) {
		numberMonth--
		alert('Не вірно ведені данні спробуйте знову')
	} else totalSumTemperature += temperature
}

const middleTemperature = Math.round(totalSumTemperature / 12)

const out = document.querySelector('.page__container')
out.insertAdjacentHTML('beforeend', `<div>Середня температура: ${middleTemperature} C* за рік</div>`)

function getNameMonth(numberMonth) {
	switch (numberMonth) {
		case 1: return 'Січень'
		case 2: return 'Лютий'
		case 3: return 'Березень'
		case 4: return 'Квітень'
		case 5: return 'Травень'
		case 6: return 'Червень'
		case 7: return 'Липень'
		case 8: return 'Серпень'
		case 9: return 'Вересень'
		case 10: return 'Жовтень'
		case 11: return 'Листопад'
		case 12: return 'Грудень'
	}
}