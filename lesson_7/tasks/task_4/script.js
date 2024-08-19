'use strict'

let quantityPositiveNumbers = 0,
	quantityEvenNumbers = 0,
	quantityNumberMoveHundred = 0

for (let indexNumber = 0; indexNumber < 3; indexNumber++) {
	searchEvenPositiveMoreHundredNumbers(parseFloat(prompt('Ведіть число')))
}

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `
	<ol class="menu-list">
		<li class="menu-list__item">Кількість парних чисел: ${quantityEvenNumbers}</li>
		<li class="menu-list__item">Кількість додатних чисел: ${quantityPositiveNumbers}</li>
		<li class="menu-list__item">Кількість чисел більше за 100: ${quantityNumberMoveHundred}</li>
	</ol>
`)

function searchEvenPositiveMoreHundredNumbers(number) {
	if (number % 2 === 0) quantityEvenNumbers++
	if (number > 0) quantityPositiveNumbers++
	if (number > 100) quantityNumberMoveHundred++
}
