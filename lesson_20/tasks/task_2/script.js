'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	for (let i = 1; i <= 5; i++) {
		setTimeout(() => {
			const tank = new Tank(
				120,
				20,
				300,
				'../../../img/tank/hull.png',
				'../../../img/tank/gun.png',
				'../../../img/tank/track.png',
				'../../../img/tank/explosion.png'
			)
			tank.render('.page__container')
		}, 1000 * i);
	}
}

class Tank {
	constructor(initSize, step, speedAnimation, srcImgHull, srcImgGun, srcImgTrack, srcImgExplosion) {
		this.size = initSize
		this.step = step
		this.speedAnimation = speedAnimation
		this.srcImgHull = srcImgHull
		this.srcImgGun = srcImgGun
		this.srcImgTrack = srcImgTrack
		this.srcImgExplosion = srcImgExplosion
		this.positionX = Math.random() * (100 - (initSize / window.innerWidth * 100))
		this.positionY = 0
		this.vectorY = 1
	}

	setNewPositionY() {
		this.positionY += this.step * this.vectorY
		const isMaxPositionY = this.positionY + this.size > window.innerHeight
		const isMinPositionY = this.positionY < 0

		if (isMaxPositionY || isMinPositionY) {
			this.positionY = isMaxPositionY ? window.innerHeight - this.size : 0
			this.changeDirectionY()
			this.frameTank.classList.toggle('tank--rotate', isMaxPositionY)
			this.updatePositionFrameTank(true)
		} else this.updatePositionFrameTank()
	}

	updatePositionFrameTank(isStopInterval = false) {
		this.frameTank.style.top = `${this.positionY / window.innerHeight * 100}%`

		if (isStopInterval) {
			clearInterval(this.intervalMove)
			const timeout =
				this.parseSecondsToMilliseconds(window.getComputedStyle(this.frameTank).transitionDuration)
			setTimeout(() => {
				this.intervalMove = setInterval(() => {
					this.setNewPositionY()
				}, this.speedAnimation);
			}, timeout);
		}
	}

	destroyTank() {
		clearInterval(this.intervalMove)
		this.gunTank.style.transform = window.getComputedStyle(this.gunTank).transform
		this.frameTank.classList.add('tank--destroyed')
		this.frameTank.classList.remove('tank--show')
		const timeout =
			this.parseSecondsToMilliseconds(window.getComputedStyle(this.explosion).animationDuration)
		setTimeout(() => {
			this.frameTank.style.opacity = '0'
			setTimeout(() => {
				this.frameTank.remove()
			}, 800);
		}, timeout);
	}

	parseSecondsToMilliseconds(strValue, number = 0) {
		strValue = strValue.split(', ')[number]
		return strValue.includes('ms') ? parseFloat(strValue) : parseFloat(strValue) * 1000
	}

	changeDirectionY() {
		this.vectorY *= -1
	}

	createTank() {
		const frameTank = document.createElement('div')
		frameTank.className = 'tank tank--show'
		frameTank.style.left = `${this.positionX}%`
		frameTank.style.top = `${this.positionY / window.innerHeight * 100}%`
		frameTank.style.width = `${this.size}px`
		frameTank.style.transition = `transform 3s, top ${this.speedAnimation}ms linear, opacity 0.6s 0.2s`

		const hullTank = document.createElement('img')
		hullTank.className = 'tank__hull'
		hullTank.src = this.srcImgHull
		hullTank.alt = 'hull of tank'
		frameTank.append(hullTank)

		const gunTank = document.createElement('img')
		gunTank.className = 'tank__gun'
		gunTank.src = this.srcImgGun
		gunTank.alt = 'gun of tank'
		this.gunTank = gunTank
		frameTank.append(gunTank)

		const leftTrackTank = document.createElement('img')
		leftTrackTank.className = 'tank__track tank__track--left'
		leftTrackTank.src = this.srcImgTrack
		leftTrackTank.alt = 'left track of tank'
		frameTank.append(leftTrackTank)

		const rightTrackTank = document.createElement('img')
		rightTrackTank.className = 'tank__track tank__track--right'
		rightTrackTank.src = this.srcImgTrack
		rightTrackTank.alt = 'right track of tank'
		frameTank.append(rightTrackTank)

		const explosion = document.createElement('img')
		explosion.className = 'tank__explosion'
		explosion.src = this.srcImgExplosion
		explosion.alt = 'explosion of tank'
		this.explosion = explosion
		frameTank.append(explosion)

		frameTank.addEventListener('click', this.destroyTank.bind(this), { once: true })
		return frameTank
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element by selector - ${selectorContainer}`);
		this.frameTank = this.createTank()
		container.append(this.frameTank)
		this.intervalMove = setInterval(() => {
			this.setNewPositionY()
		}, this.speedAnimation);
	}
}