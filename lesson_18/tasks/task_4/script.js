'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const container = document.querySelector('.page__container')
	const wishlist = [
		"Подорож навколо світу",
		"Навчитися нової мови",
		"Стати експертом в програмуванні",
		"Купити власний будинок",
		"Досягти фінансової незалежності",
		"Поліпшити фізичну форму",
		"Відвідати концерт улюбленого гурту",
		"Знайти роботу своєї мрії",
		"Написати книгу",
		"Навчитися малювати",
		"Стати волонтером у благодійній організації",
		"Почати власний бізнес",
		"Зайнятися дайвінгом",
		"Вивчити техніки медитації",
		"Пробігти марафон",
		"Навчитися готувати екзотичні страви",
		"Відвідати північне сяйво",
		"Пройти курс публічних виступів",
		"Спробувати серфінг",
		"Більше подорожувати рідною країною"
	]

	const randomDesires = getRandomDesires(wishlist)
	printWishList(randomDesires, container, 'div', 'p')
}

function printWishList(wishList, output, tagList = 'ul', tagItemList = 'li') {
	if (!output)
		throw new Error('Not found Element!')
	const list = document.createElement(tagList)
	list.className = 'list'
	wishList.forEach(wish => {
		const p = document.createElement(tagItemList)
		p.className = `list__item`
		p.textContent = wish
		list.append(p)
	})
	output.append(list)
}

function getRandomDesires(wishList = [], amountDesires = 3) {
	if (!Array.isArray(wishList))
		throw new Error("Not an array!")
	if (wishList.length < amountDesires)
		amountDesires = wishList.length

	const listDesires = []
	if (wishList.length) {
		const maxIndex = wishList.length - 1
		for (let i = 0; i < amountDesires;) {
			const randomIndex = getRandomValue(0, maxIndex)
			const wish = wishList[randomIndex]
			if (listDesires.includes(wish)) continue
			listDesires.push(wish)
			i++
		}
	}
	return listDesires
}

function getRandomValue(minValue = 0, maxValue = 50) {
	return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}