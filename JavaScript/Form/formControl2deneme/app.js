let signUpDOM = document.querySelector("#signup")
signUpDOM.addEventListener("submit", signUpHandler)

function signUpHandler(event) {
    event.preventDefault();

    let nameDOM = document.querySelector("#name")
    const emailDOM = document.querySelector("#email")

    if (nameDOM.value && emailDOM.value) {
        addItem(nameDOM.value, emailDOM.value)
        nameDOM.value = ""
        emailDOM.value = ""
        alert("Tebrikler başarıyla kayıt oldunuz.")
    } else {
        alert("Lütfen formu doldurunuz.")
    }
}

const emailListDOM = document.querySelector("#emailList")

const addItem = (name, email) => {
    let liDOM = document.createElement("li")

    liDOM.innerHTML =
        `
    ${name}<span class="badge bg-primary badge-pill">${email}</span>
    `

    liDOM.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-center'
    )
    emailListDOM.append(liDOM)
}