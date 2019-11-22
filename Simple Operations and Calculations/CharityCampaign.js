//В сладкарница се провежда благотворителна кампания за събиране на средства, в която могат да се включат сладкари от цялата страна. Първоначално прочитаме от конзолата броя на дните, в които тече кампанията и броя на сладкарите, които ще се включат. След това на отделни редове получаваме количеството на тортите, гофретите и палачинките, които ще бъдат приготвени от един сладкар за един ден. Трябва да се има предвид следния ценоразпис: Торта - 45 лв., Гофрета - 5.80 лв., Палачинка – 3.20 лв. 1/8 от крайната сума ще бъде използвана за покриване на разходите за продуктите по време на кампанията. Да се напише програма, която изчислява сумата, която е събрана в края на кампанията.

function solve(input) {
    let campDays = Number(input.shift());
    let cakesMakers = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let panCakes = Number(input.shift());
    let cakesPrice = cakes * 45;
    let wafflesPrice = waffles * 5.80;
    let panCakesPrice = panCakes * 3.20;
    let totalSumForDay = (cakesPrice + wafflesPrice + panCakesPrice) * cakesMakers;
    let campSum = totalSumForDay * campDays;
    let finalSum = campSum - (campSum / 8);
    console.log(finalSum.toFixed(2));
}
