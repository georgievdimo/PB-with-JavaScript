//Напишете програма, която проверява дали точка {x, y} се намира върху някоя от страните на правоъгълник {x1, y1} – {x2, y2}. Входните данни се приемат от конзолата и се състоят от 6 реда : десетичните числа x1, y1, x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2). Да се отпечата "Border" (точката лежи на някоя от страните) или "Inside / Outside" (в противен случай).

function solve(input) {
  let x1 = +input.shift();
  let y1 = +input.shift();
  let x2 = +input.shift();
  let y2 = +input.shift();
  let x = +input.shift();
  let y = +input.shift();

  let xBorder = (x == x1 || x == x2) && y >= y1 && y <= y2;
  let yBorder = x >= x1 && x <= x2 && (y == y1 || y == y2);

  if (xBorder || yBorder) {
    console.log("Border");
  } else {
    console.log("Inside / Outside");
  }
}
