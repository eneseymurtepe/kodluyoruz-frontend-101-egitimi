// Array yapısına öğe eklemek ve array içerisinden istenilen öğenin çıkarılması
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Sona öğe/eleman eklemek => push

items.push(50)
console.log("Sona eklemek (50) : ", items)


// Başa öğe/eleman eklemek => unshift

items.unshift(5)
console.log("Başa eklemek (5) : ", items)


// Sondaki öğeyi/elemanı çıkarmak => pop

console.log("Son eleman çıkarıldı:", items.pop()); // Sondaki "50" elemanını diziden çıkarttı. 

let lastItem = items.pop() // Son elemanı (çıkarılan) lastItem içerisine ekledik.
console.log("lastItem: ", lastItem, ", items: ", items)


// Baştaki öğeyi/elemanı çıkarmak => shift

console.log("İlk eleman çıkarıldı: ", items.shift())

let firstItem = items.shift() // İlk elemanı firstItem içerisine ekledik.
console.log("firstItem: ", firstItem, ", items: ", items)


// Array içerisindeki bir öğenin bilgisinin değiştirilmesi

// İlk öğenin değiştirilmesi

items[0] = 5
console.log(items)


// Son öğenin değiştirilmesi

items[items.length - 1] = 1000
console.log(items)

/*

splice() metot:

splice() metodu, diziye hem eleman eklemek için hem de eleman silmek için kullanılır. 
Metodun ilk parametresi işlemin yapılacağı index numarasını, 
ikinci parametre ise kaç elemanın silineceğini belirtir.

  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,0,'baseball');
  console.log(sports); // basketball, baseball, football, tennis

*/