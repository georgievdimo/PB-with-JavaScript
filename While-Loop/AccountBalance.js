

function solve(input) {
  let n = +input.shift();
  let counter = 0;
  let balans = 0.0;
  while (counter < n) {
    let amount = +input.shift();
    if (amount < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    balans += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    counter++;
  }
  console.log(`Total: ${balans.toFixed(2)}`);
}
