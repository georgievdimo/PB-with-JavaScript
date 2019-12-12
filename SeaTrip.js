//

function solve(input) {
  let foodMoney = +input.shift();
  let suv = +input.shift();
  let hotelMoney = +input.shift();
  let fuel = (420 / 100) * 7 * 1.85;
  let foodAndSuv = 3 * foodMoney + 3 * suv;
  let day1 = hotelMoney * 0.9;
  let day2 = hotelMoney * 0.85;
  let day3 = hotelMoney * 0.8;
  let hotelFee = day1 + day2 + day3;
  let totalFee = fuel + foodAndSuv + hotelFee;
  console.log(`Money needed: ${totalFee.toFixed(2)}`);
}
