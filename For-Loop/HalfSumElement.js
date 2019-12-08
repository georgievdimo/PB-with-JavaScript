//Да се напише програма, която получава n-на брой цели числа и проверява, дали сред тях съществува число, което е равно на сумата на всички останали. Ако има такъв елемент, печата "Yes", "Sum = "  + неговата стойност; иначе печата "No", "Diff = " + разликата между най-големия елемент и сумата на останалите (по абсолютна стойност).

function solve(input) {
  let n = +input.shift();
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    let number = +input.shift();
    sum += number;
    if (number > max) {
      max = number;
    }
  }
  sum -= max;
  if (sum == max) {
    console.log(`Yes\nSum = ${sum}`);
  } else {
    let diff = Math.abs(sum - max);
    console.log(`No\nDiff = ${diff}`);
  }
}
