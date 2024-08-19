'use strict'

const out = document.querySelector('.page__container')
const form = document.createElement('form')
form.classList.add('form')
for (let i = 1; i <= 10; i++) {
	form.insertAdjacentHTML('beforeend',
		`
		<div class="form__row">
			<label class="form__label">
				Product #${i}
				<input type="text">
			</label>
		</div>
		`)
}
out.insertAdjacentElement('beforeend', form)