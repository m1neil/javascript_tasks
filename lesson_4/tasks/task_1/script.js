'use strict'

const itemMenu = parseInt(prompt('Оберіть пункт меню: \n1. Веселий\n2. Сумний\n3. Обурений\n', '1'))
let emoji

switch (itemMenu) {
	case 1:
		emoji = '😊'
		break
	case 2:
		emoji = '😢'
		break
	case 3:
		emoji = '😡'
		break
	default:
		emoji = 'Такого пункта меню нема'
		break
}

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>${emoji}</div>`)

