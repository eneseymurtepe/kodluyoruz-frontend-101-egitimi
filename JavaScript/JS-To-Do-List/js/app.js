// Ekle butonu ve yeni todo alanı start 

const newItemDOM = document.querySelector("#liveToastBtn") // Ekle butonunu seçtik
newItemDOM.addEventListener("click", newElement) // Ekle butonuna click eventi atadık
const alertMSG = document.querySelector("#alert")

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", LoadAllTodosToUI)
}

function LoadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}

function newElement(e) { // Ekle butonuna tıklandığında çalışacak fonksiyon
    e.preventDefault();

    const newInput = document.querySelector("#task") // Yeni todo girilecek inputu seçtik

    if (newInput.value) { // Eğer yeni todo girilecek input alanı dolu ise
        addItem(newInput.value) // Yeni todo alanına girilen değeri addItem fonksiyonu ile ekle
        newInput.value = "" // Sonrasında yeni todo girilen alanı boşalt

        showAlert("success", "Todo başarıyla eklendi.");
        addTodoToStorage(newInput);
    } else { // Yeni todo girilen alan boş ise
        showAlert("danger", "Lütfen bir todo ekleyin.") // Kullanıcıya uyarı mesajı göster
    }
}
// Ekle butonu ve yeni todo alanı finish


// ul alanına eklenecek olan liste elemanı start
const itemListDOM = document.querySelector("#list-group") // ul alanını seçtik

const addItem = (task) => { // adItem isimli bir fonksiyon yazdık ve parametre olarak
    // task(yeni todo inputunu verdik)
    let liDOM = document.createElement("li") // liDOM adında yeni bir "li" elementi oluşturduk
    liDOM.innerHTML = // yeni liDOM'un içeriğinde gösterilecek bilgiler ve özellikleri 
        `
        ${task} 
            <button type="remove" id="remove" class="btn btn-outline-primary float-right">
            <i class="fas fa-times"></i>
            </button>
    `
    itemListDOM.appendChild(liDOM)
}
// ul alanına eklenecek olan liste elemanı finish


// Todo listteki çarpı butonuna tıklandığında ne olacağını yazdık start
itemListDOM.addEventListener("click", deleteTodo); // ul alanına click eventi atadık

function deleteTodo(e) { // deleteTodo adı altında fonksiyon tanımladık
    if (e.target.className === "fas fa-times") { // Eğer tıklanılan yerin classı "fas fa-times"
        // ise
        e.target.parentElement.parentElement.remove(); // "fas fa-times"ın iki üst elemanındaki
        // elementi(li) kaldır. 
    }
}
// Todo listteki çarpı butonuna tıklandığında ne olacağını yazdık finish

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.textContent = message;

    alertMSG.appendChild(alert);

    // setTimeout method

    setTimeout(function name() {
        alert.remove();
    }, 1200)
}


function getTodosFromStorage() { // Storage'dan todoları alma
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newInput) {
    let todos = getTodosFromStorage();

    todos.push(newInput);

    localStorage.setItem("todos", JSON.stringify(todos));
}