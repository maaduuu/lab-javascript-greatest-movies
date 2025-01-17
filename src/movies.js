const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
   
    const moviesDirectors = moviesArray.map((movie) => movie.director);
    return moviesDirectors;
    
}

// console.log(`${getAllDirectors(movies)}`);
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => {

    const stevenMovies = moviesArray.filter((movie) =>
        movie.director === 'Steven Spielberg');

    const stevenDrama = stevenMovies.filter((movie) => 
        movie.genre.includes('Drama'));
        return stevenDrama;
};

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {

    const totalAverage = moviesArray.reduce((movie, score) => 
       movie + score.score, 0); 
       
    const averageScore = totalAverage / moviesArray.length;
    
    return averageScore.toFixed(2);
};

// console.log(`El ScoreAverage es de: ${scoresAverage(movies)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {

    const dramaList = moviesArray.filter ((movie) => movie.genre.includes('Drama'));
   

    const dramaAvg = dramaList.reduce((movie, score)=> movie + score.score, 0);
    
    const averageTotal = dramaAvg / dramaList.length;
    
    return averageTotal.toFixed(2);
}

// console.log(`El ScoreAvg de Drama es ${dramaMoviesScore(movies)}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArray) => {

    const orderYears = moviesArray.sort((movie, years) =>  movie.year - years.year );
    return orderYears;
}

// console.log (orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => {

    const aplhabeticOrder = moviesArray.sort((movie, titles) => {
        var textA = movie.title.toUpperCase();
        var textB = titles.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
    
    return aplhabeticOrder.splice(0, 20);
}

// console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
