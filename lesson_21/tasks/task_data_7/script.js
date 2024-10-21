'use strict'

// .page__container

window.addEventListener('load', windowLoaded)
function windowLoaded() {
	const studentsList = [
		{ name: "Іван Петров", birthDate: "15.03.2000" },
		{ name: "Олена Коваленко", birthDate: "22.07.1999" },
		{ name: "Сергій Іванов", birthDate: "10.11.1998" },
		{ name: "Марія Сидоренко", birthDate: "05.01.2001" },
		{ name: "Андрій Ткаченко", birthDate: "30.09.2000" }
	]
	const container = document.querySelector('.page__container')
	container.append(createStudentsList(studentsList))

	const { name, birthDate } = getElderStudent(studentsList)

	const elderStudentElement = document.createElement('div')
	elderStudentElement.textContent = `Самий старший учень: ${name}, дата народження: ${birthDate}`
	container.append(elderStudentElement)
}

function getElderStudent(list) {
	if (!Array.isArray(list))
		throw new TypeError('An array was not passed to the function!')

	return list.reduce((prevStudent, currentStudent, index) => {
		if (!index) return currentStudent
		const dateBirthDateCur = convertDateToCorrectFormat(currentStudent.birthDate)
		const dateBirthDatePrev = convertDateToCorrectFormat(prevStudent.birthDate)
		return dateBirthDatePrev > dateBirthDateCur ? currentStudent : prevStudent
	}, {})
}

function convertDateToCorrectFormat(strDate) {
	const birthDateStrCur = strDate.split('.').reverse().join('-')
	return new Date(birthDateStrCur)
}

function createStudentsList(list) {
	const ulElement = document.createElement('ol')
	ulElement.className = 'list-page'

	list.forEach(({ name, birthDate }) => {
		const itemList = document.createElement('li')
		itemList.className = 'list-page__item'
		itemList.textContent = `Ім'я: ${name}, дата народження: ${birthDate}`
		ulElement.append(itemList)
	})

	return ulElement
}