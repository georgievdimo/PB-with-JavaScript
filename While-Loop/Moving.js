//На осемнадесетия си рожден ден на Хосе взел решение, че ще се изнесе да живее на квартира. Опаковал багажа си в кашони и намерил подходяща обява за апартамент под наем. Той започва да пренася своя багаж на части, защото не може да пренесе целия наведнъж. Има ограничено свободно пространство в новото си жилище, където може да разположи вещите, така че мястото да бъде подходящо за живеене. Напишете програма, която изчислява свободния обем от жилището на Хосе, който остава след като пренесе багажа си. Бележка: Един кашон е с точни размери:  1m. x 1m. x 1m.

function solve(input) {
  let width = +input.shift();
  let length = +input.shift();
  let hight = +input.shift();
  let freeSpace = width * length * hight;
  let totalSpace = 0;
  let spaceDiff = 0;
  let command = input.shift();
  while (command != "Done") {
    let cartoonSpace = Number(command);
    totalSpace += cartoonSpace;
    spaceDiff = Math.abs(totalSpace - freeSpace);
    if (totalSpace >= freeSpace) {
      console.log(`No more free space! You need ${spaceDiff} Cubic meters more.`);
      break;
    }
    command = input.shift();
  }
  if (command == "Done") {
    console.log(`${spaceDiff} Cubic meters left.`);
  }
}
