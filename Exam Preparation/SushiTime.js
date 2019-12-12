//Суши е японско ястие, което напоследък набира огромна популярност както в Европа, така и в България. В таблицата са посочени основните видове суши и ресторантите, които го предлагат, както и цената за порция суши. Ако искате да си поръчате за вкъщи се доплаща цена за доставка, която е на стойност 20 % от цялата поръчка. Напишете програма, която изчислява колко ще е цената за поръчката. При въвеждане на невалиден ресторант да се отпечатва: {име на ресторанта} is invalid restaurant!

function solve(input) {
  let sushiType = input.shift();
  let sushiRestaurant = input.shift();
  let sushiCount = +input.shift();
  let delivery = input.shift();
  let totalSum = 0;
  let invalidName = false;
  switch (sushiRestaurant) {
    case "Sushi Zone":
      if (sushiType == "sashimi") {
        totalSum = sushiCount * 4.99;
      } else if (sushiType == "maki") {
        totalSum = sushiCount * 5.29;
      } else if (sushiType == "uramaki") {
        totalSum = sushiCount * 5.99;
      } else if (sushiType == "temaki") {
        totalSum = sushiCount * 4.29;
      }
      break;
    case "Sushi Time":
      if (sushiType == "sashimi") {
        totalSum = sushiCount * 5.49;
      } else if (sushiType == "maki") {
        totalSum = sushiCount * 4.69;
      } else if (sushiType == "uramaki") {
        totalSum = sushiCount * 4.49;
      } else if (sushiType == "temaki") {
        totalSum = sushiCount * 5.19;
      }
      break;
    case "Sushi Bar":
      if (sushiType == "sashimi") {
        totalSum = sushiCount * 5.25;
      } else if (sushiType == "maki") {
        totalSum = sushiCount * 5.55;
      } else if (sushiType == "uramaki") {
        totalSum = sushiCount * 6.25;
      } else if (sushiType == "temaki") {
        totalSum = sushiCount * 4.75;
      }
      break;
    case "Asian Pub":
      if (sushiType == "sashimi") {
        totalSum = sushiCount * 4.5;
      } else if (sushiType == "maki") {
        totalSum = sushiCount * 4.8;
      } else if (sushiType == "uramaki") {
        totalSum = sushiCount * 5.5;
      } else if (sushiType == "temaki") {
        totalSum = sushiCount * 5.5;
      }
      break;
    default:
      invalidName = true;
  }
  if (delivery == "Y") {
    totalSum *= 1.2;
  }
  if (invalidName) {
    console.log(`${sushiRestaurant} is invalid restaurant!`);
  } else {
    console.log(`Total price: ${Math.ceil(totalSum)} lv.`);
  }
}
