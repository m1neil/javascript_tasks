'use strict'

const x = parseFloat(prompt('Ведіть зміну x:', '23.56'))
const wholePart = Math.floor(x)
const fractionalPart = Math.round((x % 1) * 100) / 100

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `
	<div>
		<div>Ведене число x: ${x.toFixed(2)}</div>
		<div>Ціла частина: ${wholePart}</div>
		<div>Дробна частина: ${fractionalPart}</div>
	</div>	
`)
