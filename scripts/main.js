//Collect data from API
console.log("howdy");
let trendingMoviesArray;

class Movie{
    constructor(title, rating, image, genreArray){
        this.title=title;
        this.rating=rating;
        this.image=image;
        this.genreArray=genreArray;
    }
}
class HorrorMovie extends Movie{
    constructor(title, rating, image, genre){
        super(title,rating,image);
        genre="horror";
    }
}
class ActionMovie extends Movie{
    constructor(title, rating, image, genre){
        super(title,rating,image);
        genre="action";
    }
}

let movieData=[];
console.log(movieData);

//let imageHTML=document.getElementById('body'); //Image link to page, must be changed
//let img=document.createElement('img');

//Trending Movies API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWFkODAxN2JkNzc3YzIwNDM5YWZjNTk4YzYwNzYyOCIsIm5iZiI6MTcyODQ4MjU0OS45NTA3ODksInN1YiI6IjY3MDY4YWJhNDQyNjVjNDM1OTc4NDUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dvR_J8VCcEtn_psaz5tGnRgyfajaVI8cLnxRs1A0ZZA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {console.log(response);
        const movies=response.results;
        movies.forEach(movie => {
            const movieObj = {
                title: movie.title,
                rating: movie.vote_average,
                image: movie.poster_path,
                genre:movie.genre_ids
            };
            console.log(movieObj.genre);
            
            let movieTemp=new Movie(movieObj.title, movieObj.rating, movieObj.image, movieObj.genre);

            // Push each movie object into the movieData array
            movieData.push(movieTemp);
        });
    })
    .catch(err => console.error(err));


// const myHeadersTrending = new Headers();
// myHeadersTrending.append("x-apihub-key", "lYrj-KOMtKiStLzuttl-a4IvbOh3bL-xsnYqkn7iSH0pSHYPSY");
// myHeadersTrending.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
// myHeadersTrending.append("x-apihub-endpoint", "611cdfda-546d-4cc9-91ab-bfdac3194613");

// const requestOptionsTrending = {
//    method: "GET",
//    headers: myHeadersTrending,
//    redirect: "follow"
// };

// !async function() {
//     await fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/most-popular-movies", requestOptionsTrending)
//    .then((response) => response.text())
//    .then((result) => {console.log(result);
//              let JSONResult=JSON.parse(result);
//              //Everything is stored in an object called movies. As such we need JSONResult.movies
//              console.log("The result of JSonparse:"+JSONResult.movies);
//              //Parameter
//              MineMovies(JSONResult.movies);
//              DisplayData();
//          })
//    .catch((error) => console.error(error));
// }();

function MineMovies(temp) {
    console.log("Here is temp"+temp);
    //Creating a new array with what we need
    trendingMoviesArray = temp.map(item => {
        return {
            title: item.title,
            rating: item.imdbRating,
            image: item.image,
            length: item.timeline
        }
    });
    console.log(trendingMoviesArray);
}
function DisplayData(){
    let temp=trendingMoviesArray[buttonClicked].title+""+trendingMoviesArray[buttonClicked].rating+""+trendingMoviesArray[buttonClicked].length+"";
    let tempImg= trendingMoviesArray[buttonClicked].image;
    console.log("Here is temp"+temp);
    //img.src=tempImg; //For displaying images
    //imageHTML.appendChild(img);    //Need to fix this for image display
    buttonClicked++;
}



//1 parent class
//2 subclasses based on genre
let horrorMovie1=new HorrorMovie();
let horrorMovie2=new HorrorMovie();
let actionMovie1=new ActionMovie();
let actionMovie2=new ActionMovie();
//2 objects per subclass

// Log in / Sign up

//Sign Up


//get email data from text field in html
class User{
    constructor(nameIn, emailIn, passwordIn){
        this.nameIn=nameIn;
        this.emailIn=emailIn;
        this.passwordIn=passwordIn;
    }
}
const nameTextField=document.getElementById("nameTextField");
let username="Kai"
const emailTextField=document.getElementById("emailTextField");
let email="kai@gmail.com" //unTextField.value; //May not work as intended
console.log(email);
let password="KingShrek12!"
let user1=new User(username, email, password);
//Email must have an @ symbol
let isEmailValid=false;
function ValidateEmail(str) {
    for (let index = 0; index < email.length; index++) {
        if (str.charAt(index)=="@") {
            isEmailValid=true;
        }
    }
}
ValidateEmail(email);

//validate password
//For this i used a regex which i found at https://www.geeksforgeeks.org/javascript-program-to-check-if-a-string-contains-uppercase-lowercase-special-characters-and-numeric-values/ 
//This regex will test the string for at least 1: lowercase letter, capital letter, digit, special character


let isPasswordValid=false;
  function isAllCharPresent(str) {
    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    if (pattern.test(str))
        isPasswordValid=true;
}
console.log();
isAllCharPresent(password);
console.log(isPasswordValid);
console.log(isEmailValid);


//Send user data to local and session storage


//Log In to an account by checking if everything is the same
//these will be retrieved from storage
const testMail="kaikai@gmail.com"
const testPass="QueenShrek1!"
//these will be input by the user
let inputEmail="kaikai@gmail.com"
let inputPass="QueenShrek1!"
//Check if the same
//Will edit in future depending if we go with objects or not
// function LogIn() {
//     if ((testMail==inputEmail&&testPass==inputPass)) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// if (LogIn()) {
//     console.log("You shall pass!");
// }
// else{
//     console.log("You Shall not pass!");
// }
//With an object, easy to extend to look at if theres an array of objects. Not sure how user storage works yet
let user = {
    email: "kaikai@gmail.com",
    password: "QueenShrek1!"
};
function LogInObj() {
    if (user.email==inputEmail) {
        
        if (user.password==inputPass) {
            return true;
        }
    }
    else{
        return false;
    }
}
if (LogInObj()) {
    console.log("Yes");
}
else{
    console.log("Nuh uh");   
}



// Homepage / index









// Lib-movies page









// movie page









// watchlist page
