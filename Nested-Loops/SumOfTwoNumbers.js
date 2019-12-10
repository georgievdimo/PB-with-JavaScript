//Напишете програма която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа. На изхода се отпечатва, коя поред е комбинацията чиито сбор от числата е равен на дадено магическо число. Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.

function solve(input) {
  let startNum = +input.shift();
  let endNum = +input.shift();
  let magicNum = +input.shift();
  let combinationCount = 0;
  for (let row = startNum; row <= endNum; row++) {
    for (let col = startNum; col <= endNum; col++) {
      combinationCount++;
      if (row + col == magicNum) {
        console.log(
          `Combination N:${combinationCount} (${row} + ${col} = ${magicNum})`
        );
        return;
      }
    }
  }
  console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
}
