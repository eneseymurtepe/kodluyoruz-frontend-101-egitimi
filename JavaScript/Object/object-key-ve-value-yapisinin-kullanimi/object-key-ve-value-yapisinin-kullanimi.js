// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

let laptop1 = {
    brand: "Apple",
    modal: "Macbook",
    "2kg": 2,
    modalName: "Air"
};

console.log(laptop1)

// Doğru anahtar bilgisi oluşturmak

console.log(laptop1["brand"])
console.log(laptop1["modal"])
console.log(laptop1["2kg"])

// Anahtar bilgisine yeni değer eklemek

// laptop1.brand = "Mac" => 1. yol
laptop1["brand"] = "Mac1"

// Yeni bilgi eklemek

laptop1.version = "10.15.7"

console.log(laptop1)

// Anahtar bilgilerine ulaşmak (keys) => Object.keys(item)

keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
});

// Değer bilgilerine ulaşmak (values) => Object.values(item)

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

keys.forEach(value => {
    console.log("value: ", value)
});

let setting = {
    password: 1234,
    userName: 'user1'
}

console.log(setting)

// Bir property’i kaldırmak için silme (delete) operatörünü kullanabiliriz:
// delete car.year;

/*

** Özet **


* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 

*/