'use strict'

const guessNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)
const answerUserFirst = parseInt(prompt('Вгадай число', '6'))
const answerUserSecond = parseInt(prompt('Вгадай число', '6'))

const nearFirstUser = Math.abs(guessNumber - answerUserFirst)
const nearSecondUser = Math.abs(guessNumber - answerUserSecond)

let result

if (nearFirstUser < nearSecondUser)
	result = 'перший користувач'
else if (nearSecondUser < nearFirstUser)
	result = 'другий користувач'
else
	result = 'Ні хто'

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>Переміг ${result}</div>`)