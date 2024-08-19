'use strict'

const numberYear = parseInt(prompt('Ведіть номер року: ', '1901'))
const numberCentury = Math.floor((numberYear - 1) / 100) + 1
const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `<div>Номер століття: ${numberCentury}</div>`)

