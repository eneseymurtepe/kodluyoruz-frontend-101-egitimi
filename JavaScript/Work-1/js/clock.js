let yourName = prompt("Kullanıcı Adınız Nedir?");
let myName = document.querySelector("#myName");

myName.innerHTML = `${myName.innerHTML} ${yourName}`

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 24;
    }
    if (h > 24) {
        h = 24 - h;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(() => {
        showTime();
    }, 1000);

}

showTime();