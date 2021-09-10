// Filter ile Array İçerisinde Sadece İstenilen Bilgileriin Yeni Listeye Eklenmesi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Filter Metodu

/* Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip 
olanlarla yeni bir dizi oluşturmak için kullanılır. 
*/

// 5 harften fazla olan(6) productları bulup, yeni bir listeye ekle

const PRODUCTS = ["Mİc", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS);

// Aktif kullanıcıları bulunuz.

const USERS = [{
        fullName: "Ayse Sumer",
        isActive: false
    },
    {
        fullName: "Ahmet Urgar",
        isActive: true
    },
    {
        fullName: "Asya Basar",
        isActive: true
    },
    {
        fullName: "Aksel Durmaz",
        isActive: false
    },
]

const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
console.log(ACTIVE_USERS)