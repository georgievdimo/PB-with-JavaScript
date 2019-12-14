//Деси много обича да гледа филми, но често й е трудно да си избере подходящ за гледане. Набелязва си определен брой филми и иска да си избере кой филм да гледа спрямо рейтинга на филмите. Напишете програма, която показва кой филм е с най-висок рейтинг, кой е с най-нисък и колко е средният рейтинг от всички филми, които си е набелязала да гледа.

function solve(input) {
  let movieCount = +input.shift();
  let totalRatingForAllMovies = 0;
  let maxRating = Number.MIN_SAFE_INTEGER;
  let maxRatingMovie = "";
  let minRating = Number.MAX_SAFE_INTEGER;
  let minRatingMovie = "";
  for (let movie = 1; movie <= movieCount; movie++) {
    let name = input.shift();
    let rating = +input.shift();
    if (rating > maxRating) {
      maxRating = rating;
      maxRatingMovie = name;
    }
    if (rating < minRating) {
      minRating = rating;
      minRatingMovie = name;
    }
    totalRatingForAllMovies += rating;
  }
  let averageRating = totalRatingForAllMovies / movieCount;
  console.log(`${maxRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
  console.log(`${minRatingMovie} is with lowest rating: ${minRating.toFixed(1)}`);
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
