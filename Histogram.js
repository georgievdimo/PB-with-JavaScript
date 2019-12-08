//Дадени са n цели числа в интервала [1…1000]. От тях някакъв процент p1 са под 200, друг процент p2 са от 200 до 399, друг процент p3 са от 400 до 599, друг процент p4 са от 600 до 799 и останалите p5 процента са от 800 нагоре. Да се напише програма, която изчислява и отпечатва процентите p1, p2, p3, p4 и p5.

function solve(input) {
  let n = +input.shift();

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
    let number = +input.shift();
    if (number < 200) {
      p1 += 1;
    } else if (number >= 200 && number < 400) {
      p2 += 1;
    } else if (number >= 400 && number < 600) {
      p3 += 1;
    } else if (number >= 600 && number < 800) {
      p4 += 1;
    } else if (number >= 800) {
      p5 += 1;
    }
  }
  p1 = (p1 / n) * 100;
  p2 = (p2 / n) * 100;
  p3 = (p3 / n) * 100;
  p4 = (p4 / n) * 100;
  p5 = (p5 / n) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
