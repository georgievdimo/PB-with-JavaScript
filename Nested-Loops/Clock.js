//Напишете програма, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. Часовете трябва да се изписват във формат "{час}:{минути}".

function solve() {
  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min++) {
      console.log(`${hour}:${min}`);
    }
  }
}
