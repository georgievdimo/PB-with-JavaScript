//Инна ще покани гости за Коледа и решава да ги посрещне с различни коледни лакомства. Тя отива до местната сладкарница, за да купи по няколко килограма от всеки вид. Напишете програма, която изчислява колко пари ще са необходими на Инна, според количеството и цените в сладкарницата. На конзолата ще бъдат въведени цените в лева на баклавата и мъфините и количеството щолен, бонбони и бисквити в килограми. Цените на лакомствата се формират както следва: Щолен – 60% по-скъп от баклавата, Бонбони – 80% по-скъпи от мъфини, Бисквити – 7.50 лв. за килограм.

function solve(input) {
  let baklavaPrice = +input.shift();
  let muffinPrice = +input.shift();
  let shtolenKilos = +input.shift();
  let bonbonKilos = +input.shift();
  let biscuitsKilos = +input.shift();
  let shtolenPrice = baklavaPrice * 1.6;
  let bonbonPrice = muffinPrice * 1.8;
  let biscuitsPrice = 7.5;
  let total =
    shtolenKilos * shtolenPrice +
    bonbonKilos * bonbonPrice +
    biscuitsKilos * biscuitsPrice;
  console.log(total.toFixed(2));
}

