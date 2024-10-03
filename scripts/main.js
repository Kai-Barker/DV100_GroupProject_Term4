// //Collect data from API
console.log("howdy");
let moviesArray;
let buttonClicked=0; 
//let imageHTML=document.getElementById('body'); //Image link to page, must be changed
//let img=document.createElement('img');

const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "lYrj-KOMtKiStLzuttl-a4IvbOh3bL-xsnYqkn7iSH0pSHYPSY");
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "611cdfda-546d-4cc9-91ab-bfdac3194613");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

!async function() {
    await fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/most-popular-movies", requestOptions)
   .then((response) => response.text())
   .then((result) => {console.log(result);
             let JSONResult=JSON.parse(result);
             //Everything is stored in an object called movies. As such we need JSONResult.movies
             console.log("The result of JSonparse:"+JSONResult.movies);
             //Parameter
             MineMovies(JSONResult.movies);
             DisplayData();
         })
   .catch((error) => console.error(error));
}();

// Log in / Sign up

//Sign Up


//get email data from text field in html
const emailTextField=document.getElementById("emailTextField");
let email="kai@gmail.com" //unTextField.value; //May not work as intended
console.log(email);
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
let password="KingShrek12!"
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

//Collect data from API
function MineMovies(temp) {
    console.log("Here is temp"+temp);
    //Creating a new array with what we need
    moviesArray = temp.map(item => {
        return {
            title: item.title,
            rating: item.imdbRating,
            image: item.image,
            length: item.timeline
        }
    });
    console.log(moviesArray);
}
function DisplayData() {
    // Display 3 movies in a carousel
    const carouselMovies = moviesArray.slice(0, 3);
    console.log("Carousel Movies:", carouselMovies);
    // Code to render carouselMovies in the carousel goes here

    // Display 2 sections of 5 movies each horizontally
    const horizontalMovies1 = moviesArray.slice(3, 8);
    const horizontalMovies2 = moviesArray.slice(8, 13);
    console.log("Horizontal Section 1:", horizontalMovies1);
    console.log("Horizontal Section 2:", horizontalMovies2);
    // Code to render horizontalMovies1 and horizontalMovies2 goes here

    // Display a row of 8 movie posters
    const posterMovies = moviesArray.slice(13, 21);
    console.log("Poster Movies:", posterMovies);
    // Code to render posterMovies in a row goes here

    buttonClicked++;
}








// Lib-movies page









// movie page









// watchlist page
