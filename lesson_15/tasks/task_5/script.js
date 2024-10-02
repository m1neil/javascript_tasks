'use strict'

class DanceHead {
	constructor(boys, girls) {
		this.boys = boys
		this.girls = girls
	}

	getRandomItem(array) {
		const randomIndex = Math.floor(Math.random() * array.length)
		return array[randomIndex]
	}

	getRandomBoy() {
		return this.getRandomItem(this.boys)
	}

	getRandomGirl() {
		return this.getRandomItem(this.girls)
	}

	printPair(output) {
		output.insertAdjacentHTML('beforeend',
			`<div>${this.getRandomBoy()} - ${this.getRandomGirl()}</div>`)
	}

	run(output) {
		setInterval(() => this.printPair(output), 5000)
	}
}



if (confirm('Розпочати тестування?')) {
	const output = document.querySelector('.page__container');
	const boys = ["Олександр", "Дмитро", "Максим", "Артем", "Іван"];
	const girls = ["Анна", "Олена", "Марія", "Катерина", "Вікторія"];
	const danceHead = new DanceHead(boys, girls)
	danceHead.run(output)
}