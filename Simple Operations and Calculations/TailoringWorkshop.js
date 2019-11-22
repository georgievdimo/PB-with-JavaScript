//Шивашки цех приема поръчки за ушиване на покривки и карета за маси за заведения. Покривките са правоъгълни, каретата са квадратни, броят им винаги е еднакъв. Покривката трябва да виси с 30 см от всеки ръб на масата. Страната на каретата е половината от дължината на масите. Във всяка поръчка се включва информация за броя и размерите на масите. Напишете програма, която пресмята цената на поръчка в долари и в левове, като квадратен метър плат за правоъгълна покривка струва 7 долара, а за каре – 9 долара. Курсът на долара е 1.85 лева.

function solve(input) {
    let tables = Number(input.shift());
    let tablesLength = Number(input.shift());
    let tablesWidth = Number(input.shift());
    let coversArea = tables * (tablesLength + 2 * 0.30) * (tablesWidth + 2 * 0.30);
    let squaresArea = tables * (tablesLength / 2) * (tablesLength / 2);
    let priceUSD = coversArea * 7 + squaresArea * 9;
    let priceBGN = priceUSD * 1.85;
    console.log(`${priceUSD.toFixed(2)} USD`);
    console.log(`${priceBGN.toFixed(2)} BGN`);
}
