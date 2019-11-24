//Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише програма, която чете времената на състезателите в секунди, въведени от потребителя и пресмята сумарното им време във формат "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35").

function solve(input) {
    let timeFirst = +input.shift();
    let timeSecond = +input.shift();
    let timeThird = +input.shift();
    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    console.log(`${minutes}:${seconds}`);
}
