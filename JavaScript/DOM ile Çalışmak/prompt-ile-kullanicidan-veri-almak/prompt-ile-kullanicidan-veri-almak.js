// ********** prompt ile Kullanıcıdan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lütfen adınızı girin: ")

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color: red">${fullName}</small>`