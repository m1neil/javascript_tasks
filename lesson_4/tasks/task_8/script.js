'use strict'

const numberSidesPolygon = parseInt(prompt('Ведіть кількість сторін багатокутника'))
let nameFigure

if (numberSidesPolygon > 2) {
	switch (numberSidesPolygon) {
		case 3:
			nameFigure = '«трикутник»'
			break;
		case 4:
			nameFigure = '«чотирикутник»'
			break;
		case 5:
			nameFigure = '«п’ятикутинк»'
			break;
		case 6:
			nameFigure = '«шестикутник»'
			break;
		default:
			nameFigure = 'Якийсь багатокутник'
			break;
	}
	alert(`Ця фігура - ${nameFigure}`)
}
else
	alert('Фігура повинна будуватися як найменш з 3 сторін ')

