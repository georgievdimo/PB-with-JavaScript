//Напишете програма, която чете n-на брой числа, въведени от потребителя, и пресмята сумата, минимума и максимума на числата на четни и нечетни позиции (броим от 1). Когато няма минимален / максимален елемент, отпечатайте "No". Изходът да се форматира в следния вид: "OddSum=" + {сума на числата на нечетни позиции}, "OddMin=" + { минимална стойност на числата на нечетни позиции } / {“No”}, "OddMax=" + { максимална стойност на числата на нечетни позиции } / {“No”}, "EvenSum=" + { сума на числата на четни позиции }, "EvenMin=" + { минимална стойност на числата на четни позиции } / {“No”}, "EvenMax=" + { максимална стойност на числата на четни позиции } / {“No”}. Всяко число трябва да е форматирано до втория знак след десетичната запетая.

function solve(input) {
  let numbers = +input.shift();
  let oddSum = 0;
  let oddMin = Number.MAX_SAFE_INTEGER;
  let oddMax = Number.MIN_SAFE_INTEGER;
  let evenSum = 0;
  let evenMin = Number.MAX_SAFE_INTEGER;
  let evenMax = Number.MIN_SAFE_INTEGER;
  for (let position = 1; position <= numbers; position++) {
    let currentNumber = +input.shift();
    if (position % 2 !== 0) {
      oddSum += currentNumber;
      if (currentNumber < oddMin) {
        oddMin = currentNumber;
      }
      if (currentNumber > oddMax) {
        oddMax = currentNumber;
      }
    } else {
      evenSum += currentNumber;
      if (currentNumber < evenMin) {
        evenMin = currentNumber;
      }
      if (currentNumber > evenMax) {
        evenMax = currentNumber;
      }
    }
  }
  console.log(`OddSum=${oddSum.toFixed(2)},`);
  if (oddMin !== Number.MAX_SAFE_INTEGER) {
    console.log(`OddMin=${oddMin.toFixed(2)},`);
  } else {
    console.log(`OddMin=No,`);
  }
  if (oddMax !== Number.MIN_SAFE_INTEGER) {
    console.log(`OddMax=${oddMax.toFixed(2)},`);
  } else {
    console.log(`OddMax=No,`);
  }
  console.log(`EvenSum=${evenSum.toFixed(2)},`);
  if (evenMin !== Number.MAX_SAFE_INTEGER) {
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
  } else {
    console.log(`EvenMin=No,`);
  }
  if (evenMax !== Number.MIN_SAFE_INTEGER) {
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
  } else {
    console.log(`EvenMax=No`);
  }
}
