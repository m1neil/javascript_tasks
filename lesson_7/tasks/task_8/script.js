'use strict'

const pathToImage = 'https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297150.jpg'
const title = '4k Wallpaper Japan Images'
const link = 'https://fls.guru/'

function createImageLink(pathToImage, title, link) {
	const a = document.createElement('a')
	a.href = link
	a.title = title
	a.target = '_blank'
	a.style.cssText = `
		inline-size: ${600 / 16}rem;
		block-size: ${400 / 16}rem;
		border-radius: ${8 / 16}rem;
		overflow: hidden;
	`
	a.insertAdjacentHTML('beforeend', 
		`<img style="inline-size: 100%; block-size:100%; object-fit: cover;" src="${pathToImage}" alt="${title}">`)
	return a
}

const output = document.querySelector('.page__container')
output.insertAdjacentElement('beforeend', createImageLink(pathToImage, title, link))