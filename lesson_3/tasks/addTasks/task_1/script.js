'use strict'

const widthScreen = parseFloat(prompt('Введіть ширину екрану', '1920'))
const quantityElements = parseInt(prompt('Ведіть кількість елементів:', '10'))
const widthOneElement = widthScreen / quantityElements
const output = document.querySelector('.page__container')

output.insertAdjacentHTML('beforeend', `
	<div>Ширина екрану - ${widthScreen}px</div>
	<div>Кількість елементів - ${quantityElements}</div>
	<div>Ширина одного елемента повинна бути ${widthOneElement.toFixed(2)}px</div>
`)
