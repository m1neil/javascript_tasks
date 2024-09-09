'use strict'

if (confirm('Розпочати тестування')) {
	const carNumbers = ["А1234В", "А5678С", "А9101К", "А2345Н", "А6789Р", "АА1234А", "ВВ5678В", "СС9101С", "КК2345К", "НН6789Н", "РР3456Р", "ЕЕ7890Е", "ІІ1234І", "ОО5678О", "ХХ9101Х", "ММ2345М", "ТТ6789Т", "А123456", "В567890", "С910111"]

	let quantityNumbersStartOnA = 0,
		quantityNumbersFirstLetterEqualLastLetter = 0,
		quantityNumbersLengthMoreFiveSymbols = 0

	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].charCodeAt(0) === 1040)
			quantityNumbersStartOnA++
		if (isFirstLetterEqualLastLetter(carNumbers[i]))
			quantityNumbersFirstLetterEqualLastLetter++
		if (carNumbers[i].length > 5)
			quantityNumbersLengthMoreFiveSymbols++
	}

	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML(`beforeend`, `
		<div>Кількість номерів які починаються на літеру 'А' - ${quantityNumbersStartOnA}</div>
		<div>Кількість номерів у яких перша та остання літера співпадають - ${quantityNumbersFirstLetterEqualLastLetter}</div>
		<div>Кількість номерів які складають більше ніж 5 символів - ${quantityNumbersLengthMoreFiveSymbols}</div>
	`)

	function isFirstLetterEqualLastLetter(string) {
		return string[0] === string[string.length - 1]
	}
}