//Напишете програма, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Програмата трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
Незадоволителна е всяка оценка, която е по-малка или равна на 4.

function solve(input) {
  let poorGrade = +input.shift();
  let gradeCount = 0;
  let poorGradeCount = 0;
  let sumGrade = 0;
  let averageGrade = 0;
  let problemName;
  let data = input.shift();
  while (data !== "Enough") {
    let problemGrade = +input.shift();
    if (problemGrade <= 4) {
      poorGradeCount++;
      if (poorGradeCount >= poorGrade) {
        console.log(`You need a break, ${poorGradeCount} poor grades.`);
        break;
      }
    }
    sumGrade += problemGrade;
    gradeCount++;
    problemName = data;
    data = input.shift();
  }
  if (data === "Enough") {
    averageGrade = sumGrade / gradeCount;
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradeCount}`);
    console.log(`Last problem: ${problemName}`);
  }
}
