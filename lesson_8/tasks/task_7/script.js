'use strict'

if (confirm('Розпочати тестування?')) {
	const paymentDuringYear = getPaymentDuringYear()
	const sumForAllYear = getSumForSomePeriod(paymentDuringYear)
	const sumForFirstHalfYear = getSumForSomePeriod(paymentDuringYear, 0, 6)
	const sumForSecondHalfYear = getSumForSomePeriod(paymentDuringYear, 6)
	const sumForSummer = getSumForSomePeriod(paymentDuringYear, 5, 8)
	const sumForSecondNeighborhood = getSumForSomePeriod(paymentDuringYear, 3, 6)
	const sumForEvenMonths = getSumForSomePeriod(paymentDuringYear, 0, paymentDuringYear.length, 1, true)
	const sumForMonthsStartingSeason = getSumForSomePeriod(paymentDuringYear, 2, paymentDuringYear.length, 3)

	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML('beforeend', `
		<div class="page__text">По місячна плата протягом року: ${paymentDuringYear.join(', ')}</div>
		<ol class="list-page">
			<li class="list-page__item">Сума за весь рік: ${sumForAllYear}</li>
			<li class="list-page__item">Сума у першій половині року: ${sumForFirstHalfYear}</li>
			<li class="list-page__item">Сума у другій половині року: ${sumForSecondHalfYear}</li>
			<li class="list-page__item">Сума за літо: ${sumForSummer}</li>
			<li class="list-page__item">Сума за ІІ квартал: ${sumForSecondNeighborhood}</li>
			<li class="list-page__item">Сума за парні місяці (з парними номерами): ${sumForEvenMonths}</li>
			<li class="list-page__item">Сума за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${sumForMonthsStartingSeason}</li>
		</ol>
	`)

	function getSumForSomePeriod(payment, startIndex = 0, lastIndex = false, step = 1, isEvenMonths = false) {
		let sum = 0
		const length = lastIndex === false ? payment.length : lastIndex
		if (!isEvenMonths) {
			for (let i = startIndex; i < length; i += step) {
				sum += payment[i]
			}
		} else {
			for (let i = 0; i < 12; i++) {
				if (isEvenNumber(i + 1))
					sum += payment[i]
			}
		}
		return sum
	}

	function isEvenNumber(number) {
		return number % 2 === 0
	}

	function getPaymentDuringYear() {
		const payment = []
		for (let i = 0; i < 12; i++) {
			payment.push(getRandomValue(5, 10))
		}
		return payment
	}

	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}
}