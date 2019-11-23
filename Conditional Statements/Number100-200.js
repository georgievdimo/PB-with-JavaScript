//Да се напише програма, която получава цяло число, получено като аргумент и проверява, дали е под 100, между 100 и 200 или над 200. Да се отпечатат съответно съобщения, като в примерите по-долу.

function solve(input) {
    let number = Number(input.shift());
    if (number < 100) {
        console.log("Less than 100")
    } else if ((number >= 100) && (number <= 200)) {
        console.log("Between 100 and 200")
    } else if (number > 200) {
        console.log("Greater than 200")
    }
}
