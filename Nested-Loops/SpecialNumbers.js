//Да се напише програма, която чете едно цяло число N, въведено от потребителя  и генерира всички възможни “специални” числа от 1111 до 9999. За да бъде “специалнo” едно число, то трябва да отговаря на следното условие: N да се дели на всяка една от неговите цифри без остатък.

function solve(input) {
  let n = +input.shift();
  let output = "";
  for (let number = 1111; number <= 9999; number++) {
    let isSpecial = true;
    let numberAsString = number + "";
    for (let index = 0; index < numberAsString.length; index++) {
      let digit = Number(numberAsString[index]);
      if (n % digit !== 0) {
        isSpecial = false;
        break;
      }
    }
    if (isSpecial) {
      output += number + " ";
    }
  }
  console.log(output);
}
