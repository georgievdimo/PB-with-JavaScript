//Лятната почивка на Ани наближава и тя решава да се подготви за нея предварително, като закупи всичко необходимо. Тя има определен бюджет и се нуждае от плажна хавлия, чадър, плажна чанта и джапанки. Напишете програма, която да изчислява каква сума трябва да заплати Ани за своите покупки и проверява дали бюджетът й ще бъде достатъчен, като знаете, че цената на чадъра е две трети от цената на хавлията, а цената на джапанките е 75% от тази на плажния чадър. Плажната чанта струва една трета от сумата за джапанките и хавлията взети заедно. Тъй като Ани е редовен клиент на този магазин, ще й бъде направена процентна отстъпка от общата сума на покупката.

function solve(input) {
  let budget = +input.shift();
  let towelPrice = +input.shift();
  let discountPercent = +input.shift();
  let umbrellaPrice = (towelPrice / 3) * 2;
  let flipFlopsPrice = umbrellaPrice * 0.75;
  let beachBagPrice = (towelPrice + flipFlopsPrice) / 3;
  let totalCosts = towelPrice + umbrellaPrice + flipFlopsPrice + beachBagPrice;
  let discount = (totalCosts * discountPercent) / 100;
  let withDiscount = totalCosts - discount;
  let moneyLeft = Math.abs(budget - withDiscount);
  if (withDiscount <= budget) {
    console.log(`Annie's sum is ${withDiscount.toFixed(2)} lv. She has ${moneyLeft.toFixed(2)} lv. left.`);
  } else {console.log(`Annie's sum is ${withDiscount.toFixed(2)} lv. She needs ${moneyLeft.toFixed(2)} lv. more.`);
  }
}
