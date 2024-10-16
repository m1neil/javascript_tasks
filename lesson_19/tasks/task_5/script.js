'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const products = [
		{
			title: 'Ноутбук Lenovo IdeaPad Slim 5 16IAH8',
			srcImage: 'https://content.rozetka.com.ua/goods/images/big/334492324.jpg',
			price: '27 999 ₴',
			label: 'топ продаж'
		},
		{
			title: 'Ноутбук Acer Aspire 7 A715-76G-56U7',
			srcImage: 'https://content1.rozetka.com.ua/goods/images/big/362592316.jpg',
			price: '35 995 ₴',
			label: 'топ продаж'
		},
		{
			title: 'Ноутбук ASUS TUF Gaming A15 FA506NC-HN026',
			srcImage: 'https://content.rozetka.com.ua/goods/images/big/410768842.jpg',
			price: '41 999₴',
			label: 'акція'
		},
		{
			title: 'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020',
			srcImage: 'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
			price: '39 499₴',
			label: 'топ продаж'
		},
	]
	document.addEventListener('click', documentActions)
	const container = document.querySelector('.page__container')
	const list = document.createElement('div')
	list.className = 'product-list'
	products.forEach(product => {
		list.append(createProductCard(product))
	})
	container.append(list)
}

function createProductCard({ title, srcImage, price, label }) {
	const container = document.createElement('div')
	container.className = 'card'

	const labelDiv = document.createElement('div')
	labelDiv.className = `card__label`
	if (label === 'акція') labelDiv.classList.add('--stock')
	labelDiv.textContent = label
	container.append(labelDiv)


	const img = document.createElement('div')
	img.className = 'card__img'
	img.innerHTML = `<img src="${srcImage}" alt="${title}">`
	container.append(img)

	const titleProduct = document.createElement('h3')
	titleProduct.className = 'card__title'
	titleProduct.textContent = title
	container.append(titleProduct)

	const priceDiv = document.createElement('div')
	priceDiv.className = 'card__price'
	priceDiv.textContent = price
	container.append(priceDiv)

	return container
}

function documentActions(e) {
	const target = e.target

	if (target.closest('.card'))
		target.closest('.card').classList.toggle('card--border-green')
}