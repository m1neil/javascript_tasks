'use strict'

const tables = document.querySelector('.page__tables')

for (let counterTables = 0, counterCell = 1; counterTables < 3; counterTables++) {
	const table = document.createElement('table')
	table.classList.add('table')
	const tbody = table.createTBody()
	tbody.classList.add('table__tbody')

	for (let counterRow = 0; counterRow < 3; counterRow++) {
		const tr = document.createElement('tr')
		for (let counterColumn = 0; counterColumn < 3; counterColumn++, counterCell++) {
			tr.insertAdjacentHTML('beforeend', `<td>${counterCell}</td>`)
		}
		tbody.insertAdjacentElement('beforeend', tr)
	}

	tables.insertAdjacentElement('beforeend', table)
}
