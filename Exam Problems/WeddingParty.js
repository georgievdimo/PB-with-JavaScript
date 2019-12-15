//Михаела и Иван организират тържеството за сватбата си. Те разполагат с определен бюджет, който са предвидили по-рано, за да платят разходите по храната. Предвиденият куверт е на цена 20 лв на човек. Те искат да разберат дали парите, които са отделили, ще стигнат за кувертите. Ако парите не стигат, трябва да се изведе съобщение, колко не им достигат. Ако бюджета стигне за кувертите и им останат пари, 40% от тях отиват за фойерверките след церемонията, а останалите са за дарение.

function solve(input) {
  let guest = +input.shift();
  let buget = +input.shift();
  let covertMoney = guest * 20;
  let leftMoney = Math.abs(buget - covertMoney);
  if (covertMoney < buget) {
    let fireworks = leftMoney * 0.4;
    let donate = leftMoney - fireworks;
    console.log(
      `Yes! ${fireworks.toFixed(0)} lv are for fireworks and ${donate.toFixed(
        0
      )} lv are for donation.`
    );
  } else {
    console.log(
      `They won't have enough money to pay the covert. They will need ${leftMoney.toFixed(
        0
      )} lv more.`
    );
  }
}
