'use strict'

class Composition {
	constructor(initGoods = []) {
		this.goods = initGoods
	}

	registrationNewProduct(title, unitMeasurement, amount, firm) {
		if (!title)
			throw new Error('Product must have a title!')
		this.goods.push(new Product(title, unitMeasurement, amount, firm))
	}

	decreaseAmountProduct(titleProduct, amount) {
		if (!titleProduct || !amount)
			throw new Error('Not set all required field!')
		titleProduct = titleProduct.toLowerCase()
		const product = this.goods.find(product => product.title.toLowerCase() === titleProduct)
		if (!product)
			throw new Error(`No product with that name was found: ${titleProduct}`)
		else if (product.Amount < amount)
			throw new Error('In the composition of the wrong amount of goods')
		product.Amount -= amount
	}

	filterByTitleProduct(titleProduct) {
		titleProduct = titleProduct.toLowerCase()
		return this.goods.filter(product => product.title.toLowerCase() === titleProduct)
	}

	filterByTitleFirm(titleFirm) {
		titleFirm = titleFirm.toLowerCase()
		return this.goods.filter(product =>
			product.firm.title.toLowerCase() === titleFirm
		)
	}

	toString(separator = '') {
		return this.goods.join(separator)
	}

	printGoods(output, data, tag = 'ul', className = "list") {
		if (!output)
			throw new Error('not found element!')
		else if (data && !Array.isArray(data))
			throw new Error('Need array!')
		const list = document.createElement(tag)
		list.className = className
		const goodsArray = data ? data : this.goods
		goodsArray.forEach(product => {
			const li = document.createElement('li')
			li.classList.add(`${className}__item`)
			li.textContent = product
			list.append(li)
		})
		output.append(list)
	}
}

class Product {
	#amount
	constructor(initTitle, initUnitMeasurement, initAmount, initFirm) {
		this.title = initTitle ?? 'title'
		this.unitMeasurement = initUnitMeasurement ?? 'not set unit measurement'
		this.Amount = initAmount ?? 0
		this.firm = new Firm(initFirm?.title, initFirm?.registrationNumber)
	}

	get Amount() {
		return this.#amount
	}
	set Amount(newAmount) {
		if (newAmount < 0)
			throw new Error("Amount can't be negative!");
		this.#amount = newAmount
	}

	toString() {
		return `Продукт: ${this.title}; одиниця виміру: ${this.unitMeasurement}; кількість: ${this.Amount}; фірма: ${this.firm}`
	}
}

class Firm {
	constructor(initTitle = 'title firm', initRegistrationNumber = 'not set registration number') {
		this.title = initTitle
		this.registrationNumber = initRegistrationNumber
	}

	toString() {
		return `Назва: ${this.title}; реєстраційний номер: ${this.registrationNumber}`
	}
}

try {
	const products = [
		new Product('Навушники Apple AirPods', 'грами', 30, { title: 'Apple', registrationNumber: 'MXP63ZE' }),
		new Product('Мобільний телефон Samsung Galaxy A55', 'грами', 15, { title: 'Samsung', registrationNumber: 'A556BLVCEUC' })
	]

	const output = document.querySelector('.page__container')
	const composition = new Composition(products)
	composition.printGoods(output)
	composition.decreaseAmountProduct('Мобільний телефон Samsung Galaxy A55', 15)
	composition.printGoods(output)

	composition.registrationNewProduct('Миша Logitech G102 Lightsync USB Black', 'грами', 57,
		{ title: 'Logitech', registrationNumber: '910-005823' })
	composition.printGoods(output)

	const productsByTitleProduct = composition.filterByTitleProduct('миша Logitech G102 Lightsync USB Black')
	composition.printGoods(output, productsByTitleProduct)
	const productsByTitleFirm = composition.filterByTitleFirm('samsung')
	composition.printGoods(output, productsByTitleFirm)
} catch (error) {
	console.error(error.message)
}






