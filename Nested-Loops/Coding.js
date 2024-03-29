//Напишете програма, която получава едно цяло число. На конзолата трябва да се отпечатат толкова на брой редове, колкото цифрено е числото. Като на първи ред съответстват единиците, на втори ред десетиците, на трети ред стотиците от числото и т.н., докато свършат цифрите от числото. На всеки ред трябва да се отпечата символ, който отговаря на следните условия: Символът, който трябва да се отпечата на даден ред се намира от ASCII таблицата. Неговият десетичен ASCII код се намира като към цифрата от въведеното число, която съответства на даден ред се прибави 33. Символът се отпечатва толкова на брой пъти колкото е цифрата, съответстваща за този ред, ако за даден ред съответства цифра 0 на този ред се отпечатва еднократно "ZERO".

function solve(input) {
  let number = +input.shift();
  while (number > 0) {
    let lastDigit = number % 10;
    if (lastDigit > 0) {
      let asciiSymbol = String.fromCharCode(lastDigit + 33);
      console.log(asciiSymbol.repeat(lastDigit));
    } else {
      console.log("ZERO");
    }
    number = parseInt(number / 10);
  }
}
