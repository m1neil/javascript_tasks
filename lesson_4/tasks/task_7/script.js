'use strict'

alert('Гра починається! Спроба номер №1')
alert('Кубик кидає перший ігрок')

let firstUserScore = 0
let firstUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)

alert(`Кубик першого ігрока: ${firstUserCube}`)

if (firstUserCube % 2 === 0) {
	firstUserScore += firstUserCube
	alert(`На рахунок першого ігрока зараховано очок - ${firstUserCube}`)
} else {
	firstUserScore -= firstUserCube
	alert(`З рахунку першого ігрока знято очок - ${firstUserCube}`)
}

alert('Кубик кидає другий ігрок')

let secondUserScore = 0
let secondUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)

alert(`Кубик другого ігрока: ${secondUserCube}`)

if (secondUserCube % 2 === 0) {
	secondUserScore += secondUserCube
	alert(`На рахунок другого ігрока зараховано очок - ${secondUserCube}`)
} else {
	secondUserScore -= secondUserCube
	alert(`З рахунку другого ігрока знято очок - ${secondUserCube}`)
}

const isContinueFirstUser = confirm('Ігрок №1 Бажає спробувати ще один раз?')
const isContinueSecondUser = confirm('Ігрок №2 Бажаєте спробувати ще один раз?')

if (isContinueFirstUser || isContinueSecondUser)
	alert('Спроба номер 2')

if (isContinueFirstUser) {
	alert('Кубик кидає перший ігрок')
	firstUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)
	alert(`Кубик першого ігрока: ${firstUserCube}`)
	if (firstUserCube % 2 === 0) {
		firstUserScore += firstUserCube
		alert(`На рахунок першого ігрока зараховано очок - ${firstUserCube}`)
	}
	else {
		firstUserScore -= firstUserCube
		alert(`З рахунку першого ігрока знято очок - ${firstUserCube}`)
	}
}

if (isContinueSecondUser) {
	alert('Кубик кидає другий ігрок')
	secondUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)
	alert(`Кубик другого ігрока: ${secondUserCube}`)
	if (secondUserCube % 2 === 0) {
		secondUserScore += secondUserCube
		alert(`На рахунок другого ігрока зараховано очок - ${secondUserCube}`)
	}
	else {
		secondUserScore -= secondUserCube
		alert(`З рахунку другого ігрока знято очок - ${secondUserCube}`)
	}
}

let resultGame =
	firstUserScore > secondUserScore ? 'Переміг перший ігрок' :
		secondUserScore > firstUserScore ? 'Переміг дргуий ігрок' :
			'Рахунки ігроків однакові'


document.querySelector('.page__container')
	.insertAdjacentHTML('beforeend', `<div class="victory">Підсумки гри: ${resultGame}</div>`)
