//Напишете програма, която изчислява колко часове ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема приблизително три часа.

function solve(input) {
    let name = input.shift();
    let countProjects = Number(input.shift());
    let time = countProjects * 3;
    console.log(`The architect ${name} will need ${time} hours to complete ${countProjects} project/s.`);
}
