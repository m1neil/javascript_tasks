'use strict'

// 

class Baner {
	constructor(images) {
		this.images = images ?? []
	}

	getImage() {
		const randomIndex = Math.floor(Math.random() * (this.images.length))
		return this.images[randomIndex]
	}

	render(output) {
		const image = this.getImage()
		if (!image) return
		output.insertAdjacentHTML('beforeend',
			`<a class="banner" href="${image.link}" target="_blank"><img src="${image.src}" alt="${image.title}"></a>`)
	}

}

const images = [
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2023/09/29/14/58/road-8284023_1280.jpg',
		link: 'https://pixabay.com/photos/road-mountains-glacier-nature-8284023/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/09/03/09/03/deer-9018759_1280.jpg',
		link: 'https://pixabay.com/photos/deer-nature-animal-wildlife-forest-9018759/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/09/05/08/24/mountain-9024209_1280.jpg',
		link: 'https://pixabay.com/photos/mountain-lake-landscape-nature-9024209/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/09/05/17/31/moutains-9025523_1280.jpg',
		link: 'https://pixabay.com/photos/moutains-lake-boat-nature-9025523/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/08/06/14/43/dolphin-8949505_1280.jpg',
		link: 'https://pixabay.com/photos/dolphin-ocean-atlantic-buzzer-8949505/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2023/09/13/07/25/fence-8250307_1280.jpg',
		link: 'https://pixabay.com/photos/fence-metal-green-ornament-8250307/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/09/02/20/49/goat-9017896_1280.jpg',
		link: 'https://pixabay.com/photos/goat-animal-mammal-horns-ruminant-9017896/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/09/02/15/06/sunset-9017041_1280.jpg',
		link: 'https://pixabay.com/photos/sunset-tea-hill-asia-vietnam-9017041/'
	},
	{
		title: 'image',
		src: 'https://cdn.pixabay.com/photo/2024/09/05/12/55/white-cheeked-turaco-9024880_1280.jpg',
		link: 'https://pixabay.com/photos/white-cheeked-turaco-bird-animal-9024880/'
	},
]

const output = document.querySelector('.page__container');
const banner = new Baner(images)
banner.render(output)