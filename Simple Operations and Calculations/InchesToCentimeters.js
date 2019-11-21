//Да се напише програма, която изважда цяло число от аргумента input и преобразува числото от инчове в сантиметри.

function solve(input) {
    let inches = Number(input.shift());
    let centimeters = inches * 2.54;
    console.log(centimeters);
}
