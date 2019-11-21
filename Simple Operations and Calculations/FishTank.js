// За рождения си ден Любомир получил аквариум с формата на паралелепипед. Първоначално приемаме, като вход размерите му – дължина, широчина и височина в сантиметри. Трябва да се пресметне, колко литра вода ще събира аквариума, ако се знае, че определен процент от вместимостта му е заета от пясък, растения, нагревател и помпа.


function solve(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());
    let capacity = length * width * height;
    let totalLiters = capacity * 0.001;
    let calculatedPercent = percent * 0.01;
    let needed = totalLiters * (1 - calculatedPercent);
    console.log(needed.toFixed(3));
}
