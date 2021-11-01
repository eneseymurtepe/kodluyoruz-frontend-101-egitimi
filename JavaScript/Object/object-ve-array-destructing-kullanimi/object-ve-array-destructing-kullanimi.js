// Object ve Array Destructuring Nasıl Kullanılır ?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object Destructuring:

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// Obje içerisindeki bilgilerin tek seferde çıkarılması

// let userName = settings.userName
// console.log(userName)

// Rename && destructuring

let {userName: user, password, isActive, ip: serverIP, serverName} = settings
console.log(user, password, isActive, serverIP, serverName)
console.log(settings)
console.log(user)


// Obje içerisindeki bazı bilgilerin çıkarılması

let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings

// Eğer değişken ismi daha önce tanımlanmadıysa:
console.log(userName2, password2, isActive2, newSettings)


// Objenin, destructuring ile kopyalanması

let settings2 = {...settings} // Çıkart ve tekrar ekle
settings2.userName = "Değişen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

// Object kopyalama ile aynı

let copyOfScore = [...score]
console.log(copyOfScore)