'use strict'

if (confirm('Розпочати тестування:')) {
	const costProduct = parseFloat(prompt('Ведіть ціну товару'))
	let userSum = 0
	do {
		const summa = parseFloat(prompt('Ведіть суму: '))
		if (isNaN(summa) && confirm('Ви бажаєте скасувати замовлення?'))
			break
		else if (!isNaN(summa)) userSum += summa
	} while (userSum < costProduct);

	if (userSum === costProduct)
		document.querySelector('.page__container').insertAdjacentHTML('beforeend',
			'<div class="info info--green">Дякуємо за замовлення! Приходьте ще!</div>')
}


