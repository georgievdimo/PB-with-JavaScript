//Напишете програма, която получава n-на брой числа (n > 0) и намира най-малкото измежду тях. Първо се въвежда броят числа n, а след това самите n числа, по едно на ред. 

function solve(input) {
  let n = +input.shift();
  let count = 0;
  let minNumber = Number.MAX_SAFE_INTEGER;
  while (count < n) {
    let num = +input.shift();
    count++;
    if (num < minNumber) {
      minNumber = num;
    }
  }
  console.log(minNumber);
}
