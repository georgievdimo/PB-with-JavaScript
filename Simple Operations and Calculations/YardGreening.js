//Напишете програма, която изчислява необходимите средства, които Божидара ще трябва да заплати на фирмата изпълнител на проекта. Цената на един кв. м. е 7.61лв със ДДС. Тъй като нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.

function solve(input) {
    let area = Number(input.shift());
    let price = area * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}
