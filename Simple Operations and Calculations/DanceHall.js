//Група танцьори си търсят нова зала.  Залата, която са харесали, е правоъгълна и има размери:  L - дължина и W - ширина (в метри). В залата има квадратен гардероб със страна - A и правоъгълна скамейка с площ 10 пъти по-малка от площта на залата.  Мястото, което заема един танцьор е 40 см² и допълнително за свободно движение му трябват  още  7000см².  Напишете програма, която да изчислява колко танцьори могат да се поберат в залата и да се движат свободно. Полученият резултат трябва да се закръгли до най-близкото цяло число надолу.


function solve(input) {
    let hallLenght = Number(input.shift());
    let hallWight = Number(input.shift());
    let wardrobeSide = Number(input.shift());
    let hallArea = (hallLenght * 100) * (hallWight * 100);
    let wardrobeArea = (wardrobeSide * 100) * (wardrobeSide * 100);
    let benchArea = hallArea / 10;
    let freeArea = hallArea - wardrobeArea - benchArea;
    let coundDancers = Math.floor(freeArea / (40 + 7000));
    console.log(coundDancers);
}
