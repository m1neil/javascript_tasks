'use strict'

let nameProgram
let extensionFile = prompt('Ведіть розширення файлу')
extensionFile = extensionFile.replace('.', '').toLocaleLowerCase()

switch (extensionFile) {
	case 'html':
		nameProgram = 'Google Chrome'
		break;
	case 'doc':
		nameProgram = 'Microsoft Word'
		break;
	case 'jpeg':
		nameProgram = 'Paint'
		break;
	case 'mp3':
		nameProgram = 'AIMP'
		break;
	case 'xls':
		nameProgram = 'Microsoft Excel'
		break;
	default:
		nameProgram = 'unknown'
		break;
}

if (nameProgram === 'unknown')
	alert('Не відоме нам розширення файлу')
else
	alert(`Файл з розширенням - ${extensionFile} може відкрити програма - ${nameProgram}`)
