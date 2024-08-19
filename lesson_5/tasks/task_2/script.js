'use strict'

const ol = document.createElement('ol')
ol.classList.add('menu-list', 'menu-list--start-3')

for (let i = 3; i <= 8; i++) {
	ol.insertAdjacentHTML('beforeend', `<li class="menu-list__item">${getNameMonth(i)}</li>`)
}

const out = document.querySelector('.page__container')
out.insertAdjacentElement('beforeend', ol)

function getNameMonth(numberMonth) {
	switch (numberMonth) {
		case 3:
			return 'Березень'
		case 4:
			return 'Квітень'
		case 5:
			return 'Травень'
		case 6:
			return 'Червень'
		case 7:
			return 'Липень'
		case 8:
			return 'Серпень'
		default:
			return 'Такий місяць не передбачен';
	}
}
