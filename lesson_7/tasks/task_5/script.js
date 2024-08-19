'use strict'

const output = document.querySelector('.page__container')

output.insertAdjacentHTML('beforeend', `<div>1 сантиметр в дюймах: ${convertCentimetersToInches(1)}</div>`)
console.log('1 кілограм в фунти:', convertKiloToPounds(56))
console.log('1 кілометр в милі:', convertKilometersToMiles(2))

function convertCentimetersToInches(centimeters) {
	const oneInches = 0.3937008
	return scrappingDozens(centimeters / oneInches)
}

function convertKiloToPounds(kilograms) {
	const onePounds = 0.45
	return scrappingDozens(kilograms / onePounds)
}

function convertKilometersToMiles(kilometers) {
	const oneMile = 1.609344
	return scrappingDozens(kilometers / oneMile, 3)
}

function scrappingDozens(value, quantityZeroAfterDot = 2) {
	return Math.round(value * Math.pow(10, quantityZeroAfterDot)) / Math.pow(10, quantityZeroAfterDot)
}