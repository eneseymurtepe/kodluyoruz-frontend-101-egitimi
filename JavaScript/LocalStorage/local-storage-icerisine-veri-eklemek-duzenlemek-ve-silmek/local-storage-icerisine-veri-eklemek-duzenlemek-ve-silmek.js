// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage



// localStorage içerisine bilgi kaydetmek:
let email = "hakanyalcinkaya@gmail.com"
localStorage.setItem('userEmail', email) // -> anahtar, değer yapısı kullanılır.(key, value)

// localStorage içerisindeki bilgiyi bir değişkene atamak ve çağırmak:

let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadığımız anahtar bilgisi
console.log(localStorageEMailInfo)


// localStorage içerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..


/* 

*Veri Ekleme

window.localStorage.setItem("key","value")


* Veri Okuma

window.localStorage.getItem("key");


* Veri Silme

localStorage.removeItem("key");
localStorage.clear(); => Tümünü siler.

*/