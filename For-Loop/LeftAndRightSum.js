//Да се напише програма, която чете 2*n-на брой цели числа и проверява,  дали сумата на първите n числа (лява сума) е равна на сумата на вторите n числа (дясна сума). При равенство печата " Yes, sum = " + сумата; иначе печата " No, diff = " + разликата. Разликата се изчислява, като положително число (по абсолютна стойност).

function solve(input) {
  let initialValue = +input.shift();
  let end = initialValue * 2;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i <= end; i++) {
    let currentNumber = +input.shift();
    if (i <= initialValue) {
      leftSum += currentNumber;
    } else {
      rightSum += currentNumber;
    }
  }
  if (leftSum === rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
  } else {
    let difference = Math.abs(leftSum - rightSum);
    console.log(`No, diff = ${difference}`);
  }
}
