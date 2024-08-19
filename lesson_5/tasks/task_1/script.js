'use strict'

let quantityEvenNumbers = 0
let quantityOddNumbers = 0

for (let i = 0; i < 100; i++) {
	const randomValue = Math.floor(Math.random() * 1000 + 1)
	if (randomValue % 2 === 0)
		quantityEvenNumbers++
	else
		quantityOddNumbers++
}

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>Кількість парних чисел: ${quantityEvenNumbers}</div>`)
output.insertAdjacentHTML('beforeend', `<div>Кількість непарних чисел: ${quantityOddNumbers}</div>`)