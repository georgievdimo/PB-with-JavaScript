//Ани обича да пътува и иска тази година да посети няколко различни дестинации. Като си избере дестинация, ще прецени колко пари ще й трябват, за да отиде до там и ще започне да спестява. Когато е спестила достатъчно, ще може да пътува. От конзолата всеки път ще се четат първо дестинацията и минималния бюджет, който ще е нужен за пътуването. След това ще се четат няколко суми, които Ани спестява като работи и когато успее да събере достатъчно за пътуването, ще заминава, като на конзолата трябва да се изпише: "Going to {дестинацията}!". Когато е посетила всички дестинации, които иска, вместо дестинация ще въведе "End" и програмата ще приключи.

function solve(input) {
  let destination = input.shift();
  let minBudget = +input.shift();
  let currentBudget = 0;
  let installment = 0;
  while (destination !== "End") {
    while (currentBudget < minBudget) {
      installment = +input.shift();
      currentBudget += installment;
      if (currentBudget >= minBudget) {
        console.log(`Going to ${destination}!`);
        break;
      }
    }
    destination = input.shift();
    minBudget = +input.shift();
    currentBudget = 0;
  }
}
