'use strict'

let attempt
const randomValue = Math.floor(Math.random() * (5 - 1 + 1) + 1);
const output = document.querySelector('.page__container')
console.log(randomValue)

attempt = parseInt(prompt('Перша спроба: Яке було загадане число від 1 до 5 включно?', '4'))

if (attempt === randomValue)
	output.insertAdjacentHTML('beforeend', '<div>Ви успішно відгадали загадане число з першої спроби!</div>')
else {
	attempt = parseInt(prompt('Друга спроба: Яке було загадане число від 1 до 5 включно?', '2'))
	if (attempt === randomValue)
		output.insertAdjacentHTML('beforeend', '<div>Ви успішно відгадали загадане число з другої спроби!</div>')
	else {
		output.insertAdjacentHTML('beforeend', '<div>Нажаль вам не вдалось відгадати загадане число використавши дві спроби!</div>')
	}
}





