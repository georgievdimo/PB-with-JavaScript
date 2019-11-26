//Напишете конзолна програма, която приема входен аргумент input и извадете от него име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".

function solve(input) {
  let city = input.shift();
  let sales = +input.shift();
  let commission = -1;

  if (city === "Sofia") {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.05;
    } else if (sales > 500 && sales <= 1000) {
      commission = sales * 0.07;
    } else if (sales > 1000 && sales <= 10000) {
      commission = sales * 0.08;
    } else if (sales > 10000) {
      commission = sales * 0.12;
    } else {
      console.log("error");
    }
    if (commission > -1) {
      console.log(commission.toFixed(2));
    }
  } else if (city === "Varna") {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.045;
    } else if (sales > 500 && sales <= 1000) {
      commission = sales * 0.075;
    } else if (sales > 1000 && sales <= 10000) {
      commission = sales * 0.1;
    } else if (sales > 10000) {
      commission = sales * 0.13;
    } else {
      console.log("error");
    }
    if (commission > -1) {
      console.log(commission.toFixed(2));
    }
  } else if (city === "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      commission = sales * 0.055;
    } else if (sales > 500 && sales <= 1000) {
      commission = sales * 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      commission = sales * 0.12;
    } else if (sales > 10000) {
      commission = sales * 0.145;
    } else {
      console.log("error");
    }
    if (commission > -1) {
      console.log(commission.toFixed(2));
    }
  } else {
    console.log("error");
  }
}
