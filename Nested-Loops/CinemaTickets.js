//Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: студентски(student), стандартен(standard) и детски(kid), за всички прожекции. Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.

function solve(input) {
  let movie = input.shift();
  let students = 0;
  let standards = 0;
  let kids = 0;
  while (movie !== "Finish") {
    let totalSeats = +input.shift();
    let soldSeats = 0;
    for (let i = 0; i < totalSeats; i++) {
      let currentType = input.shift();
      if (currentType == "End") {
        break;
      }
      soldSeats++;
      switch (currentType) {
        case "student":
          students++;
          break;
        case "standard":
          standards++;
          break;
        case "kid":
          kids++;
          break;
      }
    }
    console.log(
      `${movie} - ${((soldSeats / totalSeats) * 100).toFixed(2)}% full.`
    );
    movie = input.shift();
  }
  let totalSoldSeats = students + standards + kids;
  console.log(`Total tickets: ${totalSoldSeats}`);
  console.log(
    `${((students / totalSoldSeats) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standards / totalSoldSeats) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kids / totalSoldSeats) * 100).toFixed(2)}% kids tickets.`);
}
