'use strict'

const tax = 20;
let moneyReceived = parseFloat(prompt('Скільки грошей (без податку) нарахувати за роботу?'))
moneyReceived -= moneyReceived * tax / 100

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend',
	`<div>Робітник отримає гроші з урахуванням податку ${tax}% у розмірі: ${moneyReceived.toFixed(2)} грн.</div>`
)
