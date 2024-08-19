'use strict'

const startThreshold = parseInt(prompt('Ведіть стартове значення проміжку'))
const endThreshold = parseInt(prompt('Ведіть кінцеве значення проміжку'))

if (isNaN(startThreshold) || isNaN(endThreshold))
	alert('Ведене не коректне значення')
else if (startThreshold > endThreshold)
	alert('Стартове значення проміжку повинно бути меншим за кінцеве')
else {
	let totalSumOddNumbers = 0
	for (let number = startThreshold; number <= endThreshold; number++) {
		if (number % 2 !== 0)
			totalSumOddNumbers += number
	}

	alert(`Сума всіх непарних чисел в проміжку від ${startThreshold} до ${endThreshold} дорівнює ${totalSumOddNumbers}`)
}



