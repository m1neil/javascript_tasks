'use strict'
// Клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.
if (confirm('Розпочати тестування:')) {
	const correctPassword = 78
	let userPassword
	let message = ''
	do {
		userPassword = parseInt(prompt('Ведіть пароль'))
		message = userPassword === correctPassword ? 'Ласкаво просимо!' : 'Пароль не вірний'
		alert(message)
	} while (correctPassword !== userPassword);
}