'use strict'

if (confirm('Почати тестування?')) {
	let totalSum = 0
	let value

	do {
		value = parseFloat(prompt('Ведіть число'))
		totalSum += value
	} while (value !== 0);


	alert(`Сума дорівнює ${totalSum}`)
}