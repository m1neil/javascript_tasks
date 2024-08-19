'use strict'

const seconds = parseInt(prompt('Ведіть кількість секунд які пройшли з початку доби', '7200'))
const minutes = Math.floor(seconds / 60 % 60)
const hours = Math.floor(seconds / 60 / 60 % 24)
const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend', `Години: ${hours}, хвилини: ${minutes}`)
