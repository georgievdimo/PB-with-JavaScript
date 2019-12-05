//Напишете програма, която чете текст(стринг), въведен от потребителя и печата всеки символ от текста на отделен ред.

function solve(input) {
  let string = input.shift();
  let end = string.length;
  for (let i = 0; i < end; i++) {
    console.log(string[i]);
  }
}
