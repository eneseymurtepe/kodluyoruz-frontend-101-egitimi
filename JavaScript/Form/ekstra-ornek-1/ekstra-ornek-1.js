const userForm = document.querySelector("#userForm");
const userName = document.querySelector("#userName");
const userSurname = document.querySelector("#userSurname");
const userAge = document.querySelector("#userAge");
const subContainer = document.querySelector(".sub-container");
const submitHandler = (e) => {
    e.preventDefault(); // Form submit edildiğinde tarayıcının yenilenmesini önler.

    if (userName.value && userSurname.value && userAge.value >= 18) {
        showInfos(userName.value, userSurname.value, userAge.value);
        userName.value = "";
        userSurname.value = "";
        userAge.value = null;
    } else {
        alert("Invalid input, please try again!");
    }
};

/* 1: liDOM adı altında yeni bir "li" elementi oluştur. 
   2: Oluşturulan li elementinin innerHTML'ine kullanıcı bilgilerinizden sonra ad, soyad, yaş bilgisi yazdır. 
   3: Oluşturduğun elemente "user-info" classını ekle. 
   4: Bu li elementini, HTML'deki "sub-container" kısmına öğe olarak eklenmesini sağla. 
   5: Eğer eklenen element, HTML'deki "sub-container"ın ilk öğesiyse style'ını display:flex yap.
*/

// input değerlerinin fonksiyon içerisinde kullanılması ve 
// create edilen "li" elementine eklenmesi.

const showInfos = (userName, userSurname, userAge) => {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `Your information: ${userName} ${userSurname} ${userAge}`;
    liDOM.classList.add("user-info");
    subContainer.append(liDOM);
    if (subContainer.firstChild) {
        subContainer.style.display = "block";
    }
};

userForm.addEventListener("submit", submitHandler);