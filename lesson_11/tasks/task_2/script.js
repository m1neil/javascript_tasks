'use strict'

const startData = document.querySelector('.start-data')
const task_1 = document.querySelector('.list-page__item--1 .list-page__result');
const task_2 = document.querySelector('.list-page__item--2 .list-page__result');
const task_3 = document.querySelector('.list-page__item--3 .list-page__result');
const task_4 = document.querySelector('.list-page__item--4 .list-page__result');
const task_5 = document.querySelector('.list-page__item--5 .list-page__result');
const task_6 = document.querySelector('.list-page__item--6 .list-page__result');
const task_7 = document.querySelector('.list-page__item--7 .list-page__result');
const task_8 = document.querySelector('.list-page__item--8 .list-page__result');
const task_9 = document.querySelector('.list-page__item--9 .list-page__result');

const salaryShopsForWeek = [
	[1, 1, 5000, 1, 350, 1, 1],
	[20, 400, 2, 2, 2, 2, 2],
	[25, 3, 100, 3, 900, 3, 3],
	[90, 4, 250, 500, 4, 1000, 4],
]

const tableSalaryShopsForWeek = createTable(salaryShopsForWeek, true)
startData.after(tableSalaryShopsForWeek)

const totalSalaryEveryShop = getEarnForDays(salaryShopsForWeek)
task_1.insertAdjacentHTML('beforeend', `<div>${totalSalaryEveryShop.join('; ')}</div>`)

const totalSalaryForMondayAndTuesday = getEarnForDays(salaryShopsForWeek, 0, 2)
task_2.insertAdjacentHTML('beforeend', `<div>${totalSalaryForMondayAndTuesday.join('; ')}</div>`)

const totalSalaryForWorkDays = getEarnForDays(salaryShopsForWeek, 0, 5)
task_3.insertAdjacentHTML('beforeend', `<div>${totalSalaryForWorkDays.join('; ')}</div>`)

const totalSalaryForWeekendDays = getEarnForDays(salaryShopsForWeek, 5, 7)
task_4.insertAdjacentHTML('beforeend', `<div>${totalSalaryForWeekendDays.join('; ')}</div>`)

const maxSalaryForWednesday = Math.max(...getEarnForDays(salaryShopsForWeek, 2, 3))
task_5.insertAdjacentHTML('beforeend', `<div>${maxSalaryForWednesday}</div>`)

const valueMoreThanTwoHundred = salaryShopsForWeek.map(week => week.filter(value => value > 200)).flat()
task_6.insertAdjacentHTML('beforeend', `<div>${valueMoreThanTwoHundred.join('; ')}</div>`)

salaryShopsForWeek.forEach(week => week.sort((a, b) => a - b))
const tableWeeksSortForIncrease = createTable(salaryShopsForWeek)
task_7.append(tableWeeksSortForIncrease)

salaryShopsForWeek.sort((firstWeek, secondWeek) => {
	const maxValueFirstWeek = Math.max(...firstWeek)
	const maxValueSecondWeek = Math.max(...secondWeek)
	return maxValueSecondWeek - maxValueFirstWeek
})

const tableWeeksSortForLess = createTable(salaryShopsForWeek)
task_8.append(tableWeeksSortForLess)

salaryShopsForWeek.sort((firstWeek, secondWeek) => {
	const sumOfFirstWeek = firstWeek.reduce((prevSum, value) => prevSum + value)
	const sumOfSecondWeek = secondWeek.reduce((prevSum, value) => prevSum + value)
	return sumOfSecondWeek - sumOfFirstWeek
})

const tableWeeksSortForLessSum = createTable(salaryShopsForWeek)
task_9.append(tableWeeksSortForLessSum)


function createTable(array, isAddThead = false) {
	const table = document.createElement('table')
	table.classList.add('table')
	const tbody = table.createTBody()
	tbody.classList.add('table__tbody')
	if (isAddThead) {
		const thead = table.createTHead()
		thead.classList.add('table__thead')
		thead.insertAdjacentHTML('beforeend', `<tr>
			<th>Пн</th>
			<th>Вт</th>
			<th>Ср</th>
			<th>Чт</th>
			<th>Пт</th>
			<th>Сб</th>
			<th>Вс</th>
		</tr>`)
	}

	array.forEach(subArray => {
		const row = document.createElement('tr')
		subArray.forEach(value => {
			row.insertAdjacentHTML('beforeend', `<td>${value}</td>`)
		})
		tbody.append(row)
	})
	return table
}

function getEarnForDays(array, startDay = 0, endDay = 7, stepArray = 1) {
	return array.reduce((earnEveryShop, week) => {
		let sumForWeek = 0
		for (let day = startDay; day < endDay; day += stepArray) {
			sumForWeek += week[day]
		}
		earnEveryShop.push(sumForWeek)
		return earnEveryShop
	}, [])
}