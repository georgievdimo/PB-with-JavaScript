//

function solve(input) {
  let hallLenght = +input.shift();
  let hallWight = +input.shift();
  let barSide = +input.shift();
  let hallArea = hallLenght * hallWight;
  let barArea = barSide * barSide;
  let danceArea = hallArea * 0.19;
  let freeSpace = hallArea - barArea - danceArea;
  let guest = freeSpace / 3.2;
  console.log(Math.ceil(guest));
}
