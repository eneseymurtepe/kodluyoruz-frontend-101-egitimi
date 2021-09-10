// Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Array Map


/* 

Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı 
çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.
Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz.
Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz.
Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. 
Bu kısım önemlidir.

*/



const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName içinde orijinal isim kalsın, 
// shortName içinde ilk harf büyük . (A.)
// newName içinde ilk harf büyük olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item => {
//     return {
//         userName: "item",
//         shortName: `${item[0]}.`,
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// }
// )

const USERS_OBJ = USERS.map(item => ({
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
}))

console.log(USERS_OBJ)