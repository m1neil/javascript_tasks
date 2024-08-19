'use strict'

let firstPositionImage,
	secondPositionImage,
	thirdPositionImage

const out = document.querySelector('.page__container')
const images = document.createElement('div')
images.classList.add('images-game')

for (let i = 1; i <= 3; i++) {
	const randomImageId = Math.floor(Math.random() * 4 + 1)
	switch (i) {
		case 1:
			firstPositionImage = randomImageId
			break
		case 2:
			secondPositionImage = randomImageId
			break
		case 3:
			thirdPositionImage = randomImageId
			break
	}

	images.insertAdjacentHTML('beforeend',
		`<div class="images-game__item">
			<img src="img/image-${randomImageId}.png" alt="image #${i}">
		</div>`
	)
}

out.insertAdjacentElement('beforeend', images)

if (firstPositionImage === secondPositionImage && firstPositionImage === thirdPositionImage) {
	let userPrise = 0
	switch (firstPositionImage) {
		case 1: userPrise = 100
			break
		case 2: userPrise = 200
			break
		case 3: userPrise = 500
			break
		case 4: userPrise = 1000
			break
	}
	alert(`Ваш приз складає - ${userPrise} грн.`)
} else {
	alert(`Ви програли!!!`)
}