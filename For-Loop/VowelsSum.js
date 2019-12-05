//Да се напише програма, която получава текст (стринг) и изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:

function solve(input) {
  let string = input.shift();
  let totalSum = 0;
  for (i = 0; i < string.length; i++) {
    let char = string[i];
    switch (char) {
      case "a":
        totalSum += 1;
        break;
      case "e":
        totalSum += 2;
        break;
      case "i":
        totalSum += 3;
        break;
      case "o":
        totalSum += 4;
        break;
      case "u":
        totalSum += 5;
        break;
    }
  }
  console.log(totalSum);
}
