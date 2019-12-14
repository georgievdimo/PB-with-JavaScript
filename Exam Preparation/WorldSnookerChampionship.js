//С наближаването на световното първенство по снукър в театъра Крусибъл в Шефилд, Англия, феновете нямат търпение да се сдобият с ценните билети. Заради големия наплив от хора, организаторите ви молят да напишете програма за продаване на билети, като се има предвид следния ценоразпис: При закупуване на билет, зрителят може да избере опция, снимка с трофея, на цена 40 лири. При достигане на определена сума има отстъпки: Над 4000 лири има 25% отстъпка и безплатни снимки с трофея (ако  опцията за снимки е избрана, таксата от 40 лири за билет не се включва), Над 2500 лири има 10% отстъпка.

function solve(input) {
  let stage = input.shift();
  let ticketType = input.shift();
  let tickets = +input.shift();
  let picture = input.shift();
  let total = 0;
  if (stage === "Quarter final") {
    switch (ticketType) {
      case "Standard":
          total += tickets * 55.5;
        break;
      case "Premium":
        total += tickets * 105.2;
        break;
      case "VIP":
        total += tickets * 118.9;
        break;
    }
  } else if (stage === "Semi final") {
    switch (ticketType) {
      case "Standard":
        total += tickets * 75.88;
        break;
      case "Premium":
        total += tickets * 125.22;
        break;
      case "VIP":
        total += tickets * 300.4;
        break;
    }
  } else if (stage === "Final") {
    switch (ticketType) {
      case "Standard":
        total += tickets * 110.1;
        break;
      case "Premium":
        total += tickets * 160.66;
        break;
      case "VIP":
        total += tickets * 400;
        break;
    }
  }
  let isSpecial = true;
  if (total > 4000){
      total *= 0.75;
      isSpecial = false;
  } else if (total > 2500){
      total *= 0.9;
  }
  if(picture === "Y" && isSpecial === true){
      total += tickets * 40;
  }
  console.log(total.toFixed(2))
}
