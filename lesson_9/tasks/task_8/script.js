'use strict'

const numbers = [
	"А5678С", "А2345Н", "А6789Р", "ВВ5678В", "СС9101С", "КК2345К", "НН6789Н", "РР3456Р", "ЕЕ7890Е", "ІІ1234І", "ОО5678О", "ХХ9101Х", "ММ2345М", "А9101К", "АА1234А", "ТТ6789Т",
	"А123456", "В567890", "С910111", "А1234В"
];

const numbersStartOnA = []
numbers.forEach(number => {
	if (number.charCodeAt(0) === 1040)
		numbersStartOnA.push(number)
})

const output = document.querySelector('.page__container')
output.innerHTML += `<div>Номера: ${numbers.join(', ')}</div>`
output.innerHTML += `<div>Номера які починаються на літеру А: ${numbersStartOnA.join(', ')}</div>`

