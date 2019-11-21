//Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета.  Храната се пазарува основно за кучета, от зоомагазин, но понякога стопанинът им купува и за животните на съседа му. Една опаковка храна за кучета е на цена 2.50лв., а всяка останала, която не е за тях струва 4лв.

function solve(input) {
    let dogsCount = Number(input.shift());
    let otherAnimals = Number(input.shift());
    let totalSum = dogsCount * 2.50 + otherAnimals * 4;
    console.log(`${totalSum.toFixed(2)} lv.`);
}
