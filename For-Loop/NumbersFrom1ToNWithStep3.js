//Напишете програма, която чете число n, въведено от потребителя, и отпечатва числата от 1 до n през 3 (със стъпка 3).

function solve(input) {
  let number = +input.shift();
  for (let i = 1; i <= number; i += 3) {
    console.log(i);
  }
}
