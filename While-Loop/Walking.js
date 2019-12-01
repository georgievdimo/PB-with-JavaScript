//Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете програма, която чете от конзолата по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!". Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."

function solve(input) {
  let stepsCounter = 10000;
  let data = input.shift();
  while (data !== "Going home") {
    data = +data;
    stepsCounter -= data;
    if (stepsCounter <= 0) {
      console.log(`Goal reached! Good job!`);
      break;
    }
    data = input.shift();
  }
  if (data === "Going home") {
    data = input.shift();
    stepsCounter -= data;
    if (stepsCounter <= 0) {
      console.log(`Goal reached! Good job!`);
    } else {
      console.log(`${stepsCounter} more steps to reach goal.`);
    }
  }
}
