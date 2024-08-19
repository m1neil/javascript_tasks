'use strict'

let result = '<div>'
for (let i = 0; i < 8; i++) {
	result += `<div>Hello</div>`
}
result += '</div>'

const out = document.querySelector('.page__container')
out.insertAdjacentHTML('beforeend', result)