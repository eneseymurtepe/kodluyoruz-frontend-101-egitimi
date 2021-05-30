function changeColor() {
    document.getElementById("demo").style.background = "red";

}

let change = document.querySelector('#change')
change.classList.add("text-primary")
change.classList.add("font-size-24")
change.style.background = "orange"

change.classList.remove("font-size-24")

change.classList.replace("text-primary", "font-italic")


console.log(change.classList.item([0]));




let yesOrNot = document.querySelector('.yesOrNot')
yesOrNot.classList.add("text-primary");


$(document).ready(function () {
    $("span").click(function () {
        alert($("span").hasClass("text-primary"));
    });
});

