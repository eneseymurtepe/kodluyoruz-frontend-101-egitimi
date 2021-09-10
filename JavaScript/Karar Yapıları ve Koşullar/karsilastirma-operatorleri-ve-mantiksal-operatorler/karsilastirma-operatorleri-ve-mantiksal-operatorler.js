// ********** Karşılaştırma Operatörleri ve Mantıksal Operatörler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = "100"
let user = "enes"


// == Eşitse => Yalnızca sayının eşit olup olmadığına bakar.

console.log("== :", price == 1)
console.log("== :", price == 100)



// === Hem değeri hem de türü eşitse

console.log("=== :", price === 1)
console.log("=== :", price === 100)



// != Eşit değilse ( Eşit değil dimi ?)

console.log(user != "guest")


// < Küçükse

console.log("price < 100", price < 100)


// <= Küçük veya eşitse

console.log("price <= 100", price <= 100)


// > Büyükse

console.log("price > 200", price > 200)


// >= Büyük veya eşitse

console.log("price >= 100", price >= 100)


// && ve => Her iki koşulun da sağlanması gereklidir.

price = 0
console.log(price > 0 && user != "guest") // Price 0'dan büyükse ve user, guest değilse true ödön



// || veya

console.log(price > 0 || user != "guest") /* Birden fazla şart içerdiğinde içinden 1 tanesi
                                           dahi true olarak dönerse, sonuç true olur. */


// ! degil (tersi) => Çıkan sonucun tam tersi alınır.

user = "guest"
price = 1
console.log(price > 0 && !user == "guest") // 1. yol
console.log( !(price > 0 && user == "guest") ) // 2.yol