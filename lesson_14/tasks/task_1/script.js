'use strict'

const sites = getArrayWithSites(5)

// 1) загальну вартість усіх сайтів
const totalPriceAllSites = getTotalSum(sites, 'price')
outputResult('Загальна вартість:', totalPriceAllSites, '.list-page__item--1')

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const sitesDevelopBetween2000And2009 = sites.reduce((prevCount, { year }) =>
	year >= 2000 && year <= 2009 ?
		prevCount + 1 : prevCount, 0
)
outputResult('Кількість:', sitesDevelopBetween2000And2009, '.list-page__item--2')

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const quantitySitesAmount100000 = sites.reduce((prevCount, { sponsors }) => {
	const totalSum = getTotalSum(sponsors, 'amount')
	return totalSum > 100_000 ? prevCount + 1 : prevCount
}, 0)
outputResult('Кількість:', quantitySitesAmount100000, '.list-page__item--3')

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const totalSponsors = sites.map(({ sponsors }) => sponsors).flat()
outputResult('Список:', totalSponsors, '.list-page__item--4', true)

// 5) знайти рік, коли прибуток був найбільшим
const yearWithMaxAmount = sites.reduce((prevItemAmount, { year, sponsors }) => {
	const totalSumAmount = getTotalSum(sponsors, 'amount')
	return prevItemAmount.maxAmount < totalSumAmount ?
		{ year, maxAmount: totalSumAmount } : prevItemAmount
}, { year: 0, maxAmount: 0 }).year
outputResult('Рік:', yearWithMaxAmount, '.list-page__item--5')


// 6) упорядкувати список за спаданням прибутку
sites.sort((firstSite, secondSite) => {
	const amountFirstSite = getTotalSum(firstSite.sponsors, 'amount')
	const amountSecondSite = getTotalSum(secondSite.sponsors, 'amount')
	return amountSecondSite - amountFirstSite
})
outputResult('Упорядкований список:', sites, '.list-page__item--6', true)

// 7. Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const sitesPriceLess10000 = JSON.parse(JSON.stringify(sites.filter(({ price }) => price < 10_000)))
const sitesPriceMore10000 = JSON.parse(JSON.stringify(sites.filter(({ price }) => price > 10_000)))
outputResult('Список з вартістю сайта до 10000:', sitesPriceLess10000, '.list-page__item--7', true)
outputResult('Список з вартістю сайта більше 10000:', sitesPriceMore10000, '.list-page__item--7', true)

function getTotalSum(array, key) {
	return array.reduce((prevSum, item) => prevSum + item[key], 0)
}

function getArrayWithSites(quantity) {
	const companies = [
		"WebCase", "WebBookStudio", "Foxminded", "Luxoft", "SoftServe",
		"Ciklum", "Intellias", "ELEKS", "Miratech", "N-iX"
	]
	const firstNames = [
		"Олександр", "Марія", "Дмитро", "Олена", "Іван",
		"Анна", "Михайло", "Катерина", "Володимир", "Наталія"
	]
	const lastNames = [
		"Шевченко", "Коваленко", "Бондаренко", "Ткаченко", "Кравченко",
		"Олійник", "Лисенко", "Мельник", "Петренко", "Сидоренко"
	]

	const sites = []

	for (let i = 0; i < quantity; i++) {
		const developingCompany = getRandomName(companies)
		const owner = `${getRandomName(firstNames)} ${getRandomName(lastNames)}`
		const year = getRandomValue(1980, 2024)
		const price = getRandomValue(1000, 60000)
		const quantitySponsors = getRandomValue(1, 10)

		const sponsors = []
		for (let k = 0; k < quantitySponsors; k++) {
			const firstName = getRandomName(firstNames)
			const lastName = getRandomName(lastNames)
			const amount = getRandomValue(500, 25000)
			sponsors.push({
				firstName,
				lastName,
				amount
			})
		}

		sites.push({
			developingCompany,
			owner,
			year,
			price,
			sponsors
		})
	}

	return sites
}


function getRandomName(array) {
	const randomIndex = getRandomValue(0, array.length - 1)
	return array[randomIndex]
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function outputResult(text, result, selectorContainer, printInList = false, position = 'beforeend') {
	const output = document.querySelector(selectorContainer)
	if (!output) throw new Error(`Not found element with such selector - ${selectorContainer}`)
	if (!printInList)
		output.insertAdjacentHTML(position, `<div>${text} ${result}</div>`)
	else {
		output.insertAdjacentHTML(position, `<div>${text}</div>`)
		output.append(createList(result))
	}
}

function createList(element, nameField) {
	if (Array.isArray(element)) {
		const ul = document.createElement('ul')
		ul.classList.add('list-object')
		for (const item of element) {
			const li = document.createElement('li')
			li.classList.add('list-object__item')
			li.style.marginBottom = `${10 / 16}rem`
			li.textContent = nameField ? nameField : 'Елемент'
			if (typeof item === 'object') {
				li.append(createList(item))
			}
			ul.append(li)
		}
		return ul
	} else {
		const subList = document.createElement('ul')
		subList.classList.add('list-object__sub-list')
		for (const key in element) {
			if (Array.isArray(element[key])) {
				subList.append(createList(element[key], key))
			} else {
				subList.insertAdjacentHTML('beforeend', `<li class="list-object__sub-item">${key}: ${element[key]}</li>`)
			}
		}
		return subList
	}
}