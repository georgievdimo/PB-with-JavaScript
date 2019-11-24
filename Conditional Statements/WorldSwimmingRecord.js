//Иван решава да подобри Световния рекорд по плуване на дълги разстояния. На конзолата се въвежда рекордът в секунди,  който Иван трябва да подобри,  разстоянието в метри, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. Да се напише програма, която изчислява дали се е справил със задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число. Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд. 

function solve(input) {
    let worldRecord = +input.shift();
    let distance = +input.shift();
    let timeForMeter = +input.shift();
    let delay = Math.floor(distance / 15) * 12.5;
    let ivanTime = distance * timeForMeter + delay;
    let missingSeconds = ivanTime - worldRecord;
    if (ivanTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${missingSeconds.toFixed(2)} seconds slower.`)
    }
}
