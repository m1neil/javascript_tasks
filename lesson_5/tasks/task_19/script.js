'use strict'

const ol = document.createElement('ol')
ol.classList.add('menu-list')

const quantityWeeks = parseInt(prompt('Ведіть кількість тижнів: ', '2'))
let totalProfit = 0

for (let i = 1; i <= quantityWeeks; i++) {
	let totalProfitForWeek = 0
	for (let dayWeek = 1; dayWeek <= 7; dayWeek++) {
		const profitForDay = parseFloat(prompt(`Ведіть прибуток за ${dayWeek} день тижню, тижня №${i}: `))

		if (isNaN(profitForDay)) {
			alert('Не коректні данні, спробуйте ще раз')
			dayWeek--
			continue
		}

		totalProfitForWeek += profitForDay
	}
	totalProfit += totalProfitForWeek
	ol.insertAdjacentHTML('beforeend',
		`<li class="menu-list__item">Прибуток за тиждень №${i} - ${totalProfitForWeek.toFixed(2)} грн.</li>`)
}

const out = document.querySelector('.page__container')
out.insertAdjacentElement('beforeend', ol)
out.insertAdjacentHTML('beforeend', `<div>Загальний прибуток: ${totalProfit.toFixed(2)}</div>`)