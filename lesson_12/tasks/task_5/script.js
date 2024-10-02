'use strict'

const names = ['Добривод', 'Юхима', 'Феодосія', 'Едуард', 'Горун',
	'Шарлота', 'Корній', 'Ігор', 'Анна', 'Яволод',
	'Дарина', 'Флор', 'Щастибог', 'Буйтур', 'Ярина',
	'Андрій', 'Ядвіга', 'Цецілія', 'Далібор', 'Щастислав', 'Собімир', 'Ольга']

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>Імена до сортування: ${names.join(', ')}</div>`)
names.sort((a, b) => a.localeCompare(b))
output.insertAdjacentHTML('beforeend', `<div>Імена після сортування: ${names.join(', ')}</div>`)

const indexName = indexOf(names, 'Ольга')
const isIncludesName = indexName !== -1 ? 'Так' : 'Ні'
output.insertAdjacentHTML('beforeend',
	`<div>Чи є ім'я Ольга в списку - ${isIncludesName}, Ольга під індексом ${indexName}</div>`
)

function indexOf(array, searchElement) {
	let startIndex = 0,
		endIndex = array.length - 1
	while (startIndex <= endIndex) {
		const middlePosition = Math.floor((startIndex + endIndex) / 2)
		if (array[middlePosition] === searchElement) return middlePosition
		else if (array[middlePosition] > searchElement) endIndex = middlePosition - 1
		else startIndex = middlePosition + 1
	}
	return -1
}