// Çok Kullanılan Array(Dizi) Metodları ve Array İçinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5]


// Array İçerisinde Array Oluşturma

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

// Başa öğe eklemek

items.unshift(femaleUsers)
console.log(items)

// Sona öğe eklemek

items.push(maleUsers)
console.log(items)

console.log(items.length) // Dizinin eleman sayısı

console.log(items[0].length) // Dizinin ilk öğesinin elaman sayısı

console.log(items[0][0]) // Ayse bilgisine ulaştık


// Array içerisinden öğe ayırmak -> splice(pos, item?)

let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)


// Array içerisindeki öğenin index bilgisini bulmak -> indexOf('value')

items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))


// Array Kopyalamak -> slice, [...ES6]

let copyItems = items
console.log(items)

copyItems.pop() // Son öğeyi çıkarttık. Parantez içerisine parametre almaz.
console.log("copyItems 1", copyItems)
console.log("items 1", items)

copyItems = items.slice() // Kopyalama yaptık
copyItems.pop() // Son öğeyi çıkarttık.
console.log("copyItems = 2", copyItems)
console.log("items = 2", items)

let es6Items = [...items] // ES6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)


// İki Array Bilgisini Birleştirmek -> [...ES6, ...ES6]

let allUsers = [...femaleUsers, ...maleUsers] // ES6 ile birden fazla array yapısını birleştirmek
console.log(allUsers)


// Array içerisindeki bilgiyi String'e çevirmek -> toString, join

console.log("toString Yöntemi: ", allUsers.toString())
console.log("join Yöntemi: ", allUsers.join(" --- ")) // Aralarına " --- " attık.
                                                      // Eğer bir parametre vermezsek virgül bastırır.

// İstediğimiz Index Bilgisine Öğe Eklemek -> splice(index, 0, value)

allUsers.splice(allUsers.length - 1, 0, "Melisa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Enes")
console.log(allUsers)

// Bir elemanın dizi içerisinde bulunup bulunmadığını kontrol etmek. => includes()

// Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder.
// Boolean (true/false) olarak çıktı alınır.

const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);
// Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem.includes("armut");
console.log(armutVar);
// Dizi içerisinde armut olmadığı için ekrana false yazdırmasını bekleriz.


// Farklı dizileri birleştirip tek bir diziye çevirmek. => concat()

const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.


// forEach()

/* 

Eğer bir dizide her bir eleman için bir fonksiyon çalıştırmak istiyorsak bunu forEach metoduyla yapabiliriz. 
Bu metot sayesinde dizideki elemanlar için ayrı ayrı fonksiyon çağırmaktansa tek seferde çağırıp işimizi kolaylaştırıyoruz.
forEach metodu içerisine kullanmak istediğimiz fonksiyonu tanımlamamız gerekiyor. Fonksiyona ise 3 farklı parametre verebiliyoruz.
Bunlar sırasıyla; "dizi elemanının kendisi, dizi elemanının indeksi ve dizinin kendisi"

*/

// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});

// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.



// map()

/* 

Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular 
fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. 
Orijinal dizi olduğu gibi kalır.

*/

// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

const sayilar = [1, 2, 3];

let sayilarin5kati = sayilar.map(function (sayi) {
    return sayi * 5;
});

console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.

console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.


// some()

/*

* Some metodu, bir dizinin içerisinde, belirtilen bir koşulu sağlayan en az bir eleman olup 
olmadığını kontrol etmeye yarar.
* Dizi içerisinde koşula uyan tek bir elemanın olması sonucun "true" dönmesi için yeterlidir.
*"Boolean" (true veya false) olarak döner.

*/

const sayilar2 = [4, 5, 6];

// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar2.some(function (sayi) {
    return sayi > 5;
});

console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.


const sonuc2 = sayilar2.some(function (sayi) {
    return sayi < 3;
});

console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz.


// every()

