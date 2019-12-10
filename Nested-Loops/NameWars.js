//Напишете програма, която изчислява ASCII стойността на няколко имена, като името с най-голяма стойност е победител. Стойността на името се изчислява като съберем ASCII стойностите на всички букви, от които се състои то. От конзолата ще се четат имена до получаването на команда „STOP“, след което трябва да се изпише: "Winner is {името на победителя} – {стойността на името му}!".

function solve(input) {
  let name = "";
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let winnerName = "";
  name = input.shift();
  while (name !== "STOP") {
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    if (sum > maxSum) {
      maxSum = sum;
      winnerName = name;
    }
    name = input.shift();
    sum = 0;
  }
  console.log(`Winner is ${winnerName} - ${maxSum}!`);
}
