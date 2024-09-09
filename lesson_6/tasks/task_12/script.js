'use strict'

if (confirm('Розпочати тестування:')) {
	let firstMuxNumber = -Infinity, secondMuxNumber = -Infinity
	do {
		const value = parseInt(prompt('Ведіть число:'))
		if (value > firstMuxNumber) {
			if (firstMuxNumber > secondMuxNumber)
				secondMuxNumber = firstMuxNumber
			firstMuxNumber = value
		} else if (value > secondMuxNumber)
			secondMuxNumber = value
	} while (Math.abs(firstMuxNumber - secondMuxNumber) > 5);
}