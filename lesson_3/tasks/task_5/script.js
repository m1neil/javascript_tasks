'use strict'

const output = document.querySelector('.page__container');
const categoryA = 'A',
	categoryB = 'B',
	categoryC = 'C'
let driverCategory = prompt('Ведіть вашу категорію водія з перелічених - А,B,C', 'A').toUpperCase()
let result = ''

if (driverCategory === categoryA)
	result = 'мотоцикл'
else if (driverCategory === categoryB)
	result = 'легковий автомобіль'
else if (driverCategory === categoryC)
	result = 'вантажний автомобіль'
else
	result = 'Така категорія відсутня'

output.insertAdjacentHTML('beforeend', `<div>Ваша категорія - ${driverCategory}. Ви можете керувати наступним транспортом -  ${result}</div>`)





