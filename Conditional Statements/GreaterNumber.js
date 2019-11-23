//Да се напише програма, която получава две цели числа въведени от потребителя и отпечатва по-голямото от двете.

function solve(input) {
    let number1 = Number(input.shift());
    let number2 = Number(input.shift());
    if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}
