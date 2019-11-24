//Да се напише програма, която преобразува разстояние между следните 3 мерни единици: mm, cm, m. Използвайте съответствията от таблицата по-долу: входна единица	изходна единица 1 meter (m)	1000 millimeters (mm) и 1 meter (m)	100 centimeters (cm). Входните данни се състоят от три реда, въведени от потребителя: Първи ред: число за преобразуване - реално число. Втори ред: входна мерна единица - текст. Трети ред: изходна мерна единица (за резултата) - текст. На конзолата да се отпечата резултатът от преобразуването на мерните единици форматиран до третия знак след десетичната запетая.

function solve(input) {
    let value = +input.shift();
    let inputMetric = input.shift();
    let outputMetric = input.shift();
    if (inputMetric === "mm" && outputMetric === "m") {
        value /= 1000;
    } else if (inputMetric === "mm" && outputMetric === "cm") {
        value /= 10;
    } else if (inputMetric === "cm" && outputMetric === "m") {
        value /= 100;
    } else if (inputMetric === "cm" && outputMetric === "mm") {
        value *= 10;
    } else if (inputMetric === "m" && outputMetric === "mm") {
        value *= 1000;
    } else if (inputMetric === "m" && outputMetric === "cm") {
        value *= 100;
    }
    console.log(value.toFixed(3));
}
