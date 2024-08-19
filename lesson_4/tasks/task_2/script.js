'use strict'

const maxValueInterval = 100,
	minValueInterval = 1
const output = document.querySelector('.page__container')
const maxInterval = Math.floor(Math.random() * (maxValueInterval - minValueInterval + 1) + minValueInterval)
const minInterval = Math.floor(Math.random() * (maxInterval - minValueInterval) + minValueInterval)
const guessNumber = parseInt(prompt('Відгадайте число яке знаходиться в проміжку', '45'))

let result = ''

if (guessNumber >= minInterval && guessNumber <= maxInterval ||
	guessNumber >= minInterval - 10 && guessNumber <= maxInterval ||
	guessNumber <= maxInterval + 10 && guessNumber >= minInterval
)
	result = 'Ви відгадали числовий інтервал'
else
	result = 'Нажаль ви не відгадали числовий інтервал'

output.insertAdjacentHTML('beforeend', `<div>${result}</div>`)