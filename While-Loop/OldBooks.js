//Ани отива до родния си град след много дълъг период извън страната. Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга. Помогнете на Ани, като напишете програма в която тя въвежда търсената от нея книга(текст) и капацитета на библиотеката(цяло число). Докато Ани не намери любимата си книга или не провери всички в библиотеката, програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). Ако не открие книгата да се отпечата на два реда: "The book you search is not here!", "You checked {брой} books.". Ако открие книгата си се отпечатва един ред: "You checked {брой} books and found it." 

function solve(input) {
  let bookToSearch = input.shift();
  let countOfBooks = +input.shift();
  let counter = 0;
  let isFound = false;
  while (countOfBooks > counter) {
    let currentBook = input.shift();
    if (currentBook === bookToSearch) {
      isFound = true;
      break;
    }
    counter++;
  }
  if (isFound == true) {
    console.log(`You checked ${counter} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${countOfBooks} books.`);
  }
}
