//Магазин за плодове през работните дни работи на следните цени. Събота и неделя магазинът работи на по-високи цени. Напишете програма, която приема като вход аргумента input и изважда от него  плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число, и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 

function solve(input) {
  let fruit = input.shift();
  let day = input.shift();
  let quantity = +input.shift();
  let price = 0.0;
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit === "banana") {
        price = quantity * 2.5;
        console.log(price.toFixed(2));
      } else if (fruit === "apple") {
        price = quantity * 1.2;
        console.log(price.toFixed(2));
      } else if (fruit === "orange") {
        price = quantity * 0.85;
        console.log(price.toFixed(2));
      } else if (fruit === "grapefruit") {
        price = quantity * 1.45;
        console.log(price.toFixed(2));
      } else if (fruit === "kiwi") {
        price = quantity * 2.7;
        console.log(price.toFixed(2));
      } else if (fruit === "pineapple") {
        price = quantity * 5.5;
        console.log(price.toFixed(2));
      } else if (fruit === "grapes") {
        price = quantity * 3.85;
        console.log(price.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit === "banana") {
        price = quantity * 2.7;
        console.log(price.toFixed(2));
      } else if (fruit === "apple") {
        price = quantity * 1.25;
        console.log(price.toFixed(2));
      } else if (fruit === "orange") {
        price = quantity * 0.9;
        console.log(price.toFixed(2));
      } else if (fruit === "grapefruit") {
        price = quantity * 1.6;
        console.log(price.toFixed(2));
      } else if (fruit === "kiwi") {
        price = quantity * 3.0;
        console.log(price.toFixed(2));
      } else if (fruit === "pineapple") {
        price = quantity * 5.6;
        console.log(price.toFixed(2));
      } else if (fruit === "grapes") {
        price = quantity * 4.2;
        console.log(price.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
  }
}
