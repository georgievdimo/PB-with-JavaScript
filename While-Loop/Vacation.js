//Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.

function solve(input) {
  let neededMoney = +input.shift();
  let ownedMoney = +input.shift();
  let spendCounter = 0;
  let dayCounter = 0;
  while (ownedMoney < neededMoney && spendCounter <= 5) {
    let action = input.shift();
    let money = +input.shift();
    if (action === "spend") {
      ownedMoney -= money;
      spendCounter++;
    } else if (action === "save") {
      ownedMoney += money;
      spendCounter = 0;
    }
    if (ownedMoney < 0) {
      ownedMoney = 0;
    }
    dayCounter++;
    if (spendCounter == 5) {
      console.log(`You can't save the money.`);
      console.log(`${dayCounter}`);
      break;
    }
    if (ownedMoney >= neededMoney) {
      console.log(`You saved the money for ${dayCounter} days.`);
      break;
    }
  }
}
