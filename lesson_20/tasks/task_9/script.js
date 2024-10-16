'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const words = [
		{
			id: 0,
			en: 'table',
			ua: 'стіл'
		},
		{
			id: 1,
			en: 'car',
			ua: 'автомобіль'
		},
		{
			id: 2,
			en: 'bus',
			ua: 'автобус'
		},
		{
			id: 3,
			en: 'man',
			ua: 'чоловік'
		},
		{
			id: 4,
			en: 'boy',
			ua: 'хлопець'
		},
	]

	const translator = new Translator(words, 5)
	translator.render('.page__container')
}

class Translator {
	constructor(words, amountCheckWords) {
		this.words = words
		this.amountCheckWords = amountCheckWords
		this.userChoice = {
			en: '',
			ua: ''
		}
	}

	checkUserChoice() {
		const isCorrectAnswer = this.words.some(word =>
			word.en === this.userChoice.en && word.ua === this.userChoice.ua
		)

		const activeButtons = this.wrapper.querySelectorAll('.lang-list__button.--active')

		if (isCorrectAnswer) {
			this.wrapper.classList.add('--correct-answer')
			setTimeout(() => {
				this.wrapper.classList.remove('--correct-answer')
				activeButtons.forEach(button => button.parentElement.remove())
				this.wrapper.classList.remove('--check')
			}, 1000);
		} else {
			this.wrapper.classList.add('--wrang-answer')
			setTimeout(() => {
				this.wrapper.classList.remove('--wrang-answer')
				activeButtons.forEach(button => button.classList.remove('--active'))
				this.wrapper.classList.remove('--check')
			}, 1000);
		}

		for (const key in this.userChoice) {
			this.userChoice[key] = ''
		}
	}

	markUserAnswer(e, lang) {
		const target = e.target

		if (target.closest('.lang-list__button') && !this.wrapper.classList.contains('--check')) {
			const button = target.closest('.lang-list__button')
			if (button.classList.contains('--active'))
				return
			const parentList = target.closest('.lang-list')
			const prevActiveButton = parentList.querySelector('.lang-list__button.--active')
			if (prevActiveButton)
				prevActiveButton.classList.remove('--active')

			button.classList.add('--active')
			this.userChoice[lang] = button.textContent

			if (this.userChoice.en && this.userChoice.ua) {
				this.wrapper.classList.add('--check')
				this.checkUserChoice()
			}
		}
	}


	getRandomWords() {
		if (this.amountCheckWords === this.words.length)
			return this.words

		const listRandomWords = []

		for (let indexWord = 0; indexWord < this.amountCheckWords;) {
			const randomIndexWord = Math.floor(Math.random() * this.words.length)
			const word = this.words[randomIndexWord]
			const findIndexWord = listRandomWords.findIndex(randomWord => randomWord?.id === word.id)
			if (findIndexWord === -1) {
				listRandomWords.push(word)
				indexWord++
			}
		}

		return listRandomWords
	}

	mixWords(listWords) {
		const lengthArray = listWords.length
		for (let indexWord = 0; indexWord < lengthArray;) {
			const randomPosition = Math.floor(Math.random() * lengthArray)

			if (randomPosition !== indexWord) {
				let t = listWords[randomPosition]
				listWords[randomPosition] = listWords[indexWord]
				listWords[indexWord] = t
				indexWord++
			}
		}

		return listWords
	}

	createListWords(listWords, lang) {
		const list = document.createElement('ul')
		list.className = 'lang-list'
		list.addEventListener('click', e => this.markUserAnswer(e, lang))

		listWords.forEach(word => {
			const itemList = document.createElement('li')
			itemList.className = 'lang-list__item'

			const button = document.createElement('button')
			button.className = 'lang-list__button'
			button.type = 'button'
			button.textContent = word
			itemList.append(button)

			list.append(itemList)
		})
		return list
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element by selector - ${selectorContainer}`)

		const listRandomWords = this.getRandomWords()
		const engWords = this.mixWords(listRandomWords.map(word => word.en))
		const uaWords = this.mixWords(listRandomWords.map(word => word.ua))

		const wrapper = document.createElement('div')
		wrapper.className = 'translator'
		wrapper.append(this.createListWords(engWords, 'en'))
		wrapper.append(this.createListWords(uaWords, 'ua'))
		this.wrapper = wrapper
		container.append(wrapper)
	}
}