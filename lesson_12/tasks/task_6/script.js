'use strict'

const names = ['Добривод', 'Юхима', 'Феодосія', 'Едуард', 'Горун',
	'Шарлота', 'Корній', 'Ігор', 'Анна', 'Яволод',
	'Дарина', 'Флор', 'Щастибог', 'Буйтур', 'Ярина',
	'Андрій', 'Ядвіга', 'Цецілія', 'Далібор', 'Щастислав', 'Собімир', 'Ольга']

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>Імена до сортування по довжині рядка: ${names.join(', ')}</div>`)
names.sort((a, b) => a.length - b.length)
output.insertAdjacentHTML('beforeend', `<div>Імена після сортування по довжині рядка: ${names.join(', ')}</div>`)

const indexName = indexOfLength(names, 5)
const isIncludesName = indexName === -1 ? 'Ні' : 'Так'

output.insertAdjacentHTML('beforeend',
	`<div>Чи є ім'я довжиною 5 символів в списку - ${isIncludesName}, Ім'я з довжиною 5 символів під індексом ${indexName}</div>`
)

function indexOfLength(array, searchLengthElement) {
	let startIndex = 0,
		endIndex = array.length - 1
	while (startIndex <= endIndex) {
		const middlePosition = Math.floor((startIndex + endIndex) / 2)
		if (array[middlePosition].length === searchLengthElement) return middlePosition
		else if (array[middlePosition].length > searchLengthElement) endIndex = middlePosition - 1
		else startIndex = middlePosition + 1
	}
	return -1
}