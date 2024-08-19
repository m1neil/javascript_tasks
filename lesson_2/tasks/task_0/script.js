'use strict'

window.addEventListener('load', () => {
	const a = +prompt('Ведіть а:')
	const b = +prompt('Ведіть b:')
	const c = +prompt('Ведіть c:')

	const output = document.querySelector('.page__result')

	if (a && b && c) {
		const s1 = a + 12 + b
		const s2 = Math.sqrt((a + b) / (2 * a))
		const s3 = Math.cbrt((a + b) * c)
		const s4 = Math.sin(a / -b)
		const list = `
			<ol class="list-page">
				<li class="list-page__item">S<sub>1</sub> = ${round(s1)}</li>
				<li class="list-page__item">S<sub>2</sub> = ${round(s2)}</li>
				<li class="list-page__item">S<sub>3</sub> = ${round(s3)}</li>
				<li class="list-page__item">S<sub>4</sub> = ${round(s4)}</li>
			</ol>	
		`
		output.insertAdjacentHTML('beforeend', list)
	} else {
		output.innerHTML = '<div class="info">Не всі зміні ведені!!!</div>'
	}
})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
