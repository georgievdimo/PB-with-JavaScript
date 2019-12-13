//Напишете програма, която чете от конзолата две шестцифрени цели числа в диапазона от 100000 до 300000. Винаги първото въведено число ще бъде по малко от второто. На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, прочетени от конзолата числа и отговарят на следното условие: сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 

function solve(input) {
let start = +input.shift();
let end = +input.shift();
let output = "";
for(number = start; number<=end; number++){
  let numberAsString = `${number}`;
  let oddSum = 0;
  let evenSum = 0;
  for(let index = 0; index < numberAsString.length; index++){
    const digit = Number(numberAsString[index]);
    if(index % 2 !== 0){
      oddSum += digit;
    } else {
      evenSum += digit
    }
  }
  if(oddSum === evenSum){
    output += number + " ";
  }
}
console.log(output);
}
