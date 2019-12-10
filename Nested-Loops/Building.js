//Напишете програма, която извежда на конзолата номерата на стаите в една сграда (в низходящ ред), като са изпълнени следните условия: На всеки четен етаж има само офиси. На всеки нечетен етаж има само апартаменти. Всеки апартамент се означава по следния начин : А{номер на етажа}{номер на апартамента}, номерата на апартаментите започват от 0. Всеки офис се означава по следния начин : О{номер на етажа}{номер на офиса}, номерата на офисите също започват от 0. На последният етаж винаги има апартаменти и те са по-големи от останалите, за това пред номера им пише 'L', вместо 'А'. Ако има само един етаж, то има само големи апартаменти. От конзолата се прочитат две цели числа - броят на етажите и броят на стаите за един етаж. 

function solve(input) {
  let floor = +input.shift();
  let rooms = +input.shift();
  let type = "";
  for (let row = floor; row >= 1; row--) {
    if (row % 2 !== 0) {
      type = "A";
    } else {
      type = "O";
    }
    if (row == floor) {
      type = "L";
    }
    let result = "";
    for (let col = 0; col < rooms; col++) {
      result += `${type}${row}${col} `;
    }
    console.log(result);
  }
}
