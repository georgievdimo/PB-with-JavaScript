//Напишете програма, която чете цяло положително число n, въведено от потребителя, и печата числата от n до 1 в обратен ред (от най-голямото към най-малкото).

function solve(input) {
  let n = +input.shift();
  for (i = n; i >= 1; i--) {
    console.log(i);
  }
}

