// Functions - Bölüm Sonu Egzersizi

let counter = 0;
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)

    this.id == "increase" ? counter += 1 : counter -= 1 // Eğer increase geliyorsa 1 artır; 
                                                        // aksi halde 1 eksilt.
    counterDOM.innerHTML = counter

    if (counter == 3) {
        alert(counter + " => Tebrikler uğurlu sayımı buldunuz.")
    }
}