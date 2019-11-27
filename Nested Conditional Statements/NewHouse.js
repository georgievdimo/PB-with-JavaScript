//Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете програма която да изчисли колко  ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. Съществуват следните отстъпки: Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена. Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена. Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена. Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%. Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%. Да се отпечата на конзолата на един ред: Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left.". Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more." Сумата да бъде форматирана до втория знак след десетичната запетая.

function solve(input) {
  let flowers = input.shift();
  let quantity = +input.shift();
  let budget = +input.shift();
  let price = 0.0;
  switch (flowers) {
    case "Roses":
      price = quantity * 5;
      if (quantity > 80) {
        price *= 0.9;
      }
      break;
    case "Dahlias":
      price = quantity * 3.8;
      if (quantity > 90) {
        price *= 0.85;
      }
      break;
    case "Tulips":
      price = quantity * 2.8;
      if (quantity > 80) {
        price *= 0.85;
      }
      break;
    case "Narcissus":
      price = quantity * 3;
      if (quantity < 120) {
        price *= 1.15;
      }
      break;
    case "Gladiolus":
      price = quantity * 2.5;
      if (quantity < 80) {
        price *= 1.2;
      }
      break;
  }
  if (budget - price >= 0) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${flowers} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}
