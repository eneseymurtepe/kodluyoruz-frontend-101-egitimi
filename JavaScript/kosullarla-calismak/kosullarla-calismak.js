// ********** Koşullarla Çalışmak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// ** Eğer kullanıcı bilgisi varsa ekrana ismini yazdır.
// ** eger(username.length > 0) {console.log(username)} değilse {console.log("Bilgi yok")}
// ** if(username.length > 0) {console.log(username)} else {console.log("Bilgi yok")}

let username = prompt("Kullanıcı Adınızı Giriniz:")

if (username.length > 0) { // if kısmı her zaman true ise çalışır.
    console.log(`Kullanıcı Bilginiz => ${username}`)
} else {
    console.log("Bilgi yok")
}

var randomSayi = Math.floor(Math.random() * 10);
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
    alert("Bir daha denee :(, Random sayi: " + randomSayi);
}

