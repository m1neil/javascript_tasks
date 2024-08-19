'use strict'

const table = document.createElement('table')
table.classList.add('table')
const tbody = table.createTBody()
tbody.classList.add('table__tbody')

for (let counterRow = 0, totalCounter = 1; counterRow < 3; counterRow++) {
	const tr = document.createElement('tr')
	for (let counterColumn = 0; counterColumn < 3; counterColumn++, totalCounter++) {
		tr.insertAdjacentHTML('beforeend', `<td>${totalCounter}</td>`)
	}
	tbody.insertAdjacentElement('beforeend', tr)
}

const out = document.querySelector('.page__container')
out.insertAdjacentElement('beforeend', table)