// ****** Number ****** 

// ** Number veri türü tanımlamak: ** 
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
    "Fiyat:", price,
    "KDV Oranı:", tax,
    "KDV Tutarı:", priceTax,
    "Fiyat:", total);

let stringNumber = "11";
console.log("Metinsel veri: ", stringNumber);

let newNumber = Number(stringNumber);
console.log("Rakamsal veri: ", newNumber);

console.log("Number Constructor içerisine bilgi gönderildi:", Number("111"));


// ** Arttırma ve azaltma işlemleri: **
let counter = 320;
counter += 1; // 1.yol
counter++; // 2. yol
console.log(counter);

counter--;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);


// ** İşlem önceliği: ** 
console.log((2 + 3) * 10);


// ** Mod(Kalan) Alma (%): **
// Sayı tek mi çift mi?
console.log(15 % 2);

// 8 ürün kapasitesi olan bir koliye tüm ürünler sığıyor mu ?
console.log("Kolide kalan ürün sayısı: ", 18 % 8);


// ** Üs alma: **
console.log(2 * 2 * 2 * 2); // Üs alma 1.yol
console.log(2 ** 4); // Üs alma 2.yol


// ** Aşağı yuvarlama işlemi => Math.floor() **
console.log("Aşağı yuvarlama: ", Math.floor(1.9)); // => 1


// ** Yukarı yuvarlama işlemi => Math.ceil() **
console.log("Yukarı yuvarlama: ", Math.ceil(1.1)); // => 2


// ** Yakına yuvarlama işlemi => Math.round() **
console.log("Yakına yuvarlama: ", Math.round(1.4)); // 1,4 => 1    
console.log("Yakına yuvarlama: ", Math.round(1.5)); // 1,5 => 2    