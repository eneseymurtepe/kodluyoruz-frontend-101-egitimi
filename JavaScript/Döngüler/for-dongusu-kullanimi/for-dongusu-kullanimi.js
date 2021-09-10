// For Döngüsü
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

/*

 for ([başlangıçAtaması]; [koşulİfadesi]; [artışMiktarı]) {
    yapılacakişlem
  }

*/

let users = ["Lorem", "Ipsum", "Dolor"]

// for (let index = 0; index < 10; index++){
//     console.log(index)
// }

// let index = 0

// for (; index < 10; index++){
//     console.log(index)
// }


const userListDOM = document.querySelector('#userList')

for (let index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}

/*

Ödev 1: 20 ile 40 arasındaki tüm sayıları konsola yazdırın.

for(let num = 20; num < 40; num++){
    console.log(num)
}

*/

/* 

Ödev 2: 0 ve 50 sayıları arasından tek olanları console'a yazdıralım. 

for (var i = 1; i < 50; i++) {
    if (i % 2 == 1) {
        console.log(i);
    };
};

*/