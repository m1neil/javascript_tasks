'use strict'

const quantityCoins = parseInt(prompt('Ведіть кількість копійок: ', '245'))
const currencyGRN = Math.floor(quantityCoins / 100)
const coins = quantityCoins % 100

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `${currencyGRN} грн. ${coins} копійок`)