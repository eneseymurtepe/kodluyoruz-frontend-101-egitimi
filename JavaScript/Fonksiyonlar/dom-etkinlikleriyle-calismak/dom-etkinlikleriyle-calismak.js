// DOM Etkinlikleriyle Çalışmak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("Tıklandı")
    console.log(this.innerHTML = "Tıklandığı için bilgi değiştirildi.")
    this.style.color == "magenta" ? this.style.color = "black" : this.style.color = "magenta"
}


// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("mouseover", domClick) // Üstüne gelindiğinde

// function domClick() {
//     console.log("Event denetlendi.")
//     console.log(this.innerHTML = "Tıklandığı için bilgi değiştirildi.")
//     this.style.color == "magenta" ? this.style.color = "black" : this.style.color = "magenta"
// }