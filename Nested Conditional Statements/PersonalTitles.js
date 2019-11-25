//Да се напише конзолна програма, която прочита възраст (реално число) и пол ('m' или 'f'), въведени от потребителя, и отпечатва обръщение измежду следните: "Mr." – мъж (пол 'm') на 16 или повече години. "Master" – момче (пол 'm') под 16 години. "Ms." – жена (пол 'f') на 16 или повече години. "Miss" – момиче (пол 'f') под 16 години


function solve(input) {
  let age = +input.shift();
  let gender = input.shift();

  switch (gender) {
    case "m":
      if (age >= 16) {
        console.log("Mr.");
      } else {
        console.log("Master");
      }
      break;
    case "f":
      if (age >= 16) {
        console.log("Ms.");
      } else {
        console.log("Miss");
      }
      break;
  }
}
