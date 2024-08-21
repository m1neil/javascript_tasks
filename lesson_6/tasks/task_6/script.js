'use strict'

if (confirm('Розпочати тестування')) {
	const guessNumber = parseInt(prompt('Ведіть число:'))
	const menu = 'Меню\n1.Ініціалізація (сума=0)\n2.Додати 2\n3.Додати 3\n4.Відняти 2\n5.Відняти 3.\n6.Вивести суму\n7.Вихід.'
	let sum = 0
	let numberMenu
	do {
		numberMenu = parseInt(prompt(menu))
		switch (numberMenu) {
			case 1: sum = 0
				break
			case 2: sum += 2
				break
			case 3: sum += 3
				break
			case 4: sum -= 2
				break
			case 5: sum -= 3
				break
			case 6: alert(`Сума: ${sum}`)
				break
			case 7: alert('До побачення')
				break
			default: alert('Ведений номер меню не існує')
				break
		}
		if (sum === guessNumber)
			alert(`Ви отримали своє загадане число: ${guessNumber}`)
	} while (numberMenu !== 7);
}