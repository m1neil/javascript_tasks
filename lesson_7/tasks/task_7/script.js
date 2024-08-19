'use strict'

// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

const output = document.querySelector('.page__container')

printHtmlElement(
	output,
	getRandomImage(
		'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
		'https://cdn.wallpapersafari.com/0/78/sFqKlo.jpg',
		'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
		'https://www.w3schools.com/w3css/img_lights.jpg'
	)
)

function getRandomImage(pathToImg, pathToImg2, pathToImg3, pathToImg4) {
	const img = document.createElement('img')
	img.alt = 'random image'
	img.style.cssText = `
		inline-size: ${500 / 16}rem;
		block-size: ${400 / 16}rem;
		object-fit: cover;
		border-radius: ${8 / 16}rem;
	`

	switch (getRandomValue()) {
		case 1:
			img.src = pathToImg
			break;
		case 2:
			img.src = pathToImg2
			break;
		case 3:
			img.src = pathToImg3
			break;
		case 4:
			img.src = pathToImg4
			break;
	}

	return img
}

function getRandomValue(min = 1, max = 4) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function printHtmlElement(output, element) {
	output.insertAdjacentElement('beforeend', element)
}