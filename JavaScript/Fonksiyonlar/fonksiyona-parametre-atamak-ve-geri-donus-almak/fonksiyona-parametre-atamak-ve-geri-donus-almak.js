// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geri Dönüş Almak **********

// Temel Kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç parametre almayabilir
// 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir

let firstName = "Lorem"

function greetings(firstName = "", lastName = "") { // default parametre alıyor.
                                                    // console.log(`Merhaba ${firstName ? firstName : ""}`) // firstName varsa firstName'i göster;
                                                    // yoksa boş göster. (Yalnızca Merhaba)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName) // değişken
greetings(); // Fonksiyona parametre göndermedik
greetings("Parametre");


function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info // return: info bilgisinin dışarı gönderilmesini sağlıyor.
}

let greetingsInfo = greetings2("Ad", "Soyad ")
// let info = "Deneme" 
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))