'use strict'

/*
	Зашифрувати один введений англійський символ у верхньому регістрі (один з символів: A,B,…Z)  методом зміщення (шифр Цезаря).
*/

const symbol = prompt('Ведіть англійський символ у верхньому регістрі (один з символів: A,B,…Z', 'Z').toLocaleUpperCase()[0]
const shiftKey = 3 // ключ зсуву
const symbolCode = symbol.codePointAt(0) // код літери
const lastCodeSymbol = 90 // індекс останньої літери в алфавіті
let encryptSymbol = null // закодований символ

// останній індекс - ключ зсуву - код символу, якщо результат менше нуля значить нам потрібно шифрувати букву з початку алфавіту
const encryptCode = lastCodeSymbol - shiftKey - symbolCode

if (encryptCode < 0)
	encryptSymbol = String.fromCharCode(64 + Math.abs(encryptCode))
else
	encryptSymbol = String.fromCharCode(symbolCode + shiftKey)

const output = document.querySelector('.page__container')
output.insertAdjacentHTML('beforeend',
	`<div>Ведена літера: ${symbol}, зашифрована літера: ${encryptSymbol}, ключ зсуву: ${shiftKey}</div>`
)