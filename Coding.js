function solve(input) {
  let number = +input.shift();
  while (number > 0) {
    let lastDigit = number % 10;
    if (lastDigit > 0) {
      let asciiSymbol = String.fromCharCode(lastDigit + 33);
      console.log(asciiSymbol.repeat(lastDigit));
    } else {
      console.log("ZERO");
    }
    number = parseInt(number / 10);
  }
}
