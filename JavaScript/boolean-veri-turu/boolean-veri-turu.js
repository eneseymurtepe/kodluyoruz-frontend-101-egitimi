// ****** Boolean Veri Türü ile Çalışmak ****** 


// ** 0 ve 1'i anlamak: 
let isActive = false; // 0
isActive = true; // 1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);


Boolean("11") // True
Boolean("0") // True
Boolean("") // False => İçerisinde boş bir veri olduğu için.

userName = "user";
console.log("User Name: ", Boolean(userName));




// 0, -0, null, false, NaN, undefined, ("") ->

Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

// Not: Karar yapıları kısmında tekrar anlatılacak.
Boolean(userName.length > 0) // true


// *** İçinde değer "barındıran" tüm ifadeler true'dur. 

// *** İçinde değer "barındırmayan" tüm ifadeler false 'dur. 