//Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. Напишете програма, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това.

function solve(input) {
  let change = +input.shift();
  change = Math.floor(change * 100);
  let counter = 0;
  while (change > 0) {
    if (change - 200 >= 0) {
      change = change - 200;
      counter++;
    } else if (change - 100 >= 0) {
      change = change - 100;
      counter++;
    } else if (change - 50 >= 0) {
      change = change - 50;
      counter++;
    } else if (change - 20 >= 0) {
      change = change - 20;
      counter++;
    } else if (change - 10 >= 0) {
      change = change - 10;
      counter++;
    } else if (change - 5 >= 0) {
      change = change - 5;
      counter++;
    } else if (change - 2 >= 0) {
      change = change - 2;
      counter++;
    } else if (change - 1 >= 0) {
      change = change - 1;
      counter++;
    }
  }
  console.log(counter);
}
