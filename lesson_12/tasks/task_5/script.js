'use strict'

const names = ['Добривод', 'Юхима', 'Феодосія', 'Едуард', 'Горун',
	'Шарлота', 'Корній', 'Ігор', 'Анна', 'Яволод',
	'Дарина', 'Флор', 'Щастибог', 'Буйтур', 'Ярина',
	'Андрій', 'Ядвіга', 'Цецілія', 'Далібор', 'Щастислав', 'Собімир', 'Ольга']

names.sort((a, b) => a.localeCompare(b))
console.log(names);
console.log(indexOf(names, 'Ольга'));

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