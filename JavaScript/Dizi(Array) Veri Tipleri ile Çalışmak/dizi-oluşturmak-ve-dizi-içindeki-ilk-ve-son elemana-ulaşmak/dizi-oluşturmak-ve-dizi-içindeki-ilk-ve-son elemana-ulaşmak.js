// Array (Diziler) ile Çalışmak 

// Array Oluşturmak

let domain = "kodluyoruz"
isActive = false
let items = [15, 25, 35, isActive, domain]

console.log(items)

let emptyArray = [] // Empty list


// Array içerisindeki eleman/öğe sayısını öğrenmek

console.log(items.length); // 1.yol

document.querySelector("#info").innerHTML = items.length; // 2.yol 


// Array içerisindeki ilk elemana ulaşmak

console.log(items[0])

// Array içerisindeki ortada yer alan elemana ulaşmak

console.log(
    "ortadaki :",
    items[Math.floor(items.length / 2)] // Ondalıklı sayıyının ondalıklı kısmını kaldırır (aşağı yuvarlar).
)

// Array içerisindeki son elemana ulaşmak

console.log("sondaki :", items[items.length-1])  
                                  

// Değişken içindeki bilginin Array olup olmadığının kontrol edilmesi

console.log(typeof items) // object olarak çıktı veriyor.

console.log(
    Array.isArray(items) // Benim "items" arrayim, bir array midir? => True
)


// Hangileri isArray -> True verir ? 

console.log("[] : ", Array.isArray([])) // => true
console.log("1 : ", Array.isArray(1)) // => false
console.log("true : ", Array.isArray(true)) // => false