//Семейство Иванови решават да подменят коледната украса в своя дом и да поръчат нова по интернет. Вашата задача е да напишете програма, която изчислява, дали бюджетът ще им стигне за украсата. Цената на всеки предмет ще представялва сумата от ASCII кодовете на всеки символ от думата.

function solve(input) {
  let budget = +input.shift();
  let inputLine = input.shift();
  let isOK = true;
  while (inputLine !== "Stop") {
    let sum = 0;
    let decoration = "";
    decoration = inputLine;
    for (let index = 0; index < decoration.length; index++) {
      let char = decoration[index];
      sum += char.charCodeAt();
    }
    if (budget >= sum) {
      budget -= sum;
      console.log(`Item successfully purchased!`);
      inputLine = input.shift();
    } else {
      isOK = false;
      break;
    }
  }
  if (isOK) {
    console.log(`Money left: ${budget}`);
  } else {
    console.log(`Not enough money!`);
  }
}
