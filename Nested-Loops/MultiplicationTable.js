//Отпечатайте на конзолата таблицата за умножение за числата от 1 до 10 във формат: "{първи множител} * {втори множител} = {резултат}".

function solve() {
  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      let result = row * col;
      console.log(`${row} * ${col} = ${result}`);
    }
  }
}
