'use strict'

const schoolboy = 6,
	student = 17,
	worker = 22,
	pensioner = 60

const output = document.querySelector('.page__container')
const personAge = parseInt(prompt('Ведіть ваш вік, щоб дізнатися хто ви:', ''))
let result = ''

if (personAge < schoolboy)
	result = 'дитині у садочку'
else if (personAge < student)
	result = 'школяру'
else if (personAge < worker)
	result = 'студенту'
else if (personAge < pensioner)
	result = 'працівнику'
else
	result = 'пенсіонеру'

output.insertAdjacentHTML('beforeend', `<div>Ваш вік відповідає - ${result}</div>`)






