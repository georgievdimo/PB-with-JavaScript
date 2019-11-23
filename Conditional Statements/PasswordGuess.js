//Да се напише програма, която получава парола (един ред с произволен текст), получено като аргумент и проверява, дали съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!".

function solve(input) {
    let password = "s3cr3t!P@ssw0rd";
    let userPass = input.shift();
    if (userPass === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
