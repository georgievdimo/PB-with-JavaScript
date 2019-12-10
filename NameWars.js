function solve(input) {
  let name = "";
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let winnerName = "";
  name = input.shift();
  while (name !== "STOP") {
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    if (sum > maxSum) {
      maxSum = sum;
      winnerName = name;
    }
    name = input.shift();
    sum = 0;
  }
  console.log(`Winner is ${winnerName} - ${maxSum}!`);
}
