//Правоъгълник е зададен с координатите на два от своите срещуположни ъгъла (x1, y1) – (x2, y2). Да се пресметнат площта и периметъра му. Входът се приема от конзолата. Числата x1, y1, x2 и y2 са дадени по едно наред. Изходът се извежда на конзолата и трябва да съдържа два реда с по една число на всеки от тях – лицето и периметъра. Закръглете резултата до 2 цифри след десетичната запетая.

function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let lenght = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let area = (lenght * width);
    let perimeter = 2 * (lenght + width);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
