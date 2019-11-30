//Напишете програма, която получава n-на брой числа (n > 0) и намира най-голямото измежду тях. Първо се получава броят числа n, а след това самите n числа, по едно на ред. 

function solve(input) {
  let n = +input.shift();
  let count = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  while (count < n) {
    let num = +input.shift();
    count++;
    if (num > maxNumber) {
      maxNumber = num;
    }
  }
  console.log(maxNumber);
}
