//Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя. Съществуват следните видове помещения, със следните цени за престой: "room for one person" – 18.00 лв за нощувка, "apartment" – 25.00 лв за нощувка, "president apartment" – 35.00 лв за нощувка. Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление. Намаленията са както следва: по вид помещение за по-малко от 10 дни,	между 10 и 15 дни, повече от 15 дни, за room for one person	не ползва намаление	не ползва намаление	не ползва намаление, за apartment	30% от крайната цена,	35% от крайната цена,	50% от крайната цена, president apartment -	10% от крайната цена	15% от крайната цена	20% от крайната цена. След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.


function solve(input) {
  let days = +input.shift() - 1;
  let room = input.shift();
  let grade = input.shift();
  let price = 0.0;
  switch (room) {
    case "room for one person":
      price = days * 18;
      break;
    case "apartment":
      price = days * 25;
      if (days < 10) {
        price *= 0.7;
      } else if (days >= 10 && days <= 15) {
        price *= 0.65;
      } else if (days > 15) {
        price *= 0.5;
      }
      break;
    case "president apartment":
      price = days * 35;
      if (days < 10) {
        price *= 0.9;
      } else if (days >= 10 && days <= 15) {
        price *= 0.15;
      } else if (days > 15) {
        price *= 0.8;
      }
      break;
  }
  if (grade == "positive") {
    price *= 1.25;
  } else if (grade == "negative") {
    price *= 0.9;
  }
  console.log(`${price.toFixed(2)}`);
}
