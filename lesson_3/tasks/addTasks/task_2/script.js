'use strict'

const userSalary = parseFloat(prompt('Ведіть свою заробітну плану', '2500'))
const livingWage = 3000
const socialAssistance = 25
let sizeSocialAssistance = 0
const output = document.querySelector('.page__container')

if (userSalary < livingWage) {
	sizeSocialAssistance = userSalary * socialAssistance / 100
	output.insertAdjacentHTML('beforeend', `<div>Розмір соціальної допомоги: ${sizeSocialAssistance} грн.</div>`)
} else
	output.insertAdjacentHTML('beforeend',
		`<div>Ваша заробітна плата рівна або вища за прожитковий мінімуму, тому соціальна допомога вам надана не буде!</div>`
	)

