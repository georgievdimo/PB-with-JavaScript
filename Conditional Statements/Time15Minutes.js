//Да се напише програма, която чете час и минути от 24-часово денонощие, въведени от потребителя и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.

function solve(input) {
    let startHour = +input.shift();
    let startMinutes = +input.shift();
    let timeInMinutes = startHour * 60 + startMinutes;
    let timePlus15 = timeInMinutes + 15;
    let finalHour = Math.floor(timePlus15 / 60);
    let finalMinutes = timePlus15 - finalHour * 60;
    if (finalHour >= 24) {
        finalHour -= 24;
    }
    if (finalMinutes < 10) {
        console.log(`${finalHour}:0${finalMinutes}`);
    } else {
        console.log(`${finalHour}:${finalMinutes}`);
    }
}
