//Напишете програма, която въвежда цяло положително число n в диапазона [1…100]. При въвеждане на число извън посочения диапазон, да се отпечата съобщение за грешка и да се въведе ново число.

function solve(input) {
  let number = +input.shift();
  while (number < 1 || number > 100) {
    console.log("Invalid Number!");
    number = +input.shift();
  }
  console.log(`The number is: ${number}`);
}
