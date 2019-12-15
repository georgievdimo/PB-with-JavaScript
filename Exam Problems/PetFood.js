//Ани има два домашни любимеца - куче и котка. Напишете програма, която изготвя статистика за храната на домашните любимци за определен брой дни. Всеки ден кучето и котката изяждат различно количество от общата им храна. На всеки трети ден получават награда - бисквитки. Количеството на бисквитките е 10% от общо изядената храна за деня. Вашата програма трябва да отпечатва статистика за количеството бисквитки, които са изяли, колко процента от първоначалното количество обща храна са изяли и колко процента от изядената храна е изяло кучето и колко е изяла котката.

function solve(input) {
  let days = +input.shift();
  let totalFood = +input.shift();
  let dogFoodSum = 0;
  let catFoodSum = 0;
  let biscutsSum = 0;
  let eatenFoodSum = 0;
  let foodLeft = totalFood;
  for (let count = 1; count <= days; count++) {
    let dogFood = +input.shift();
    let catFood = +input.shift();
    let dayFoodSum = dogFood + catFood;
    if (dayFoodSum <= foodLeft) {
      dogFoodSum += dogFood;
      catFoodSum += catFood;
      eatenFoodSum += dayFoodSum;
      foodLeft -= dayFoodSum;
      if (count === 3) {
        let biscuts = dayFoodSum * 0.1;
        biscutsSum += biscuts;
        count = 0;
      }
    } else {
      break;
    }
  }
  console.log(`Total eaten biscuits: ${biscutsSum.toFixed(0)}gr.`);
  let eatenFoodPercent = (eatenFoodSum / totalFood) * 100;
  console.log(`${eatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
  let dogFoodPercent = (dogFoodSum / eatenFoodSum) * 100;
  console.log(`${dogFoodPercent.toFixed(2)}% eaten from the dog.`);
  let catFoodPercent = (catFoodSum / eatenFoodSum) * 100;
  console.log(`${catFoodPercent.toFixed(2)}% eaten from the cat.`);
}
