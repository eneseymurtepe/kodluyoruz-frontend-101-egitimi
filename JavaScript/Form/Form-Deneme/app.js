// FORMLARLA ÇALIŞMAK : Bölüm Sonu Egzersizi

/*  
    1: Formu Seç
    2: Input bilgisini al ve "ul" içerisine ekle
    3: Form içindeki bilgiyi sıfırla
    4: Eğer forma bilgi girilmezse kullanıcıyı uyar.
*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", submitHandler);

let alertDOM = document.querySelector("#alert")
const alertFunction = (title, message, className = "warning") =>
    `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function submitHandler(event) {
    event.preventDefault();

    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) { // Eğer USER_NAME.value ve SCORE.value var ise
        addItem(USER_NAME.value, SCORE.value) // bu bilgileri ekle
        USER_NAME.value = "" /* Ekledikten sonra bu bilgileri sıfırlar */
        SCORE.value = ""
    } else {
        // alert("Bilgi girişi yapmadınız.")
        alertDOM.innerHTML = alertFunction(
            "Hata !",
            "Giriş Yapmanız Gerekmektedir.",
            "danger"
        )
    }
}

const userListDOM = document.querySelector("#userList")

const addItem = (username, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML =
        `
    ${username}<span class="badge bg-primary rounded-pill">${score}</span> 
    <button type="delete" id="delete" class="btn btn-outline-primary">Sil</button>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between',
        'align-items-center'
    )
    userListDOM.appendChild(liDOM)
}