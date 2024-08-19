'use strict'

const output = document.querySelector('.page__container')
const numberDayWeek = parseInt(prompt('Ведіть номер дня тижня: '))
const monday = 1,
	tuesday = 2,
	wednesday = 3,
	thursday = 4,
	friday = 5,
	saturday = 6,
	sunday = 7

if (numberDayWeek === monday)
	output.insertAdjacentHTML('beforeend', `<div>Це понеділок</div>`)
else if (numberDayWeek === tuesday)
	output.insertAdjacentHTML('beforeend', `<div>Це вівторок</div>`)
else if (numberDayWeek === wednesday)
	output.insertAdjacentHTML('beforeend', `<div>Це середа</div>`)
else if (numberDayWeek === thursday)
	output.insertAdjacentHTML('beforeend', `<div>Це четвер</div>`)
else if (numberDayWeek === friday)
	output.insertAdjacentHTML('beforeend', `<div>Це п'ятниця</div>`)
else if (numberDayWeek === saturday)
	output.insertAdjacentHTML('beforeend', `<div>Це субота</div>`)
else if (numberDayWeek === sunday)
	output.insertAdjacentHTML('beforeend', `<div>Це неділя</div>`)
else
	output.insertAdjacentHTML('beforeend', `<div class="info">А це щось якось мимо!!!</div>`)
