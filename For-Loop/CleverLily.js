//Лили вече е на N години. За всеки свой рожден ден тя получава подарък. За нечетните рождени дни (1, 3, 5...n) получава играчки, а за всеки четен (2, 4, 6...n) получава пари. За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв, за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.). През годините Лили тайно е спестявала парите. Братът на Лили, в годините, които тя получава пари, взима по 1.00 лев от тях. Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари. С парите искала да си купи пералня за X лева. Напишете програма, която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.

function solve(input) {
  let age = +input.shift();
  let washingMachinePrice = +input.shift();
  let toyPrice = +input.shift();
  let moneySum = 0;
  let toysGift = 0;
  let moneyGift = 0;
  let totalSum = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      moneyGift += 10;
      moneySum += moneyGift;
      moneySum -= 1;
    } else {
      toysGift += 1;
    }
  }
  totalSum = moneySum + toysGift * toyPrice;
  if (totalSum >= washingMachinePrice) {
    console.log(`Yes! ${(totalSum - washingMachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachinePrice - totalSum).toFixed(2)}`);
  }
}
