'use strict'

const nameFirstChild = prompt('Ім\'я першої дитини', 'Дмитро')
const quantitySweetsFirstChild = parseInt(prompt(`Кількість цукерок яке має ${nameFirstChild}`, '10'))
const nameSecondChild = prompt('Ім\'я другої дитини', 'Владислав')
const quantitySweetsSecondChild = parseInt(prompt(`Кількість цукерок яке має ${nameSecondChild}`, '15'))
const output = document.querySelector('.page__container')
let result = 'Більше цукерок у дитини з ім\'ям: '

if (quantitySweetsFirstChild > quantitySweetsSecondChild)
	result += nameFirstChild
else if (quantitySweetsFirstChild < quantitySweetsSecondChild)
	result += nameSecondChild
else
	result = 'Діти мають однакову кількість цукерок'

output.insertAdjacentHTML('beforeend', `<div>${result}</div>`)
