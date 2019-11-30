//Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен. При успешно завършване на 12-ти клас да се отпечата : "{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}". В случай, че ученикът е изключен от училище, да се отпечата: "{име на ученика} has been excluded at {класа, в който е бил изключен} grade". Стойността трябва да бъде форматирана до втория знак след десетичната запетая.

function solve(input) {
  let name = input.shift();
  let excluded = 0;
  let isExcluded = false;
  let counter = 0;
  let sum = 0;
  while (counter < 12) {
    let grade = +input.shift();
    if (grade < 4.0) {
      excluded++;
    }
    if (grade >= 4.0) {
      sum += grade;
      counter++;
    }
    if (excluded >= 2) {
      isExcluded = true;
      break;
    }
  }
  if (isExcluded == false) {
    let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  } else {
    console.log(`${name} has been excluded at ${counter + 1} grade`);
  }
}