/*

* every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
* some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
* True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

*/

const sayilar3 = [4, 5, 6];

const sonuc11 = sayilar3.every(function (sayi3) {
    return sayi3 > 3;
});

console.log(sonuc1);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


const sonuc22 = sayilar3.every(function (sayi3) {
    return sayi3 > 5;
});

console.log(sonuc2);
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


const sonuc33 = sayilar3.every(function (sayi3) {
    return sayi3 > 7;
});

console.log(sonuc33);
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.


// filter()

/*

* filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi 
oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
* Yeni oluşacak diziyi bir değişkende saklıyoruz.
* Orijinal dizi bozulmuyor.

*/

const numbers = [1, 2, 3, 4, 5];

const filtrelenmisSayilar = numbers.filter(function (num) {
    return num > 3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(numbers);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.


// find()

/* 

* Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
* Diğer metotların aksine find metodu elemanın kendisini döner.
* Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
* Koşulu sağlayan bir eleman bulamazsa undefined döner.

*/

const numbers2 = [4, 5, 6, 7];

const bulunacakEleman1 = numbers2.find(function (num2) {
    return num2 === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = numbers2.find(function (num2) {
    return num2 > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = numbers2.find(function (num2) {
    return num2 < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.


// sort()

/* 

* Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
* Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
* Eğer parametre olarak bir fonksiyon verilmezse, dizi elemanları string'e çevrilir ve 
  UTF-16 değerlerine göre sıralanır.
* Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.

*/

/* Varsayılan haliyle (parametre vermeden) sıralama yapmak istediğimizde: */

const n3 = [3, 5, 2, 10, 4];

n3.sort();
console.log(n3);
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
// (Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)


/* Sayılardan oluşan bir dizideki sayıları küçükten büyüğe sırada olacak şekilde sıralamak istersek: */

const n4 = [3, 5, 2, 10, 4];

n4.sort(function (a, b) {
    return a - b;
});
console.log(n4);
// Çıktı olarak [2, 3, 4, 5, 10] alırız.


/* Sayılardan oluşan bir dizideki sayıları büyükten küçüğe sırada olacak şekilde sıralamak istersek: */

const n5 = [3, 5, 2, 10, 4];

n5.sort(function (a, b) {
    return b - a;
});
console.log(n5);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.



// reduce()

/* 

* Bu metot dizimizi yalnızca bir değere indirger.
* Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
* Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
* Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.

*/

const numbersArray = [10, 20, 30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici(akumulator, n6) {
    return akumulator + n6;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonucn61 = numbersArray.reduce(indirgeyici, 0);

console.log(sonucn61);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.



// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonucn62 = numbersArray.reduce(indirgeyici, 5);

console.log(sonucn62);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.


// JavaScript ile dizi içerisinde dizi oluşturalım:

/*

* Array() constructor fonksiyonu yeni bir dizi oluşturmamıza yarıyor.
* new Array () şeklinde new keyword'ünü de kullanarak yeni bir dizi oluşturup bunu bir değişkende tutabiliriz:

*/

let kalemlik = new Array();

// Aynı metotla kalemlik dizisi içerisinde yeni diziler oluşturabiliriz:

kalemlik[0] = new Array("Silgi", 2, "mavi");
kalemlik[1] = new Array("Kalem", 3, "kırmızı");
kalemlik[2] = new Array("Cetvel", 1, "siyah");

console.log(kalemlik);
// Çıktı olarak [["Silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 1, "siyah"]] şeklinde 3 elemanlı bir dizi döner.

//Bu dizi içerisindeki silgiyi görüntülemek istersek:
console.log(kalemlik[0][0]);
// Kalemlik dizisinin ilk elemanının birinci elemanı döner; yani "silgi" dönmesini bekleriz.


// Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
console.log(kalemlik[0][2]);
// renk, kalemlik dizisinin ilk elemanının üçüncü elemanı olduğundan "mavi" döner.