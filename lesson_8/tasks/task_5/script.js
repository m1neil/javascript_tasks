'use strict'

if (confirm('Розпочати тестування')) {

	const pupilGrades = getGradesPupil(10)
	let quantityTwoGrades = 0,
		quantityGoodGrades = 0,
		quantityGradesLessMiddle = 0

	for (let i = 0; i < pupilGrades.length; i++) {
		if (pupilGrades[i] >= 4 && pupilGrades[i] <= 5)
			quantityGoodGrades++
		if (pupilGrades[i] < 3) {
			quantityGradesLessMiddle++
			if (pupilGrades[i] === 2)
				quantityTwoGrades++
		}
	}

	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML('beforeend', `
	<div>Оцінки учня: ${pupilGrades.join(', ')}</div>
	<div>Кількість двійок: ${quantityTwoGrades}</div>
	<div>Кількість хороших оцінок: ${quantityGoodGrades}</div>
	<div>Кількість оцінок нижче середнього: ${quantityGradesLessMiddle}</div>
	`)

	function getGradesPupil(quantityGrades) {
		const grades = []
		for (let i = 0; i < quantityGrades; i++) {
			grades.push(getRandomValue(1, 5))
		}
		return grades
	}


	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}
}