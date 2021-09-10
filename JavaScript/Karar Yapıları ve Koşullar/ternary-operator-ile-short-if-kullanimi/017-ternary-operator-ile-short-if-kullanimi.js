// ********** Ternary Operator ile Short-if Kullanımı **********

// Eğer kullanııcı adın varsa yazdır; yoksa kullanıcı bilginiz bulunamadı yaz. 

let userName = prompt("Kullanıcı Bilginizi Yazınız: ")
let info = document.querySelector("#info")

// Ternary Operator Usage: 

// koşul ? doğruysa : yanlışsa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bilginiz Bulunamadı. :( "}`