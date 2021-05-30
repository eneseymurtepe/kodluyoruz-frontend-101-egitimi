// ****** String Veri Türü İşlemleri ******
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// ** String karakter sayısı => length
console.log(email.length);


// ** İlk karakteri bulmak => [0]
console.log(firstName[0]); // 1.yol
console.log(firstName.charAt(0)); // 2.yol


// ** Tüm kelimeyi Büyük/Küçük harf yapma => toUpperCase() - toLowerCase()
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);


// ** String içerisinde istediğimiz bilgiyi aramak ve yerini bulmak => search
console.log(email.search("@"));
console.log(email[15]);

console.log(email.search("454523")); // => Olmayan birşeyi arattığımız için -1 döndürür.



// ** Belirli bir yere kadar al => slice (domain bilgisi alalım)
let DOMAIN = email.slice(email.search("@") + 1); // @ işaretini almamak için +1 değerini verdik.
console.log(DOMAIN);

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.'))
    /* sadece gmail kısmını aldık. 
                                              0. indexten başla, "." gördüğün yere kadar olan 
                                             kısmı al */
)


// ** Bilgiyi değiştir => replace
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email);



// ** İstediğim bilgi var mı ? => includes => true or false
email.includes('fdfs'); // false
email.includes('@'); // true


// ** İstediğim bilgiyle başladı mı ? / Bitti mi ? => startsWidth - endsWith
console.log(email.endsWith('kodluyoruz.org')); // true or false



// ** Kelimenin ilk harfini büyük yapmak 

firstName = "FIRST"
lastName = "LAST"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName);