'use strict'

if (confirm('Розпочати тестування?')) {
	const visitorsShopForWeek = getArrayRandomValue()
	const arrayWithIndexDaysLessTwentyVisitors = getDaysQuantityVisitorsLessTwenty(visitorsShopForWeek)
	const indexDayWithMinVisitors = getDayMinimalVisitors(visitorsShopForWeek)
	const indexDayWithMaxVisitors = getDayMaximumVisitors(visitorsShopForWeek)
	const totalVisitorsInWorkDays = getTotalVisitorsForDays(visitorsShopForWeek, 0, 5)
	const totalVisitorsInWeekendDays = getTotalVisitorsForDays(visitorsShopForWeek, 5, 7)
	const tableVisitors = createTableVisitors(visitorsShopForWeek)
	const output = document.querySelector('.page__container')

	output.append(tableVisitors)
	output.insertAdjacentHTML('beforeend',
		`<div></div>Дні коли кількість відвідувачів була меншою за 20: ${arrayWithIndexDaysLessTwentyVisitors.join(', ')}</div>`)
	output.insertAdjacentHTML('beforeend',
		`<div>День коли була мінімальна кількість відвідувачів: ${indexDayWithMinVisitors}</div>`)
	output.insertAdjacentHTML('beforeend',
		`<div>День коли була максимальна кількість відвідувачів: ${indexDayWithMaxVisitors}</div>`)
	output.insertAdjacentHTML('beforeend',
		`<div>Загальну кількість клієнтів у робочі дні: ${totalVisitorsInWorkDays}</div>`)
	output.insertAdjacentHTML('beforeend',
		`<div>Загальну кількість клієнтів у вихідні дні: ${totalVisitorsInWeekendDays}</div>`)

	// ==============================================================================

	function getArrayRandomValue() {
		const array = []
		for (let i = 0; i < 7; i++) {
			array.push(getRandomValue(5, 50))
		}
		return array
	}

	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}

	function getDaysQuantityVisitorsLessTwenty(arrayVisitors) {
		let minDays = []
		for (let i = 0; i < arrayVisitors.length; i++) {
			if (arrayVisitors[i] < 20)
				minDays.push(getNameDayWeek(i + 1))
		}
		return minDays
	}

	function getDayMinimalVisitors(arrayVisitors) {
		let minVisitorsIndex = 0
		for (let i = 1; i < arrayVisitors.length; i++) {
			if (arrayVisitors[minVisitorsIndex] > arrayVisitors[i])
				minVisitorsIndex = i
		}
		return getNameDayWeek(minVisitorsIndex + 1)
	}

	function getDayMaximumVisitors(arrayVisitors) {
		let maxVisitorsIndex = 0
		for (let i = 1; i < arrayVisitors.length; i++) {
			if (arrayVisitors[maxVisitorsIndex] < arrayVisitors[i])
				maxVisitorsIndex = i
		}
		return getNameDayWeek(maxVisitorsIndex + 1)
	}

	function getTotalVisitorsForDays(arrayVisitors, startIndex, lastIndexDay) {
		let totalVisitors = 0
		for (let i = startIndex; i < lastIndexDay; i++) {
			totalVisitors += arrayVisitors[i];
		}
		return totalVisitors
	}

	function createTableVisitors(arrayVisitors) {
		const table = document.createElement('table')
		const tableBody = table.createTBody()
		const tableHead = table.createTHead()
		const trHead = document.createElement('tr')
		const trBody = document.createElement('tr')
		table.classList.add('table')
		tableHead.classList.add('table__thead')
		tableBody.classList.add('table__tbody', 'table__tbody--center')
		tableHead.append(trHead)
		tableBody.append(trBody)
		trHead.insertAdjacentHTML('beforeend', '<th>День тижня</th>')
		trBody.insertAdjacentHTML('beforeend', '<th>Кількість відвідувачів</th>')
		for (let i = 0; i < arrayVisitors.length; i++) {
			trHead.insertAdjacentHTML('beforeend', `<td>${getNameDayWeek(i + 1)}</td>`)
			trBody.insertAdjacentHTML('beforeend', `<td>${arrayVisitors[i]}</td>`)
		}
		return table
	}

	function getNameDayWeek(numberDay) {
		let nameDay = ''
		switch (numberDay) {
			case 1:
				nameDay = 'Понеділок'
				break
			case 2:
				nameDay = 'Вівторок'
				break
			case 3:
				nameDay = 'Середа'
				break
			case 4:
				nameDay = 'Четвер'
				break
			case 5:
				nameDay = 'П\'ятниця'
				break
			case 6:
				nameDay = 'Субота'
				break
			case 7:
				nameDay = 'Неділя'
				break
		}
		return nameDay
	}
}

