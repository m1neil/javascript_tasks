'use strict'

/*
	З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп, 50 коп).
	Визначити скільки гривень і копійок є у даній сумі.
*/

// Позначення величин

/*
	кількість монет номіналом 2 копійки - quantityPennyDenominationTwo
	кількість монет номіналом 5 копійки - quantityPennyDenominationFive
	кількість монет номіналом 25 копійки - quantityPennyDenominationTwentyFive
	кількість монет номіналом 50 копійки - quantityPennyDenominationFifty

	собівартість копійок номіналом 2 - costPennyDenominationTwo = 2
	собівартість копійок номіналом 5 - costPennyDenominationFive = 5
	собівартість копійок номіналом 25 - costPennyDenominationTwentyFive = 25
	собівартість копійок номіналом 50 - costPennyDenominationFifty = 50

	Результат скільки гривень і копійок є у даній сумі

	Проміжні величини
	повна сума копійок номіналом 2 копійки - totalPennyDenominationTwo
	повна сума копійок номіналом 5 копійки - totalPennyDenominationFive
	повна сума копійок номіналом 25 копійки - totalPennyDenominationTwentyFive
	повна сума копійок номіналом 50 копійки - totalPennyDenominationFifty

	Розв'язання

	totalPennyDenominationTwo =  quantityPennyDenominationTwo * costPennyDenominationTwo
	totalPennyDenominationFive = quantityPennyDenominationFive * costPennyDenominationFive
	totalPennyDenominationTwentyFive = quantityPennyDenominationTwentyFive * costPennyDenominationTwentyFive
	totalPennyDenominationFifty = quantityPennyDenominationFifty * costPennyDenominationFifty

	totalSumPenny = totalPennyDenominationTwo + totalPennyDenominationFive + totalPennyDenominationTwentyFive + totalPennyDenominationFifty

	wholeGRN = Math.floor(totalSumPenny / 100)
	wholePennies = Math.round(totalSumPenny % 100 * 100) / 100

*/

const costPennyDenominationTwo = 2,
	costPennyDenominationFive = 5,
	costPennyDenominationTwentyFive = 25,
	costPennyDenominationFifty = 50

const quantityPennyDenominationTwo = parseInt(prompt('Кількість монет номіналом 2 копійки', '1'))
const quantityPennyDenominationFive = parseInt(prompt('Кількість монет номіналом 5 копійки', '1'))
const quantityPennyDenominationTwentyFive = parseInt(prompt('Кількість монет номіналом 25 копійки', '1'))
const quantityPennyDenominationFifty = parseInt(prompt('Кількість монет номіналом 50 копійки', '1'))

const totalPennyDenominationTwo = quantityPennyDenominationTwo * costPennyDenominationTwo
const totalPennyDenominationFive = quantityPennyDenominationFive * costPennyDenominationFive
const totalPennyDenominationTwentyFive = quantityPennyDenominationTwentyFive * costPennyDenominationTwentyFive
const totalPennyDenominationFifty = quantityPennyDenominationFifty * costPennyDenominationFifty

const totalSumPenny = totalPennyDenominationTwo + totalPennyDenominationFive +
	totalPennyDenominationTwentyFive + totalPennyDenominationFifty

const wholeGRN = Math.floor(totalSumPenny / 100)
const wholePennies = Math.round(totalSumPenny % 100 * 100) / 100

const outline = document.querySelector('.page__container')
outline.insertAdjacentHTML('beforeend',
	`<div>
		<div>Результат</div>
		<div>Повна сума в копійках: ${totalSumPenny}</div>
		<hr>
		<div>Сума: ${wholeGRN} грн. ${wholePennies} копійок</div>
	</div>`
)
