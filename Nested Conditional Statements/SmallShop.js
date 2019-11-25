//Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града: Sofia:	coffee=0.50, water=0.80	, beer=1.20, sweets=0.45,	peanuts=1.60. Plovdiv:	coffee=0.40, water=0.70	, beer=1.15, sweets=1.30,	peanuts=1.50. Varna:	coffee=0.45, water=0.70	, beer=1.10, sweets=1.35,	peanuts=1.55. Напишете програма, която приема входен аргумент и изважда от него продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 

function solve(input) {
  let product = input.shift();
  let city = input.shift();
  let quantity = +input.shift();
  let price = 0.0;
  switch (city) {
    case "Sofia":
      if (product === "coffee") {
        price = quantity * 0.5;
      } else if (product === "water") {
        price = quantity * 0.8;
      } else if (product === "beer") {
        price = quantity * 1.2;
      } else if (product === "sweets") {
        price = quantity * 1.45;
      } else if (product === "peanuts") {
        price = quantity * 1.6;
      }
      break;
    case "Plovdiv":
      if (product === "coffee") {
        price = quantity * 0.4;
      } else if (product === "water") {
        price = quantity * 0.7;
      } else if (product === "beer") {
        price = quantity * 1.15;
      } else if (product === "sweets") {
        price = quantity * 1.3;
      } else if (product === "peanuts") {
        price = quantity * 1.5;
      }
      break;
    case "Varna":
      if (product === "coffee") {
        price = quantity * 0.45;
      } else if (product === "water") {
        price = quantity * 0.7;
      } else if (product === "beer") {
        price = quantity * 1.1;
      } else if (product === "sweets") {
        price = quantity * 1.35;
      } else if (product === "peanuts") {
        price = quantity * 1.55;
      }
      break;
  }
  console.log(price);
}
