//Напишете програма, която отпечатва всички букви от латинската азбука: a, b, c, …, z.

function solve() {
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    console.log(String.fromCharCode(i));
  }
}
