console.log("Hi there! I'm a JavaScript");

let languageName = 'JavaScript'

//console.log(`Hi there! I'm a ${getName()} - ${0.1 + 0.2}`)

function getName() {
    return languageName
}

getName.anyAttr = 'any value' //functions are refences in memory as well. can be passed as params

console.log(getName.anyAttr)

const number = 39
console.log('The const number has the type:', typeof number)

const names = ['Lucas', 'Leon', 'Labanca']

const print = (name) => console.log(name)

names.forEach(print)

names.forEach(function (name, index, list) {
    console.log(`${index+1}/${list.length}`, name)
})

const printFancy = function (name, index, list) {
    console.log(`${index+1}/${list.length}`, name)
}

names.forEach(printFancy)

names
    .sort()
    .reverse()
    .map(name => `${name} - Mapped`)
    .forEach(printFancy)

//Arrow function faz congelamento do contexto
//JS é fracamente tipada
//TS é fortemente tipada