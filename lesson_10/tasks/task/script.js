'use strict'

const historyPrices = getHistoryPrices(5, 1, 10000)

// Розрахунки
const pricesMoreThenThousand = historyPrices.filter(price => price > 1000)
const numbersPricesMoreThenThousand = historyPrices.reduce((array, price, index) => {
	if (price > 1000) array.push(index)
	return array
}, [])
const pricesMoreThenPrevious = historyPrices.filter((price, index, array) => {
	return index !== 0 && price > array[index - 1]
})
const pricesInPercentsFromMaxValue = getValuesInPercentsFromMaxValue(historyPrices)
const quantityChangePrice = historyPrices.reduce((counter, price, index, array) => {
	return index !== 0 && price !== array[index - 1] ?
		counter + 1 : counter
}, 0)
const isHasPriceLessThousand = historyPrices.some(price => price < 1000) ? 'Так' : 'Ні'
const isAllPriceMoreThousand = historyPrices.every(price => price > 1000) ? 'Так' : 'Ні'
const quantityPricesMoreThousand = historyPrices.reduce((counter, price) => {
	return price > 1000 ? counter + 1 : counter
}, 0)
const sumPricesMoreThousand = historyPrices.reduce((prevSum, price) => {
	return price > 1000 ? prevSum + price : prevSum
}, 0)
const firstPriceMoreThousand = historyPrices.find(price => price > 1000)
const indexFirstPriceMoreThousand = historyPrices.findIndex(price => price > 1000)
const lastPriceMoreThousand = historyPrices.findLast(price => price > 1000)
const indexLastPriceMoreThousand = historyPrices.findLastIndex(price => price > 1000)

// Вивід результатів
const output = document.querySelector('.history-prices');
const task_1 = document.querySelector('.list-page__item--1')
const task_2 = document.querySelector('.list-page__item--2')
const task_3 = document.querySelector('.list-page__item--3')
const task_4 = document.querySelector('.list-page__item--4')
const task_5 = document.querySelector('.list-page__item--5')
const task_6 = document.querySelector('.list-page__item--6')
const task_7 = document.querySelector('.list-page__item--7')
const task_8 = document.querySelector('.list-page__item--8')
const task_9 = document.querySelector('.list-page__item--9')
const task_10 = document.querySelector('.list-page__item--10')
const task_11 = document.querySelector('.list-page__item--11')
const task_12 = document.querySelector('.list-page__item--12')
const task_13 = document.querySelector('.list-page__item--13')

output.insertAdjacentHTML('beforeend', `<div style="font-weight: 700">Історія цін: ${historyPrices.join(', ')}</div>`)
task_1.insertAdjacentHTML('beforeend', `<div>Ціни: ${pricesMoreThenThousand}</div>`)
task_2.insertAdjacentHTML('beforeend', `<div>ННомери: ${numbersPricesMoreThenThousand}</div>`)
task_3.insertAdjacentHTML('beforeend', `<div>Ціни: ${pricesMoreThenPrevious}</div>`)
task_4.insertAdjacentHTML('beforeend', `<div>Відсотки: ${pricesInPercentsFromMaxValue}</div>`)
task_5.insertAdjacentHTML('beforeend', `<div>${quantityChangePrice}</div>`)
task_6.insertAdjacentHTML('beforeend', `<div>${isHasPriceLessThousand}</div>`)
task_7.insertAdjacentHTML('beforeend', `<div>${isAllPriceMoreThousand}</div>`)
task_8.insertAdjacentHTML('beforeend', `<div>${quantityPricesMoreThousand}</div>`)
task_9.insertAdjacentHTML('beforeend', `<div>Сума: ${sumPricesMoreThousand}</div>`)
task_10.insertAdjacentHTML('beforeend', `<div>Ціна: ${firstPriceMoreThousand}</div>`)
task_11.insertAdjacentHTML('beforeend', `<div>Індекс: ${indexFirstPriceMoreThousand}</div>`)
task_12.insertAdjacentHTML('beforeend', `<div>Ціна: ${lastPriceMoreThousand}</div>`)
task_13.insertAdjacentHTML('beforeend', `<div>Індекс: ${indexLastPriceMoreThousand}</div>`)


function getHistoryPrices(quantityElements, minValue = 0, maxValue = 1) {
	const prices = []
	for (let i = 0; i < quantityElements; i++) {
		prices.push(getRandomValue(minValue, maxValue))
	}
	return prices
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function getValuesInPercentsFromMaxValue(array, isAddSymbolPercent = true) {
	const maxValue = Math.max(...array)
	return array.map(value => {
		const percent = Math.round(value / maxValue * 100)
		return isAddSymbolPercent ? `${percent}%` : percent
	})
}
