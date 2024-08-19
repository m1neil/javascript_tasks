'use strict'

/*
	Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих
	змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c,
	а змінна  c – попереднє значення змінної a.
*/

// Позначення величин
// a, b, c
// Проміжна змінна - d

// Вирішення
/*  
	d = a
	a = b
	b = c
	c = d 
*/

const output = document.querySelector('.page__container')

let a = prompt('Ведіть зміну a:', 'Вода')
let b = prompt('Ведіть зміну b:', 'Гроші')
let c = prompt('Ведіть зміну c:', 'Телефон')

output.insertAdjacentHTML('beforeend', `
	<table class="table">
		<caption>Змінні до зміни</caption>
		<thead class="table__thead">
			<tr>
				<th>Змінна</th>
				<th>Значення</th>
			</tr>
		</thead>
		<tbody class="table__tbody">
			<tr>
				<th>a</th>
				<td>${a}</td>
			</tr>
			<tr>
				<th>b</th>
				<td>${b}</td>
			</tr>
			<tr>
				<th>c</th>
				<td>${c}</td>
			</tr>
		</tbody>
	</table>
`)

let d = a
a = b
b = c
c = d

output.insertAdjacentHTML('beforeend', `
	<table class="table">
		<caption>Змінні після зміни</caption>
		<thead class="table__thead">
			<tr>
				<th>Змінна</th>
				<th>Значення</th>
			</tr>
		</thead>
		<tbody class="table__tbody">
			<tr>
				<th>a</th>
				<td>${a}</td>
			</tr>
			<tr>
				<th>b</th>
				<td>${b}</td>
			</tr>
			<tr>
				<th>c</th>
				<td>${c}</td>
			</tr>
		</tbody>
	</table>
`)