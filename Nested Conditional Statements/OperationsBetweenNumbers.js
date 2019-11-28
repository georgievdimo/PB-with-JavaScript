//Напишете програма, която приема входен аргумент (Input) и изважда  две цели числа (N1 и N2) и оператор от него, с който да се извърши дадена математическа операция с тях. Възможните операции са: Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%). При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен. При обикновеното деление – резултата. При модулното деление – остатъка. Трябва да се има предвид, че делителят може да е равен на 0(нула), а на нула не се дели. В този случай трябва да се отпечата специално съобщениe. Да се отпечата на конзолата един ред: Ако операцията е събиране, изваждане или умножение: "{N1} {оператор} {N2} = {резултат} – {even/odd}". Ако операцията е деление: "{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая. Ако операцията е модулно деление: "{N1} % {N2} = {остатък}". В случай на деление с 0(нула): "Cannot divide {N1} by zero".

function solve(input) {
  let num1 = +input.shift();
  let num2 = +input.shift();
  let operator = input.shift();
  let result = 0.0;
  let evenOdd;
  let residue;
  if (operator === "+" || operator === "-" || operator === "*") {
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    }
    if (result % 2 == 0) {
      evenOdd = "even";
    } else {
      evenOdd = "odd";
    }
    console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
  } else if (operator === "/" || operator === "%") {
    if (num2 == 0) {
      console.log(`Cannot divide ${num1} by zero`);
    } else if (operator === "/") {
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    } else if (operator === "%") {
      residue = num1 % num2;
      console.log(`${num1} % ${num2} = ${residue}`);
    }
  }
}
