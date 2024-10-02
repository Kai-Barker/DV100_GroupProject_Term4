//Collect data from API
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
function DisplayData(){
    let temp=moviesArray[buttonClicked].title+""+moviesArray[buttonClicked].rating+""+moviesArray[buttonClicked].length+"";
    let tempImg= moviesArray[buttonClicked].image;
    console.log("Here is temp"+temp);
    //img.src=tempImg; //For displaying images
    //imageHTML.appendChild(img);    //Need to fix this for image display
    buttonClicked++;
}

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






// Homepage / index









// Lib-movies page









// movie page









// watchlist page
