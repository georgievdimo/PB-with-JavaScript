//Дадени са n-на брой цели числа в интервала [1…1000]. От тях някакъв процент p1 се делят без остатък на 2, друг процент p2 се делят без остатък на 3, друг процент p3 се делят без остатък на 4. Да се напише програма, която изчислява и отпечатва процентите p1, p2 и p3.

function solve(input) {
  let n = +input.shift();
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 1; i <= n; i++) {
    let number = +input.shift();
    if (number % 2 == 0) {
      p1 += 1;
    }
    if (number % 3 == 0) {
      p2 += 1;
    }
    if (number % 4 == 0) {
      p3 += 1;
    }
  }
  p1 = (p1 / n) * 100;
  p2 = (p2 / n) * 100;
  p3 = (p3 / n) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}
