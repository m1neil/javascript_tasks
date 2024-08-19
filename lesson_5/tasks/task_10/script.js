'use strict'

const out = document.querySelector('.page__container')
const numberParagraphs = parseInt(prompt('Скільки абзаців вивести?', '4'))

const paragraphs = document.createElement('section')

if (numberParagraphs > 0) {
	for (let numberSection = 1; numberSection <= numberParagraphs; numberSection++) {
		paragraphs.insertAdjacentHTML('beforeend', `<h1>Заголовок ${numberSection}</h1>`)
		for (let numberParagraph = 0; numberParagraph < numberSection; numberParagraph++) {
			paragraphs.insertAdjacentHTML('beforeend', `<p>Розділ ${numberSection}, параграф ${numberParagraph + 1}</p>`)
		}
		paragraphs.insertAdjacentHTML('beforeend', '<hr>')
	}
}

out.insertAdjacentElement('beforeend', paragraphs)