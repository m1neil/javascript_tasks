'use strict'

// .page__container

// Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const date = new Date()
	console.log(date.toLocaleString('en-GB', { timeZone: 'Europe/London' }))
	console.log(date.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }))
	console.log(date.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }))
}