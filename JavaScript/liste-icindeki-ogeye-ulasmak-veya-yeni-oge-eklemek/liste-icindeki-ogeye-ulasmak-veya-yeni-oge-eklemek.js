// ********** Liste içerisindeki son elemana ulaşmak veya eleman eklemek **********
// querySelector 
let lastChild = document.querySelector('ul#list>li:last-child')
lastChild.innerHTML = "Son öğe değişti"

let firstChild = document.querySelector('ul#list>li:first-child')
firstChild.innerHTML = "İlk öğe değişti"

let ulDOM = document.querySelector('ul#list')
let liDOM1 = document.createElement('li')
let liDOM2 = document.createElement('li')


liDOM1.innerHTML = "En başa eklediğimiz öğe"
liDOM1.style.color = "white"
ulDOM.prepend(liDOM1) // İlk öğe olarak ekler


liDOM2.innerHTML = "En sona eklediğimiz öğe"
liDOM2.style.color = "yellow"
ulDOM.append(liDOM2) // En son öğe olarak ekler