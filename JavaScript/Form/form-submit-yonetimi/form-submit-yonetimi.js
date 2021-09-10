// FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault(); // default işlemi engelledik.
    console.log("İşlem gerçekleşti")


    // Input içerisinden değer almak
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value);
}

/*

GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. 
Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir.

UYARI: Get metodu önemsiz verilerde kullanılmalıdır, kullanıcı adı, şifre gibi bilgilerin bu method ile gönderilmesi uygun değildir.

*/

/*

POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı, mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.

*/

/* 

    onSubmit ve onChange Eventleri 

onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz eventtir.

onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.

*/

/* 

    Form Özellikleri:

ACTION
action = Formunuzu submit ettikten sonra nasıl bir aksiyon alacağını belirlersiniz. Genellikle formlarda gönderi işlemi tamamlandıktan sonra form datası server'a gönderilir. 
Fakat server haricinde kendimiz bu form datasını başka bir dosyaya atayabiliriz. Örneğimizde görüleceği gibi dosyamız "script.js" adlı bir dosyaya gönderiliyor. 
Form datasının yönetimi bundan sonra bu dosya üzerinden yürütülür.

Örnek kullanım <form action="/script.js"></form>

METHOD
method = Form datanızın hangi methdola gönderileceğine karar verir. "Get" veya "Post" request olarak. Bu özellik verilmemesi durumunda default olarak "Get" methodu formunuza atanır.

Örnek kullanım <form action="/script.js" method="get">" veya "<form action="/script.js" method="post">

AUTOCOMPLETE
autocomplete = Ingilizce isminden de anlaşılacağı üzere formunuzda otomatik tamamlama özelliğini açıp veya kapatmak için işinize yarar. 
Bu özelliği açmak, daha önceki entrylerinize göre formun tamamlama yapmasını sağlayacaktır.

Örnek kullanım <form action="/script.js" autocomplete="on"> veya <form action="/script.js" autocomplete="off">

NOVALIDATE
novalidate = Aktif olduğu sürece gönderdiğiniz form datanızın otomatik olarak doğrulanmamasını söyler.

Örnek kullanım "<form action="/my_script.js" novalidate>"

Form taglerinizde birden fazla element bulundurabilirsiniz. Bunlardan olmazsa olmazı inputlar & butonlardır. 
Input elemanlarının başlıca özellikleri olarak ;

fname = Görünecek olan yazıyı belirler. Bu yazı, adete bir html etiketi gibi görünür.

type = Bu kısımda formunuzun text/numerik bir form olacağına karar verirsiniz.

name = Inputunuzun name özelliğini belirlersiniz. Genelde isimlendirme backend kısmına uygun olması açısından küçük harf verilir.

value = Inputtaki aktif görünecek olan yazı için verilir. Örnek olarak butonların üzerindeki yazı gibi düşünebiliriz.

    
*/