//Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон. Напишете програма, която да приема на входа бюджета и сезона, а на изхода да изкарва, къде ще почива програмистът и колко ще похарчи. Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета: При 100лв. или по-малко – някъде в България. Лято – 30% от бюджета. Зима – 70% от бюджета. При 1000лв. или по малко – някъде на Балканите. Лято – 40% от бюджета. Зима – 80% от бюджета. При повече от 1000лв. – някъде из Европа. При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.

function solve(input) {
  let budget = +input.shift();
  let season = input.shift();
  let destination = "";
  let placeToSleep = "";
  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      placeToSleep = "Camp";
      budget *= 0.3;
    } else {
      placeToSleep = "Hotel";
      budget *= 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      placeToSleep = "Camp";
      budget *= 0.4;
    } else {
      placeToSleep = "Hotel";
      budget *= 0.8;
    }
  } else {
    destination = "Europe";
    placeToSleep = "Hotel";
    budget *= 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeToSleep} - ${(budget).toFixed(2)}`);
}
