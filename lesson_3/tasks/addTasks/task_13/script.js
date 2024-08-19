'use strict'

const days = parseInt(prompt('Ведіть кількість днів:', '15'))
const fullWeeks = Math.floor(days / 7)
const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `Кількість повних тижнів - ${fullWeeks} в веденій кількості днів - ${days} `)