'use strict'

const quantityMonths = parseInt(prompt('Ведіть кількість місяців, які пройшли від деякого моменту часу', '28'))
const years = Math.floor(quantityMonths / 12)
const months = quantityMonths % 12
const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `Пройшло: ${years} роки і ${months}  місяці`)