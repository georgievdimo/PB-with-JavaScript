//Напишете програма, която ви помага при пазаруването на коледна украса. Имате определен бюджет. До получаване на команда "Finish" ще получавате един от следите продукти. При покупката на всеки трети продукт получавате 30% отстъпка от цената му. Ако в даден момент бюджетът  е по-малък от цената на продукта пазаруването трябва да приключи и да отпечатате колко пари не са достигнали за закупуването му. Накрая винаги се отпечатва броят закупени продукти и колко пари общо са похарчени.

function solve(input) {
  let budget = +input.shift();
  let inputLine = input.shift();
  let count = 0;
  let items = 0;
  let sum = 0;
  while (inputLine !== "Finish") {
    let price = 0;
    switch (inputLine) {
      case "Star":
        price = 5.69;
        break;
      case "Angel":
        price = 8.49;
        break;
      case "Lights":
        price = 11.2;
        break;
      case "Wreath":
        price = 15.5;
        break;
      case "Candle":
        price = 3.59;
        break;
    }
    count++;
    if (count === 3) {
      price *= 0.7;
      count = 0;
    }
    if (budget >= price) {
      budget -= price;
      sum += price;
      items++;
    } else {
      let neededMoney = price - budget;
      console.log(
        `Not enough money! You need ${neededMoney.toFixed(2)}lv more.`
      );
      break;
    }
    inputLine = input.shift();
  }
  if (inputLine === "Finish") {
    console.log(`Congratulations! You bought everything!`);
  }
  console.log(`${items} items -> ${sum.toFixed(2)}lv spent.`);
}
