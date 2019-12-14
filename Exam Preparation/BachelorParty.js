//Сватбата наближава и Марто ще организира ергенското парти на Иван в своя ресторант, като знаете, че Иван ще покани няколко групи свой познати. Марто има нужда от вашата помощ. Напишете програма, която пресмята колко гости ще събере ресторанта, какви ще са приходите му от ергенското парти, както и дали Марто ще може да си позволи да плати на гост изпълнител, като знаете че: Ако резервацията е за група с по-малко от 5 човека, куверта за един човек ще е 100 лв. Ако резервацията е за група с 5 или повече човека, куверта за един човек ще е 70 лв.

function solve(input) {
  let singerPrice = +input.shift();
  let inputLine = input.shift();
  let totalSum = 0;
  let totalGuests = 0;
  while (inputLine !== "The restaurant is full") {
    let groupOfPeople = Number(inputLine);
    if (groupOfPeople < 5) {
      totalSum += groupOfPeople * 100;
    } else {
      totalSum += groupOfPeople * 70;
    }
    totalGuests += groupOfPeople;
    inputLine = input.shift();
  }
  let amount = Math.abs(totalSum - singerPrice);
  if(totalSum >= singerPrice){
      console.log(`You have ${totalGuests} guests and ${amount} leva left.`)
  } else {
      console.log(`You have ${totalGuests} guests and ${totalSum} leva income, but no singer.`)
  }
}
