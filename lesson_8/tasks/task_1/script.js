'use strict'

if (confirm('Розпочати тестування')) {

	const quantityGrades = parseInt(prompt(`Ведіть кількість оцінок:`))
	const grades = getArrayWithRandomGrades(quantityGrades)
	const middleAverageScore = getMiddleAverageScore(grades)
	const pupilCategory = getCategoryPupil(grades)

	const output = document.querySelector('.page__container')
	output.innerHTML += `
		<div>Оцінки: ${grades}</div>
		<div>Середній бал: ${middleAverageScore}</div>
		<div>Категорія учня: ${pupilCategory}</div>
	`
	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}

	function getArrayWithRandomGrades(quantityGrades) {
		const grades = []
		for (let i = 0; i < quantityGrades; i++) {
			grades.push(getRandomValue(1, 5))
		}
		return grades
	}

	function getMiddleAverageScore(grades) {
		let sumGrades = 0
		for (let i = 0; i < grades.length; i++) {
			sumGrades += grades[i]
		}
		return Math.floor(sumGrades / grades.length * 100) / 100
	}

	function getCategoryPupil(grades) {
		let minGrade = grades[0]
		for (let i = 1; i < grades.length; i++) {
			if (minGrade > grades[i])
				minGrade = grades[i]
			if (minGrade === 1) break
		}
		let category = ''
		switch (minGrade) {
			case 5:
				category = 'Відмінник'
				break
			case 4:
				category = 'Xорошист'
				break
			case 3:
				category = 'Трійочник'
				break
			case 2:
			case 1:
				category = 'Двійочник'
				break
		}
		return category
	}
}