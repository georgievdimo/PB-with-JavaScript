function solve(input) {
    let name = input.shift();
    let countProjects = Number(input.shift());
    let time = countProjects * 3;
    console.log(`The architect ${name} will need ${time} hours to complete ${countProjects} project/s.`);
}
