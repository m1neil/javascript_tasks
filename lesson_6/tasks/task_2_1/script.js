'use strict'

if (confirm('Почати тестування?')) {
	let str = ''
	let userInput = ''
	do {
		userInput = prompt('Ведіть символ:')[0]
		if (userInput.toLocaleLowerCase() !== 'а')
			str += userInput
	} while (userInput.toLocaleLowerCase() !== 'а');
	const output = document.querySelector('.page__container')
	let result = ''
	let startPosition = str.length - 1
	for (let i = startPosition; i >= 0; i--) {
		result += str[i]
	}
	output.insertAdjacentHTML('beforeend', `<div>${result}</div>`)
	// output.insertAdjacentHTML('beforeend', `<div>${str.split('').reverse().join('')}</div>`)
}
