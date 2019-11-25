//Да се напише програма, която приема входен аргумент input  и от него изважда  име на продукт,  и проверява дали е плод или зеленчук. Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes. Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot. Всички останали са "unknown".

function solve(input) {
  let data = input.shift();
  switch (data) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
  }
}
