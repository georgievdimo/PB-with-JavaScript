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
