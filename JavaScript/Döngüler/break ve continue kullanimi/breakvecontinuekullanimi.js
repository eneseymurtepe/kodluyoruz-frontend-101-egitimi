// Break ve Continue 
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit'
]

// for (let counter = 0; counter < 10; counter++) {

//     if (counter === 5){
//         break;
//     }
//     console.log(counter)
// }

// for (let counter = 0; counter < 10; counter++) {

//     if (counter === 5){
//         continue;
//     }
//     console.log(counter)
// }

const UL_DOM = document.querySelector('#userListDOM')

// for (let index = 0; index < LOREM_LIST.length; index++) {
//     if (LOREM_LIST[index] == "dolor") {
//         break // => dolor'a kadar olan kısmı al. dolor dahil değil.
//     }
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }


for (let index = 0; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") {
        continue // => dolor'u atla ve dolordan sonrasını da yazdır.
    }
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}