// Local Storage İşlemleri:
// Eğer tutacağımız bilgi object ise "JSON.stringify" ile objeyi string yapıya çevirebiliriz.


// LocalStorage'dan Veri Alma 

 /*
    LocalStorage'da değişkenler string olarak tutulduğundan, localStorage'dan user objesini 
    almak istediğimizde userName ve isActive değerlerine erişemeyiz. 
    Stringify işlemini geri almak için "parse()" metodu kullanılabilir.

 */

let user = {
    userName: "hakanyalcinkaya",
    isActive: true
}

localStorage.setItem("userInfo", JSON.stringify(user)) // İçerisindeki bilgileri obje olarak değil de string olarak yaz.


let userInfo = localStorage.getItem('userInfo') // Bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)



// 2. egzersiz:
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) => hatalı :(
localStorage.setItem('newItems', JSON.stringify(items))


//JSON Parse ile localStorage içindeki bilginin çekilip kullanılması ...
let newItems = JSON.parse( localStorage.getItem('newItem') ) 