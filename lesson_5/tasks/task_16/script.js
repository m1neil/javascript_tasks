'use strict'

const quantityColumn = 3
const quantityRow = 3
const cells = quantityColumn * quantityRow
const positionShip = Math.floor(Math.random() * cells + 1)
let quantityShells = 5
let healthShip = 1

do {
	const numberCel = parseInt(prompt(`Кількість снарядів: ${quantityShells}, Кількість клітинок: ${cells}, Здоров'я корабля: ${healthShip}, Номер комірки для пострілу: `))

	if (isNaN(numberCel) || numberCel <= 0 || numberCel > cells) {
		alert('Не коректне значення або постріл поза зоную поля')
		continue
	}

	if (numberCel === positionShip) {
		alert('Корабель втоплено. Гра закінчена!')
		break
	} else alert('Снаряд не влучив в ціль!')

	quantityShells--
	if (quantityShells === 0)
		alert('Снаряди закінчились гра закінчена')

} while (quantityShells > 0 && healthShip > 0);


