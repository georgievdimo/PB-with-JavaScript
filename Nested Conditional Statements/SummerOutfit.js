//Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете програма която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата. Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {облекло} and {обувки}."

function solve(input) {
  let degrees = +input.shift();
  let timeOfDay = input.shift();
  let outfit;
  let shoes;
  switch (timeOfDay) {
    case "Morning":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (degrees >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
