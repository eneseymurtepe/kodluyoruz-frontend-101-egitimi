// ****** Template Literals Kullanımı ******
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "Enes"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
let info = `
             Merhaba ${username} sitemize hoşgeldin..
             Mail adresin: ${email}
             İsminizin ilk harfi: ${username[0]}.
             Mail adreisinin uzunluğu: ${email.length}
             Borcunuz: ${(2+3)*10} TL
             Günün saat bilgisi: ${new Date().getHours()}
           `
console.log(info);

/* İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir. 
   Normal dizeler içerisine ifadeler gömmek için kullanılır. */

/* 
    Template Literals;

        * Kod okunabilirliğini kolaylaştırır,
        * Stringler içerisinde değişken yazma kolaylığı sağlar,
        * Şablon etiketlerini daha az karmaşık hale getirir.
*/