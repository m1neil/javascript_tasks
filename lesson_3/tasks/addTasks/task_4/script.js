'use strict'

alert('Якщо дитині менше року, то місяці вказуйте як в наступному прикладі. Приклад - 0.2 = 2 місяці')

const childAge = parseFloat(prompt('Вік дитини: ', '7'))
const kindergarten = 1,
	school = 6,
	finishSchool = 16,
	university = 17,
	graduateUniversity = 22

const yearsToKindergarten = 12 - childAge * 10
const yearsToSchool = school - childAge
const yearsToFinishSchool = finishSchool - childAge
const yearsToUniversity = university - childAge
const yearsToGraduateUniversity = graduateUniversity - childAge

const output = document.querySelector('.page__container')

if (childAge < kindergarten)
	output.insertAdjacentHTML('beforeend', `<div>Дитина піде до садочку через місяців: ${yearsToKindergarten.toFixed(0)}</div>`)

if (childAge < school)
	output.insertAdjacentHTML('beforeend', `<div>Дитина піде до школи через років: ${yearsToSchool.toFixed(0)}</div>`)

if (childAge < finishSchool)
	output.insertAdjacentHTML('beforeend', `<div>Дитина закінчить школи через років: ${yearsToFinishSchool.toFixed(0)}</div>`)

if (childAge < university)
	output.insertAdjacentHTML('beforeend', `<div>Дитина піде до університету через років: ${yearsToUniversity.toFixed(0)}</div>`)

if (childAge < graduateUniversity)
	output.insertAdjacentHTML('beforeend', `<div>Дитина закінчить університет через років: ${yearsToGraduateUniversity.toFixed(0)}</div>`)