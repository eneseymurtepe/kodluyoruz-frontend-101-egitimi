// ********** CSS class eklemek veya çıkarmak **********

let greeting = document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // Birden fazla class eklemek

greeting.classList.remove("title", "second-class", "third-class"); // Birden fazla class silmek

console.log(greeting.classList)


/*

    item() : HTML de class'ı verilen index sırasına göre döndürür.
    Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.
 
 */


/*

   contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. 
   Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.

*/


/*

    Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak 
    yerine classList.toggle() yöntemini kullanılabilir.

*/


// replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.



// length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.