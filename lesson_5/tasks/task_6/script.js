'use strict'

const table = document.createElement('table')
table.classList.add('table')
const tbody = table.createTBody()
tbody.classList.add('table__tbody')

const tr = document.createElement('tr')
for (let i = 1; i <= 7; i++) {
	tr.insertAdjacentHTML('beforeend', `<td>${i}</td>`)
}

tbody.insertAdjacentElement('beforeend', tr)

const out = document.querySelector('.page__container')
out.insertAdjacentElement('beforeend', table)