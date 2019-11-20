// Да се напише програма, която получава цяло число получено,  като аргумент и отпечатва на конзолата, дали е четно или нечетно. 

function solve(input) {
    let num = Number(input.shift());

    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

solve(["4"])
