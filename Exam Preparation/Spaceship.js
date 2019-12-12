//Георги трябва да построи космически кораб, който да събира част от екипажа му. За целта, той трябва да го направи така, че да има място за поне трима астронавти, но за не повече от 10. Всеки астронавт се нуждае от малка стая, която да е с размери: 2 метра ширина, 2 метра дължина и с 40 см по-висока от средната височина на астронавтите. Напишете програма, която изчислява обема на кораба, колко астронавта ще събере и принтира на конзолата дали  той е достатъчно голям.

function solve(input) {
  let shipWidth = +input.shift();
  let shipLength = +input.shift();
  let shipHeight = +input.shift();
  let aveAstonaftHeight = +input.shift();
  let shipCapacity = shipHeight * shipLength * shipWidth;
  let roomCapacity = 2 * 2 * (aveAstonaftHeight + 0.4);
  let astroSpace = Math.floor(shipCapacity / roomCapacity);
  if (astroSpace >= 3 && astroSpace <= 10) {
    console.log(`The spacecraft holds ${astroSpace} astronauts.`);
  } else if (astroSpace < 3) {
    console.log(`The spacecraft is too small.`);
  } else if (astroSpace > 10) {
    console.log(`The spacecraft is too big.`);
  }
}
