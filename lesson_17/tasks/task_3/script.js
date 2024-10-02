'use strict'


class NotificationMessage {
	static refNotification
	#timeout
	#interval
	#output
	#amountNotifications

	constructor(initMessage = 'Your text...', initTimeout = 2000, output) {
		if (NotificationMessage.refNotification)
			return NotificationMessage.refNotification
		this.AmountNotifications = 0
		this.Timeout = initTimeout
		this.Output = output
		this.message = initMessage
		this.#interval = null
	}

	get Output() {
		return this.#output
	}
	set Output(newOutput) {
		if (!newOutput)
			throw new Error('Not fount element!')
		this.#output = newOutput
	}

	get AmountNotifications() {
		return this.#amountNotifications
	}
	set AmountNotifications(newAmount) {
		if (newAmount < 0)
			throw new Error('Amount can`t be negative!')
		this.#amountNotifications = newAmount
	}

	get Timeout() {
		return this.#timeout
	}
	set Timeout(newTimeout) {
		if (newTimeout < 0)
			throw new Error('Timeout can`t be negative!')
		this.#timeout = newTimeout
	}

	start() {
		if (!this.#interval) {
			this.#interval = setInterval(() => {
				this.Output.textContent += `Повідомлення: ${this.message}, кількість повторень: ${++this.AmountNotifications}\n`
				this.Output.style.height = this.Output.scrollHeight - 25 + 'px'
			}, this.Timeout)
		} else {
			this.stop()
			this.start()
		}
	}

	stop() {
		if (!this.#interval) return
		clearInterval(this.#interval)
		this.AmountNotifications = 0
		this.#interval = null
	}
}

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const buttonStartInterval = document.querySelector('#start')
	const buttonStopInterval = document.querySelector('#stop')
	const buttonClearTextNotifications = document.querySelector('#clear')
	const inputNotification = document.querySelector('#notification')
	const outputNotifications = document.querySelector('#notifications')

	try {
		const notification = new NotificationMessage(inputNotification.value, 2000, outputNotifications)

		if (!buttonStartInterval || !buttonStopInterval || !buttonClearTextNotifications)
			throw new Error('Not found element!')

		buttonStartInterval.addEventListener('click', () => {
			notification.start()
			buttonStartInterval.setAttribute('disabled', 'true')
			buttonStopInterval.removeAttribute('disabled')
		})

		buttonStopInterval.addEventListener('click', () => {
			notification.stop()
			buttonStopInterval.setAttribute('disabled', 'true')
			buttonStartInterval.removeAttribute('disabled')
		})

		buttonClearTextNotifications.addEventListener('click', () => {
			outputNotifications.textContent = ''
			outputNotifications.style.removeProperty('height')
		})

		inputNotification.addEventListener('change', () => {
			notification.message = inputNotification.value ? inputNotification.value : 'Your notification....'
		})
	} catch (error) {
		console.error(error.message);
	}
}


