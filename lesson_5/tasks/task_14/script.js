'use strict'

let startThreshold = parseInt(prompt('Ведіть стартове значення проміжку'))
const endThreshold = parseInt(prompt('Ведіть кінцеве значення проміжку'))

if (isNaN(startThreshold) || isNaN(endThreshold))
	alert('Ведене не коректне значення')
else if (startThreshold > endThreshold)
	alert('Стартове значення проміжку повинно бути меншим за кінцеве')
else {
	let totalSumOddNumbers = 0
	let quantityOddNumber = 0

	while (quantityOddNumber < 5 && startThreshold <= endThreshold) {
		if (startThreshold % 2 !== 0) {
			totalSumOddNumbers += startThreshold
			quantityOddNumber++
		}
		startThreshold++
	}

	alert(`Серед заданого проміжку було знайдено: ${quantityOddNumber} непарних чисел та їх сума дорівнює: ${totalSumOddNumbers}`)
}