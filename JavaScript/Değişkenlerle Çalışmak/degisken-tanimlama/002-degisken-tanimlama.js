// let ve const ile Değişken Tanımlama

// ** var ile değişken tanımalamak: **
// var serverName = "api.kodluyoruz.org"
// console.log(serverName);


// ** let ile değişkeni boş tanımlamak: **
let serverName;
console.log(serverName);


// ** let ile değişkene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName);


// ** let ile değişkene bilgi atayarak tanımlamak: ** 
let password = "1234";
console.log(password);


// ** değişken ataması yapmadan önce kullanmaya çalışmak: **
let fullName = "Enes EYMURTEPE";
console.log(fullName);


// ** let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek: **
let fullName = "Lorem Ipsum Dolor";
console.log(fullName);


// ** Birleştirme veya ekleme işlemi: **
fullName += " Yeni Bİlgi"; // +=
console.log(fullName);


// ** const ile değişkeni boş tanımlamaya çalışmak: **
const serverPassword; // Just defined variable but this declaration is false.


// ** const ile değişken tanımlamak: **
const SERVER_PASSWORD = "devJSx";
console.log(SERVER_PASSWORD);

SERVER_PASSWORD = "1234"; // If defined variables with let it can change 
console.log(SERVER_PASSWORD); // but if defined variabes with const, it's not changed.