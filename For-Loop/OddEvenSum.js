//Да се напише програма, която получава n-на брой цели числа и проверява, дали сумата от числата на четни позиции е равна на сумата на числата на нечетни позиции. При равенство да се отпечатат "Yes" и на нов ред "Sum = " + сумата; иначе да се отпечата "No" и на нов ред "Diff = " + разликата. Разликата се изчислява по абсолютна стойност.

function solve(input) {
  let end = +input.shift();
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 1; i <= end; i++) {
    let currentNumber = +input.shift();
    if (i % 2 == 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }
  if (evenSum === oddSum) {
    console.log(`Yes\nSum = ${evenSum}`);
  } else {
    let diff = Math.abs(oddSum - evenSum);
    console.log(`No\nDiff = ${diff}`);
  }
}
