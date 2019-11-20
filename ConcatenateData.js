//Напишете програма, която изважда име, фамилия, възраст и град от аргумента input и печата съобщение от следния вид: "You are <firstName> <lastName>, a <age>-years old person from <town>."

function solve(input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = input.shift();
    let town = input.shift();
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
