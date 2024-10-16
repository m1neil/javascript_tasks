'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	for (let i = 1; i <= 70; i++) {
		const snowflake = new Snowflake('../../../img/snowflake.svg', 50, 100)
		setTimeout(() => {
			snowflake.render('.page__container')
		}, i * 100);
	}

}

class Snowflake {
	constructor(srcImg, sizeBlock, step) {
		this.srcImg = srcImg
		this.sizeBlock = sizeBlock
		this.step = step
		this.speed = this.getRandomValue()
		this.positionY = -this.sizeBlock
		this.positionX = this.getRandomValue(0, window.innerWidth - sizeBlock)
	}

	increasePositionY() {
		if (this.img.classList.contains('go-top')) {
			this.img.classList.remove('go-top')
			this.img.style.transitionDuration = `${this.speed}ms`
		}
		this.positionY += this.step
		if (this.positionY > window.innerHeight + this.step) {
			this.img.style.transitionDuration = '0s'
			this.positionY = -this.sizeBlock
			this.img.classList.add('go-top')
		}
		this.updatePositionImg()
	}

	updatePositionImg() {
		this.img.style.top = `${this.positionY}px`
	}

	getRandomValue(minValue = 600, maxValue = 1200) {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element! selector ${selectorContainer}`);
		this.img = document.createElement('img')
		this.img.src = this.srcImg
		this.img.alt = 'snowflake'
		this.img.className = 'snowflake'
		this.img.style.position = 'fixed'
		this.img.style.left = `${this.positionX}px`
		this.img.style.top = `${this.positionY}px`
		this.img.style.width = `${this.sizeBlock}px`
		this.img.style.aspectRatio = '1'
		this.img.style.objectFit = 'contain'
		this.img.style.transitionDuration = `${this.speed}ms`
		container.append(this.img)
		setInterval(() => {
			this.increasePositionY()
		}, this.speed);
	}
}