'use strict'

if (confirm('Розпочати тестування?')) {
	let sumEvenNumbers = 0
	let needQuantityEvenNumber = parseInt(prompt('Скільки парних чисел ви хочете підрахувати?'))
	let currentQuantityEvenNumber = needQuantityEvenNumber
	let userNumber
	do {
		userNumber = parseFloat(prompt('Ведіть число'))
		if (userNumber % 2 === 0) {
			sumEvenNumbers += userNumber
			currentQuantityEvenNumber--
		}
	} while (!isNaN(userNumber) && currentQuantityEvenNumber > 0);

	const output = document.querySelector('.page__container')
	if (currentQuantityEvenNumber > 0)
		output.insertAdjacentHTML('beforeend',
			`<div>Серед наведених чисел було знайдено ${needQuantityEvenNumber - currentQuantityEvenNumber} парних чисел, їх сума - ${sumEvenNumbers}</div>`)
	else
		output.insertAdjacentHTML('beforeend',
			`<div>Було підраховану ${needQuantityEvenNumber} парних чисел, їх сума - ${sumEvenNumbers}</div>`)

}