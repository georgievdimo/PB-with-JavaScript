//Коледа наближава и Коледният базар на книгата отваря врати. Организаторите искат да дарят определена сума от продажба на следните жанрове книги: фентъзи, хорър, романтика. Да се напише програма, която изчислява дали организаторите са успели са съберат желаната сума от продажба на книги, като се има предвид, че с 20 процента от изкараната сума, се заплаща ДДС. Книгите от всеки жанр имат различна цена: Фентъзи – 14.90 лв. Хорър – 9.80 лв. Романтика – 4.30 лв. Ако след заплащане на ДДС, целта е достигната, продавачите ще получат 10% възнаграждение от парите надвишаващи целта. Сумата за възнаграждение трябва да е закръглена към най-близкото цяло число надолу. Останалите пари, се добавят към основната сума за даряване.

function solve(input) {
  let fantasyBookPrice = 14.9;
  let horrorBookPrice = 9.8;
  let romanceBookPrice = 4.3;
  let desireAmount = +input.shift();
  let fantasyBooks = +input.shift();
  let horrorBoooks = +input.shift();
  let romanceBooks = +input.shift();
  let total =
    (fantasyBookPrice * fantasyBooks + horrorBookPrice * horrorBoooks + romanceBookPrice * romanceBooks) * 0.8;
  if (total > desireAmount) {
    let leftMoney = total - desireAmount;
    let comission = Math.floor(leftMoney * 0.1);
    let donatedMoney = desireAmount + (leftMoney - comission);
    console.log(`${donatedMoney.toFixed(2)} leva donated.`);
    console.log(`Sellers will receive ${comission} leva.`);
  } else {
    let neededMoney = desireAmount - total;
    console.log(`${neededMoney.toFixed(2)} money needed.`);
  }
}
