//Мечтаейки да осигури перфектната сватба на половинката си, Иван решава да инвестира и отваря ресторант, като част от идеята му е да предлага и абонаментни програми за доставка до дома. Месечната такса се определя в зависимост от типа поръчка и срока. Да се напише програма, която изчислява сумата, която трябва да се плати за определен брой месеци. Условия: при добавен десерт, към таксата се прибавя различна сума, в зависимост от цената на абонамента, при сума по-малка или равна на 10.00 лв. = 5.50 лв., при сума по-малка или равна на 30.00 лв. = 4.35 лв., при сума по-голяма от 30.00 лв. = 3.85 лв., ако договорът е за две години, общата сума се намалява с 3.75 %.

function solve(input) {
  let years = input.shift();
  let plan = input.shift();
  let dessert = input.shift();
  let months = +input.shift();
  let price = 0;
  let sum = 0;
  let discount = 0;
  if (years === "one") {
    switch (plan) {
      case "Small":
        price = 9.98;
        break;
      case "Middle":
        price = 18.99;
        break;
      case "Large":
        price = 25.98;
        break;
      case "ExtraLarge":
        price = 35.99;
        break;
    }
  } else if (years === "two") {
    switch (plan) {
      case "Small":
        price = 8.58;
        break;
      case "Middle":
        price = 17.09;
        break;
      case "Large":
        price = 23.59;
        break;
      case "ExtraLarge":
        price = 31.79;
        break;
    }
  }
  if (dessert === "yes") {
    if (price <= 10) {
      price += 5.5;
    } else if (price <= 30) {
      price += 4.35;
    } else {
      price += 3.85;
    }
  }
  sum = price * months;
  if (years === "two") {
    discount = (sum * 3.75) / 100;
    sum -= discount;
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
