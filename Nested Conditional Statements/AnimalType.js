//Напишете програма, която отпечатва класа на животното според неговото име, въведено от потребителя. dog -> mammal. crocodile, tortoise, snake -> reptile. others -> unknown

function solve(input) {
  let animal = input.shift();
  switch (animal) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
  }
}
