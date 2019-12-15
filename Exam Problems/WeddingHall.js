//Михаела и Иван ще имат сватба, намерили са зала за тържеството и искат да разберат колко гости могат да се съберат в нея. Залата е с правоъгълна форма и размерите й се четат от конзолата. В залата има бар с квадратна форма, от който могат да си взимат напитки по време на церeмонията. По средата на залата има дансинг, който е 19% от площта на залата. В сватбената аганция им казват, че на 1 човек са нужни около 3.2 м2, за да има достатъчно място. Напишете програма, която да изчислява колко гости ще събере залата. Полученият резултат трябва да се закръгли до най-близкото цяло число нагоре.

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
