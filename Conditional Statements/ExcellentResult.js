// Първата задача от тази тема е да се напише конзолна програма, която чете оценка, получена като аргумент и отпечатва "Excellent!", ако оценката е 5.50 или по-висока.

function solve(input) {
    let grade = Number(input.shift());
    if(grade >= 5.50){
        console.log("Excellent!");
    }
}
