//Напишете програма, която проследява представянето на вашия отбор на благотворителен коледен турнир.  Всеки ден получавате имена на игри до команда "Finish". Със спечелването на всяка една игра печелите по 20лв. за благотворителност. Трябва да изчислите колко пари сте спечелили на края на деня. Ако имате повече спечелени игри, отколкото загубени – вие сте победители този ден и увеличавате парите от него с 10%. При приключване на турнира ако през повечето дни сте били победители печелите турнира и увеличавате всичките спечелени пари с 20%. Никога няма да имате равен брой спечелени и загубени игри.

function solve(input) {
  let days = +input.shift();
  let money = 0;
  let totalMoney = 0;
  let totalWins = 0;
  let totalLoses = 0;
  for (i = 1; i <= days; i++) {
    let inputLine = input.shift();
    let winCount = 0;
    let loseCount = 0;
    while (inputLine !== "Finish") {
      let result = input.shift();
      if (result == "win") {
        money += 20;
        winCount++;
      } else if (result === "lose") {
        loseCount++;
      }
      inputLine = input.shift();
    }
    if (winCount > loseCount) {
      money *= 1.1;
      totalWins++;
    } else {
      totalLoses++;
    }
    totalMoney += money;
    money = 0;
  }
  if (totalWins > totalLoses) {
    totalMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}
