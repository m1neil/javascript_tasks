'use strict'

if (confirm('Розпочати тестування:')) {
	let firstMuxNumber = -Infinity, secondMuxNumber = -Infinity
	do {
		const value = parseInt(prompt('Ведіть число:'))
		if (value > firstMuxNumber)
			firstMuxNumber = value
		else if (value > secondMuxNumber)
			secondMuxNumber = value
		console.log(Math.abs(firstMuxNumber - secondMuxNumber))
	} while (Math.abs(firstMuxNumber - secondMuxNumber) > 5);
}