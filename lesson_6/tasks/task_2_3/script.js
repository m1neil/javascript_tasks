'use strict'

if (confirm('Почати тестування?')) {
	let multiply = 1
	let value

	do {
		value = parseFloat(prompt('Ведіть число:'))
		if (value !== 0)
			multiply *= value
	} while (value !== 0);

	alert(multiply)
}

