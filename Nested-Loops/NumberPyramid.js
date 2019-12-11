//Напишете програма, която получава цяло число n, въведено от потребителя и отпечатва пирамида от числа.

function solve(input) {
  let end = +input.shift();
  let currentNumber = 1;
  let isBigger = false;
  let line = "";
  for (let row = 1; row <= end; row++) {
    for (let number = 1; number <= row; number++) {
      if (currentNumber > end) {
        isBigger = true;
        break;
      }
      line += currentNumber + " ";
      currentNumber++;
    }
    console.log(line);
    line = "";
    if (isBigger) {
      break;
    }
  }
}
