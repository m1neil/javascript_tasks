'use strict'

const names = ["Іван", "Олександр", "Михайло", "Дмитро", "Андрій", "Василь", "Петро", "Юрій", "Богдан", "Тарас"];
const firstLetterNames = names.map(name => name[0])

const output = document.querySelector('.page__container')
output.innerHTML += `<div>Імена: ${names.join(', ')}</div>`
output.innerHTML += `<div>Перші літери імен ${firstLetterNames.join(', ')}</div>`

