//Група туристи решили да си направят лятна екскурзия до морето. Те тръгват от село Чушкопек. Да се напише програма, която пресмята общата сума в левове, която е необходима на туристите за тази екскурзия. Разстоянието до морето е 210 километра, а цялата екскурзия е с продължителност 3 дни. Тяхната кола изразходва средно по 7 литра на всеки 100 километра, а цената на бензина е 1,85 лв. за един литър. За всеки ден от техния престой те харчат пари за храна и сувенири. Общата цена за хотел е Z лв. на ден. Като група, първия ден те получават 10% намаление за престоя, втория ден - 15% намаление, а третия ден - 20%.

function solve(input) {
  let foodMoney = +input.shift();
  let souvenir = +input.shift();
  let hotelMoney = +input.shift();
  let fuel = (420 / 100) * 7 * 1.85;
  let foodAndSouvenir = 3 * foodMoney + 3 * souvenir;
  let day1 = hotelMoney * 0.9;
  let day2 = hotelMoney * 0.85;
  let day3 = hotelMoney * 0.8;
  let hotelFee = day1 + day2 + day3;
  let totalFee = fuel + foodAndSouvenir + hotelFee;
  console.log(`Money needed: ${totalFee.toFixed(2)}`);
}
