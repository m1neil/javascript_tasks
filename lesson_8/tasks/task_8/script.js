'use strict'

if (confirm('Почати тестування?')) {
	function getArrayWithWinSum(quantitySum) {
		const sums = []
		for (let i = 0; i < quantitySum; i++) {
			sums.push(getRandomValue(-500, 500))
		}
		return sums
	}

	const winsSum = getArrayWithWinSum(15)
	let totalSumWin = 0
	let indexElement
	do {
		indexElement = parseInt(prompt(`Ведіть номер елемента від 1 до ${winsSum.length}`))
		if (!isNaN(indexElement))
			totalSumWin += winsSum[indexElement - 1]
	} while (!isNaN(indexElement))

	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML('beforeend', `
	<div>Виграшні суми ${winsSum.join(', ')}</div>
	<div>Сумарний виграш ${totalSumWin}</div>
`)

	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}
}