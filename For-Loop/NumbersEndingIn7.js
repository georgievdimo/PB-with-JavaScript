//Напишете програма, която отпечатва числата в диапазона [1…1000], които завършват на 7.

function solve() {
  for (let number = 1; number <= 1000; number++) {
    if (number % 10 == 7) {
      console.log(number);
    }
  }
}
