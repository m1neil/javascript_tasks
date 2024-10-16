'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const buttonCreateStars = document.querySelector('#generate-stars')
	if (buttonCreateStars) {
		try {
			buttonCreateStars.addEventListener('click', generateStars)
		} catch (error) {
			console.error(error.message)
		}
	}
}

function removeStars() {
	const prevStars = document.querySelectorAll('.star')
	if (prevStars.length)
		prevStars.forEach(star => star.remove())
}

function generateStars() {
	removeStars()
	const amountStars = parseInt(document.querySelector('#amount-starts').value)
	if (isNaN(amountStars))
		throw new Error("Not correct data!!")
	else if (amountStars <= 0)
		throw new Error('Amount stars must be more than zero!')

	for (let index = 0; index < amountStars; index++) {
		setTimeout(() => {
			const star = new Star('.page__container', 'https://www.svgrepo.com/show/13695/star.svg', 15, 70, 30, 700, 'star')
			star.render()
		}, index * 200);
	}
}

class Star {
	constructor(selectorContainer, imgSrc, minSize, maxSize, step, speedAnimation, cssClass) {
		this.imgSrc = imgSrc
		this.minSize = minSize
		this.maxSize = maxSize
		this.step = step
		this.speedAnimation = speedAnimation
		this.cssClass = cssClass
		this.currentSize = minSize
		this.container = document.querySelector(selectorContainer)
		if (!this.container)
			throw new Error(`Not found element by selector - ${selectorContainer}!`);
	}

	setNewSize() {
		this.currentSize += this.step

		if (this.currentSize >= this.maxSize) {
			clearInterval(this.interval)
			this.currentSize = this.maxSize
		}

		this.updateSize()

		if (this.currentSize === this.maxSize) {
			setTimeout(() => {
				this.clearAnimation()
				setTimeout(() => {
					this.currentSize = this.minSize
					this.updateSize()
					this.setRandomPosition()
					this.updatePosition()
					this.setAnimation()
					this.interval = setInterval(() => {
						this.setNewSize()
					}, this.speedAnimation);
				}, this.speedAnimation);
			}, this.speedAnimation);
		}
	}

	setRandomPosition() {
		this.positionX = Math.random() * (100 - this.maxSize / window.innerWidth * 100)
		this.positionY = Math.random() * (100 - this.maxSize / window.innerHeight * 100)
	}

	updatePosition() {
		this.img.style.left = `${this.positionX}%`
		this.img.style.top = `${this.positionY}%`
	}

	updateSize() {
		this.img.style.width = `${this.currentSize}px`
	}

	createStar() {
		const img = document.createElement('img')
		img.className = this.cssClass
		img.alt = 'star'
		img.src = this.imgSrc
		img.style.position = 'fixed'
		img.style.width = `${this.currentSize}px`
		img.style.aspectRatio = 1
		return img
	}

	setAnimation() {
		this.img.style.transitionProperty = 'width, height'
		this.img.style.transitionTimingFunction = 'linear'
		this.img.classList.remove('--hide')
		this.img.classList.add('--show')
		this.img.style.animationDelay = `${this.speedAnimation}ms`
		this.img.style.transitionDuration = `${this.speedAnimation}ms`
	}

	clearAnimation() {
		this.img.style.removeProperty('transition-property')
		this.img.style.removeProperty('transition-duration')
		this.img.style.removeProperty('transition-timing-function')
		this.img.classList.add('--hide')
		this.img.classList.remove('--show')
		this.img.style.removeProperty('transition-delay')
		this.img.style.removeProperty('animation-delay')
	}

	render() {
		this.img = this.createStar()
		this.setAnimation()
		this.setRandomPosition()
		this.updatePosition()
		this.container.append(this.img)
		this.interval = setInterval(() => {
			this.setNewSize()
		}, this.speedAnimation);
	}
}
