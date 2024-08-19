'use strict'

if (confirm('Розпочати тестування?')) {
	const menu = 'Меню:\n1. Сказати «Привіт».\n2. Сказати «Зачекай».\n3. Сказати «До побачення».\n4. Вихід.'

	let numberMenu
	do {
		numberMenu = parseInt(prompt(menu))
		let message = ''
		switch (numberMenu) {
			case 1: message = 'Привіт'
				break
			case 2: message = '«Зачекай»'
				break
			case 3: message = 'До побачення'
				break
			case 4: message = 'На все добре'
				break
		}
		if (message)
			alert(message)
		else
			alert('Такого пункту меню немає')
	} while (numberMenu !== 4);
}

