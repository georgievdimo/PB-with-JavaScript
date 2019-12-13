//Курсът "Train the trainers" е към края си и финалното оценяване наближава. Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете програма,  в която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях. От конзолата на първият ред се прочита броят на хората в журито n - цяло число в интервала [1…20]. След това на отделен ред се прочита името на презентацията - текст. За всяка една презентация на нов ред се четат n - на брой оценки - реално число в интервала [2.00…6.00]. След изчисляване на средната оценка за конкретна презентация, на конзолата се печата "{името на презентацията} - {средна оценка}.". След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва. Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.

function solve(input) {
  let jury = +input.shift();
  let currentLine = input.shift();
  let sumAverageGrades = 0;
  let totalPresentations = 0;
  while (currentLine !== "Finish") {
    let presentation = currentLine;
    let sumOfGrade = 0;
    for (let step = 1; step <= jury; step++) {
      let currentJuryGrade = +input.shift();
      sumOfGrade += currentJuryGrade;
    }
    let averageGrade = sumOfGrade / jury;
    console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
    sumAverageGrades += averageGrade;
    totalPresentations++;
    currentLine = input.shift();
  }
  let totalAverage = sumAverageGrades / totalPresentations;
  console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);
}
