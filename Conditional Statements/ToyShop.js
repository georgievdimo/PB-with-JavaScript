//Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. Да се напише програма, която пресмята печалбата от поръчката. Цени на играчките: Пъзел - 2.60 лв., Говореща кукла - 3 лв., Плюшено мече - 4.10 лв., Миньон - 8.20 лв., Камионче - 2 лв. Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне,  дали парите ще ѝ стигнат да отиде на екскурзия.

function solve(input) {
    let price = Number(input.shift());
    let puzzlesCount = Number(input.shift());
    let dollsCount = Number(input.shift());
    let bearsCount = Number(input.shift());
    let minionsCount = Number(input.shift());
    let trucksCount = Number(input.shift());
    let sum = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.2 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
    if (toysCount >= 50) {
        let discount = sum * 0.25;
        sum -= discount;
    }
    let rentDiscount = sum * 0.1;
    sum -= rentDiscount;
    if (sum >= price) {
        console.log(`Yes! ${(sum - price).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(price - sum).toFixed(2)} lv needed.`)
    }
}
