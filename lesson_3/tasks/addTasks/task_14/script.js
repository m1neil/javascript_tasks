'use strict'

const numberDayOfWeek = parseInt(prompt('Ведіть номер дня тижня', '5'))
const pastDays = parseInt(prompt('Ведіть кількість днів які пройшли з моменту веденого дня тижня', '13'))
const daysInWeek = 7
const result = (numberDayOfWeek + pastDays) % 7 + 1
const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend',
	`Ведений номер дня тижня: ${numberDayOfWeek} через ${pastDays} днів буде: ${getNameOfDayWeek(result)}`
)

function getNameOfDayWeek(numberDayOfWeek) {
	switch (numberDayOfWeek) {
		case 1:
			return 'Понеділок'
		case 2:
			return 'Вівторок'
		case 3:
			return 'Середа'
		case 4:
			return 'Четвер'
		case 5:
			return 'П\'ятниця'
		case 6:
			return 'Субота'
		case 7:
			return 'Неділя'
	}
}

