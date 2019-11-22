//Напишете програма, която чете ъгъл в радиани (radians) и го преобразува в градуси (degrees).

function solve(input) {
    let radians = Number(input.shift())
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}
