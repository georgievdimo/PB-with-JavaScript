//Напишете програма, която първоначално прочита име и парола на потребителски профил. След това чете парола за вход, при въвеждане на грешна парола, потребителя да се подкани да въведе нова парола.

function solve(input) {
  let username = input.shift();
  let password = input.shift();
  let data = input.shift();
  while (data !== password) {
      data = input.shift();
  }
  console.log(`Welcome ${username}!`);
}
