// While Dongusu
// https://www.w3schools.com/js/js_loop_while.asp

// let counter = 0

// while ( counter < 10){
//     console.log(counter)
//     counter++
// }

let userName = ""

while (!userName){ // userName değeri girilmediği sürece döngüyü çalıştır.
    userName = prompt("Kullanıcı Adınızı Girin: ")
    console.log(userName)
}