//  Aşağıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

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

const JS = person.filter(lang => lang.languages === "JavaScript")

console.log(JS);