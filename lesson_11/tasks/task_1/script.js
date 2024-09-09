'use strict'

const startData = document.querySelector('.start-data')
const task_1 = document.querySelector('.list-page__item--1 .list-page__result')
const task_2 = document.querySelector('.list-page__item--2 .list-page__result')
const task_3 = document.querySelector('.list-page__item--3 .list-page__result')
const task_4 = document.querySelector('.list-page__item--4 .list-page__result')
const task_5 = document.querySelector('.list-page__item--5 .list-page__result')
const task_6 = document.querySelector('.list-page__item--6 .list-page__result')
const task_7 = document.querySelector('.list-page__item--7 .list-page__result')

const twoArray = [
	[1, 10, 1, 10],
	[5, 5, 10, 10],
	[1, 20, 1, 20],
	[20, 20, 30, 30]
]

const startDataTable = createTable(twoArray)
startData.after(startDataTable)

const numbersFirstHalfRowsAndFirstHalfColumns = getNumbersHalfArray(twoArray)
const tableNumbersFirstHalfRowsAndFirstHalfColumns = createTable(numbersFirstHalfRowsAndFirstHalfColumns)
task_1.append(tableNumbersFirstHalfRowsAndFirstHalfColumns)

const numbersFirstHalfRowsAndSecondHalfColumns = getNumbersHalfArray(twoArray, true, false)
const tableNumbersFirstHalfRowsAndSecondHalfColumns = createTable(numbersFirstHalfRowsAndSecondHalfColumns)
task_2.append(tableNumbersFirstHalfRowsAndSecondHalfColumns)

const numbersSecondHalfRowsAndFirstHalfColumn = getNumbersHalfArray(twoArray, false, true)
const tableNumbersSecondHalfRowsAndFirstHalfColumn = createTable(numbersSecondHalfRowsAndFirstHalfColumn)
task_3.append(tableNumbersSecondHalfRowsAndFirstHalfColumn)

const numbersSecondHalfRowsAndSecondHalfColumn = getNumbersHalfArray(twoArray, false, false)
const tableNumbersSecondHalfRowsAndSecondHalfColumn = createTable(numbersSecondHalfRowsAndSecondHalfColumn)
task_4.append(tableNumbersSecondHalfRowsAndSecondHalfColumn)

const sumEvenRows = getSumArrayEvenOrOddElements(twoArray, true, false, 2, 1)
task_5.insertAdjacentHTML('beforeend', `<div>${sumEvenRows}</div>`)

const sumOddColumns = getSumArrayEvenOrOddElements(twoArray, false, false, 1, 2)
task_6.insertAdjacentHTML('beforeend', `<div>${sumOddColumns}</div>`)

const sumEvenRowsAndOddColumns = getSumArrayEvenOrOddElements(twoArray, true, false)
const sumOddRowsAndEvenColumns = getSumArrayEvenOrOddElements(twoArray, false, true)
task_7.insertAdjacentHTML('beforeend', `
	<div>Парні рядки та не парні колонки - ${sumEvenRowsAndOddColumns}</div>
	<div>Непарні рядки та парні колонки - ${sumOddRowsAndEvenColumns}</div>
`)

function getNumbersHalfArray(array,
	isCalcFirstHalfRow = true,
	isCalcFirstHalfColumn = true,
) {
	const numbers = []
	const startPositionRow = isCalcFirstHalfRow ? 0 : Math.floor(array.length / 2)
	const endPositionRow = isCalcFirstHalfRow ? Math.floor(array.length / 2) : array.length
	for (let row = startPositionRow; row < endPositionRow; row++) {
		const subArray = array[row]
		const startPositionColumn = isCalcFirstHalfColumn ? 0 : Math.floor(subArray.length / 2)
		const endPositionColumn = isCalcFirstHalfColumn ? Math.floor(subArray.length / 2) : subArray.length
		const numberColumns = []
		for (let col = startPositionColumn; col < endPositionColumn; col++) {
			numberColumns.push(`${row}${col}`)
		}
		numbers.push(numberColumns)
	}
	return numbers
}

function getSumArrayEvenOrOddElements(array, isCalcEvenRows = true, isCalcEvenColumns = true, stepRows = 2, stepColumns = 2) {
	let sum = 0
	const startRows = isCalcEvenRows ? 1 : 0
	const startColumn = isCalcEvenColumns ? 1 : 0
	for (let row = startRows; row < array.length; row += stepRows) {
		const subArray = array[row]
		for (let col = startColumn; col < subArray.length; col += stepColumns) {
			sum += subArray[col]
		}
	}
	return sum
}


function createTable(array) {
	const table = document.createElement('table')
	table.classList.add('table')
	const tbody = table.createTBody()
	tbody.classList.add('table__tbody')
	array.forEach(subArray => {
		const row = document.createElement('tr')
		subArray.forEach(value => {
			row.insertAdjacentHTML('beforeend', `<td>${value}</td>`)
		})
		tbody.append(row)
	})
	return table
}