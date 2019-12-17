//Деси иска да посети голям музикален фестивал това лято. Тя трябва да започне да спестява част от дохода си, за да успее да заплати разходите по пътуването й до там. Напишете програма, която да изчисли максимално  колко процента от дохода си може да спестява Деси, за да посети фестивала. Всеки месец, Деси има нужда от определена сума пари, за да покрие личните си разходи за месеца, а 30% от дохода си ще запази за непредвидени разходи.

function solve(input) {
  let incomePerMonth = +input.shift();
  let months = +input.shift();
  let expensesPerMonth = +input.shift();
  let unexpectedCosts = incomePerMonth * 0.3;
  let amountToSave = incomePerMonth - (expensesPerMonth + unexpectedCosts);
  let amountToSavePercent = (amountToSave / incomePerMonth) * 100;
  let amountToSaveAllMonths = amountToSave * months;
  console.log(`She can save ${amountToSavePercent.toFixed(2)}%`);
  console.log(amountToSaveAllMonths.toFixed(2));
}
