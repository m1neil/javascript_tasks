'use strict'

const table = document.createElement('table')
table.classList.add('table')
const tbody = table.createTBody()
tbody.classList.add('table__tbody')

for (let counterRow = 0; counterRow < 3; counterRow++) {
	const tr = document.createElement('tr')
	for (let counterColumn = 1; counterColumn <= 7; counterColumn++) {
		tr.insertAdjacentHTML('beforeend', `<td>${counterColumn}</td>`)
	}
	tbody.insertAdjacentElement('beforeend', tr)
}

const out = document.querySelector('.page__container')
out.insertAdjacentElement('beforeend', table)