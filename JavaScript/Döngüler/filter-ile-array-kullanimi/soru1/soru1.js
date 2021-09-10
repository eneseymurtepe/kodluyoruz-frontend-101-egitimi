// Aşağıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  }
];

const personAge = person.filter(item => item.age > 30)
console.log(personAge)