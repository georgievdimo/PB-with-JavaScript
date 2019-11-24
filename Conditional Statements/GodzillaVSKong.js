//Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете програма, която да изчисли, дали предвидените средства са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор. Известно е, че: Декорът за филма е на стойност 10% от бюджета. При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

function solve(input) {
    let budget = +input.shift();
    let extrasCount = +input.shift();
    let clothingPrice = +input.shift();
    let decorPrice = budget * 0.1;
    if (extrasCount > 150) {
        clothingPrice -= clothingPrice * 0.1;
    }
    let costs = extrasCount * clothingPrice + decorPrice;
    let notEnough = costs - budget;
    let surplus = budget - costs;
    if (costs > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${notEnough.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${surplus.toFixed(2)} leva left.`)
    }
}
