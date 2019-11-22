//Пешо решава да направи купон и отива до алкохолната борса за да купи бира, вино, ракия и уиски. На конзолата се въвежда цената на уискито в лв./л. и количеството на бирата, виното, ракията и уискито, които трябва да закупи. Да се напише програма, която пресмята колко пари са му необходими за да плати сметката, като знаете, че: цената на ракията е на половина по-ниска от тази на уискито, цената на виното е с 40% по-ниска от цената на ракията, a цената на бирата е с 80% по-ниска от цената на ракията.

function solve(input) {
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());
    let rakiaPrice = whiskeyPrice * 0.5;
    let winePrice = rakiaPrice - (rakiaPrice * 0.4);
    let beerPrice = rakiaPrice - (rakiaPrice * 0.8);
    let rakiaSum = rakiaLiters * rakiaPrice;
    let wineSum = wineLiters * winePrice;
    let beerSum = beerLiters * beerPrice;
    let whiskeySum = whiskeyLiters * whiskeyPrice;
    let totalSum = rakiaSum + wineSum + beerSum + whiskeySum;
    console.log(totalSum.toFixed(2));
}
