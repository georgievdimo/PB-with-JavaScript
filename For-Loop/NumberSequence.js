//Напишете програма, която прочита n на брой числа. Принтирайте най-голямото и най-малкото число сред въведените.

function solve(input) {
  let n = +input.shift();
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (i = 1; i <= n; i++) {
    let currentNumber = +input.shift();
    if (currentNumber > max) {
      max = currentNumber;
    }
    if (currentNumber < min) {
      min = currentNumber;
    }
  }
  console.log(`Max number: ${max}`);
  console.log(`Min number: ${min}`);
}
