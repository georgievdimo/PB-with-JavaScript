//Напишете програма, която изчислява колко решения в естествените числа (включително и нулата) има уравнението: x1 + x2 + x3 = n. Числото n е цяло число и се въвежда от конзолата.

function solve(input) {
  let n = +input.shift();
  let validCombinationsCount = 0;
  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      for (let z = 0; z <= n; z++) {
        if (x + y + z == n) {
          validCombinationsCount++;
        }
      }
    }
  }
  console.log(validCombinationsCount);
}
