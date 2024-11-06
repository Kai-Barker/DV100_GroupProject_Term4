// Collect data from API
console.log("Beep Boop the scripts have arrived!");

const moviesArray = []; // Ensure moviesArray is defined globally
let pageCheck="";
let movieData=[];
let watchlistMovieArr= [];

class Movie{
    constructor(title, rating, image, genreArray, overview, release_date){
        this.title=title;
        this.rating=rating;
        this.image=image;
        this.genreArray=genreArray;
        this.overview=overview;
        this.release_date=release_date;
    }
}
class HorrorMovie extends Movie{
    constructor(title, rating, image, genreArray){
        super(title,rating,image, genreArray);
    }
}
class ActionMovie extends Movie{
    constructor(title, rating, image, genreArray){
        super(title,rating,image, genreArray);
    }
}



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

(async function () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const data = await response.json();
        console.log(data);
        
        const movies = data.results;
        movies.forEach(movie => {
            const movieObj = new Movie(movie.title, movie.vote_average, movie.poster_path, movie.genre_ids, movie.overview, movie.release_date);
            moviesArray.push(movieObj);
        });
        console.log(moviesArray);

        // Call functions to display the header and body
        if (pageCheck=="index") {
            DisplayHomeHeader();
            DisplayHomePicks();
            DisplayHomeRecent();
        console.log("WOrks after my method");
        }
        console.log(pageCheck);
        
        if (pageCheck=="library") {
            DisplayHeader();
            console.log("works after display header");
            
            DisplayMovieRows();
            console.log("all works");
        }
        if (pageCheck="watchlist") {
            DisplayWatchlist();
        }
        
    } catch (err) {
        console.error(err);
    }
})();
  
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

//dormant code for now

// if (pageCheck=="signUp") {
//     const passValidate=document.getElementById("signUpPassword");
//     const confirmPassValidate=document.getElementById("signUpConfirmPassword");
//     passValidate.onchange = ValidatePassword;
//     confirmPassValidate.onkeyup=ValidatePassword;
// }
// function ValidatePassword() {
//     if (passValidate.value == confirmPassValidate.value) {
//         confirmPassValidate.setCustomValidity('');
        
//         //create button
//     }
//     else{
//         confirmPassValidate.setCustomValidity("Passwords don't match");
//     }
// }


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
const form=document.forms["SignLog"];
console.log("we gotta test");
if (form) {
    console.log("we gotta form");
    console.log(form);
    
    form.addEventListener("submit", loginConfirmation);
}
else{
    console.log("form not found for some reason");
    
}

function loginConfirmation(event) {
    event.preventDefault();
    console.log(this.email);
    console.log(this.password);
    
    
    let formData= {
        "email":this.email.value,
        "password":this.password.value
    }
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Your data has been submitted");
}
function retrieveLogin(){
    let formData= localStorage.getItem("userData");
    console.log(JSON.parse(formData));
    formData=JSON.parse(formData);
    if (pageCheck=="index") {
        document.getElementById("homeWelcome");
        homeWelcome.innerHTML = formData.email;
    }
}

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

function DisplayHomeHeader() {
    const headerHomeSection=document.getElementById("homeHeroSection");
    const headerTitleSection=document.getElementById("HomeHeroTitle");
    const headerGenre1Section=document.getElementById("HomeHeroGenre1");
    const headerGenre2Section=document.getElementById("HomeHeroGenre2");
    const headerGenre3Section=document.getElementById("HomeHeroGenre3");
    console.log("howdy");
    if (moviesArray.length > 0) {
        const featuredMovie = moviesArray[Math.floor(Math.random() * moviesArray.length)]; // Random movie for header
        console.log(featuredMovie);
        console.log(getGenreName(featuredMovie.genreArray[0]));
        headerHomeSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${featuredMovie.image})`;
        headerTitleSection.innerHTML=featuredMovie.title;
        headerGenre1Section.innerHTML=getGenreName(featuredMovie.genreArray[0]).charAt(0).toUpperCase()+getGenreName(featuredMovie.genreArray[0]).slice(1);
        if (featuredMovie.genreArray[1] && isGenreIncluded(featuredMovie.genreArray[1])) {
            headerGenre2Section.innerHTML=getGenreName(featuredMovie.genreArray[1]).charAt(0).toUpperCase()+getGenreName(featuredMovie.genreArray[1]).slice(1);
            if (featuredMovie.genreArray[2] && isGenreIncluded(featuredMovie.genreArray[2])) {
                headerGenre3Section.innerHTML=getGenreName(featuredMovie.genreArray[2]).charAt(0).toUpperCase()+getGenreName(featuredMovie.genreArray[2]).slice(1);
            }
            else{
                headerGenre3Section.innerHTML="";
            }
        }
        else if(featuredMovie.genreArray[2] && isGenreIncluded(featuredMovie.genreArray[2])){
            headerGenre2Section.innerHTML=getGenreName(featuredMovie.genreArray[2]).charAt(0).toUpperCase()+getGenreName(featuredMovie.genreArray[2]).slice(1);
            headerGenre3Section.innerHTML="";
        }
        else{
            headerGenre2Section.innerHTML="";
        }
        
        
        
        
        
        
        // headerHomeSection.innerHTML = `
        //     <div class="header-info">
        //         <h1>${featuredMovie.title}</h1>
        //         <p>Rating: ${featuredMovie.rating}</p>
        //         <button class="btn btn-primary">Watch Now</button>
        //         <button class="btn btn-secondary">Add to Watchlist</button>
        //     </div>
        // `;
        
        
        
        
        
        
        // headerHomeSection.innerHTML = `
        //     <div class="header-info">
        //         <h1>${featuredMovie.title}</h1>
        //         <p>Rating: ${featuredMovie.rating}</p>
        //         <button class="btn btn-primary">Watch Now</button>
        //         <button class="btn btn-secondary">Add to Watchlist</button>
        //     </div>
        // `;
    }
}
//Filtering

       //Filtering
        //Filter By: Genre
        const genreMap = {
            action: 28,
           adventure: 12,
           comedy: 35,
           animation: 16,
           history: 36,
           horror: 27,
           scifi: 878,
           romance: 10749,
           fantasy: 14,
           drama: 18,
           thriller: 53
           };
           let filteredMovies=[];
           function filterGenres(genre) {
               filteredMovies=[];
               genre=genre.toLowerCase();
               const genreId=genreMap[genre];
               if (genreId) {
                   filteredMovies=movieData.filter(movie => movie.genreArray.includes(genreId));
               }
               else {
                   console.log("Genre not found");
               }
           }
           function getGenreName(value) {
               return Object.keys(genreMap).find(key => genreMap[key] === value);
           }
           //not all genres are listed in the genremap. Use this method in if statements
           function isGenreIncluded(id) {
               let genreIds = Object.values(genreMap);
               return genreIds.includes(id);
           }
        // //Filter By: Genre
        

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

     //Filtering
        
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

    //Sorting & Filtering
        //Sorting
        //Sort by: Rating Asc Desc, Title Alphebetical A-Z
        function sortAlphabetically(ascending) {
            // A-Z
            if (ascending==true) {
                movieData.sort((a,b) => {
                    return a.title.localeCompare(b.title);
                });
                
            }
            // Z-A
            else {
                movieData.sort((a,b) => {
                    return b.title.localeCompare(a.title);
                });
                
            }
        }

        function sortByRating(order) {
            if (order==true) {
                movieData.sort((a,b) => {
                    return b.rating -a.rating;
                });
            }
            else {
                movieData.sort((a,b) => {
                    return a.rating -b.rating;
                });
            }
        }
        //Filtering
                        // Define the filterMovies function
            function filterMovies() {
                // Get selected values from the dropdowns
                const selectedGenre = document.getElementById("genreSelect").value;
                const selectedYear = document.getElementById("yearSelect").value;
                const selectedScore = document.getElementById("scoreSelect").value;

                // Start with all movies
                let filteredMovies = moviesArray;

                // Filter by genre
                if (selectedGenre) {
                    const genreId = genreMap[selectedGenre.toLowerCase()];
                    filteredMovies = filteredMovies.filter(movie => movie.genreArray.includes(genreId));
                }

                // Filter by year (assuming you have a release_date property in your Movie class)
                if (selectedYear) {
                    filteredMovies = filteredMovies.filter(movie => movie.release_date && movie.release_date.startsWith(selectedYear));
                }

                // Filter by TMDB score
                if (selectedScore) {
                    const scoreThreshold = parseFloat(selectedScore);
                    filteredMovies = filteredMovies.filter(movie => movie.rating >= scoreThreshold);
                }

                // Update the displayed movies
                DisplayFilteredMovies(filteredMovies);
            }
            function DisplayFilteredMovies(filteredMovies) {
                const bodySection = document.getElementById("movie-lib-body");
                bodySection.innerHTML = ''; // Clear previous rows if necessary
            
                filteredMovies.forEach(movie => { 
                    const movieDiv = document.createElement("div");
                    movieDiv.className = "movie-item";
                    movieDiv.id = movie.title;
                    movieDiv.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${movie.image}" alt="${movie.title}" class="movie-image" />
                        <h2>${movie.title}</h2>
                        <p>Rating: ${movie.rating} "👍(•_•)👍"</p>
                        <a href="../pages/movie.html"><button onclick="individualMovieLogger('${movie.title}')">View More ^^</button> </a>
                    `;
                    bodySection.appendChild(movieDiv);
                });
            }
            // Function to display the filtered movies
            function DisplayMovieRows() {
                const bodySection = document.getElementById("movie-lib-body");
                bodySection.innerHTML = ''; // Clear previous rows if necessary
            
                
    moviesArray.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie-item"; // Use the class for styling
        movieDiv.id = movie.title;
        movieDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.image}" alt="${movie.title}" class="movie-image" />
            <h2>${movie.title}</h2>
            <p>Rating: ${movie.rating} "👍(•_•)👍"</p>
            <a href="../pages/movie.html"><button onclick="individualMovieLogger('${movie.title}')">View More ^^</button> </a>
        `;
        bodySection.appendChild(movieDiv);
    });
}

    
            //page view
        function DisplayHeader() {
            const headerSection = document.getElementById("movie-lib-head");
            if (moviesArray.length > 0) {
                const featuredMovie = moviesArray[Math.floor(Math.random() * moviesArray.length)]; // Random movie for header
                headerSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${featuredMovie.image})`;
                headerSection.innerHTML = `
                    <div class="header-info">
                        <h1>${featuredMovie.title}</h1>
                        <p>Rating: ${featuredMovie.rating}</p>
                    </div>
                `;
            }
        }
        
        function DisplayMovieRows() {
            const bodySection = document.getElementById("movie-lib-body");
            bodySection.innerHTML = ''; // Clear previous rows if necessary
        
      
            for (let i = 0; i < 5; i++) {
                const rowMovies = moviesArray.slice(i * 5, (i + 1) * 5); // Get 5 movies for each row
                const rowDiv = document.createElement("div");
                rowDiv.className = "movie-body";
                
                rowMovies.forEach(movie => {
                    const movieDiv = document.createElement("div");
                    movieDiv.className = "movie-item";
                    movieDiv.id = movie.title;
                    movieDiv.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${movie.image}" alt="${movie.title}" class="movie-image" />
                        <h2>${movie.title}</h2>
                        <p>Rating: ${movie.rating}</p>
                        <div>
                        <a href="../pages/movie.html"><button class="btn text-light btn-sm me-3" style="background-color: #4f0224;" onclick="individualMovieLogger('${movie.title}')">View More ^^</button> </a>
                        <button style="background-color: transparent; border: none; width: 22.5%; float: right;" onclick="WatchlistMovieAdder('${movie.title}')"><img src="../assets/images/circle-plus.png"></button>
                        </div>
                    `;
                    rowDiv.appendChild(movieDiv);
                    //<a href="../pages/movie.html"></a>
                });
        
                bodySection.appendChild(rowDiv);
            }
        }
        function individualMovieLogger(tempTitle) {
            const index=moviesArray.findIndex(movie => movie.title == tempTitle)
            if (index!==-1) {
                sessionStorage.setItem("selectedMovie", JSON.stringify(moviesArray[index]))
                console.log("Movie now in storage: ");
                console.log(moviesArray[index]);
            }
            else{
                console.log("No movie found >:(");
                
            }
        }
        let currentMovie="";
        function individualMovieFetcher(){
            const temp=JSON.parse(sessionStorage.getItem("selectedMovie"));
            const headerHomeSection=document.getElementById("IndividualMovieSection");
            const headerTitleSection=document.getElementById("IndividualMovieTitle");
            const headerGenre1Section=document.getElementById("IndividualMovieGenre1");
            const headerGenre2Section=document.getElementById("IndividualMovieGenre2");
            const headerGenre3Section=document.getElementById("IndividualMovieGenre3");
            const headerOverviewSection=document.getElementById("IndividualMovieOverview");
            console.log(temp);
            currentMovie=temp.title;
            console.log(getGenreName(temp.genreArray[0]));
            headerHomeSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${temp.image})`;
            headerTitleSection.innerHTML=temp.title;
            headerGenre1Section.innerHTML=getGenreName(temp.genreArray[0]).charAt(0).toUpperCase()+getGenreName(temp.genreArray[0]).slice(1);
            if (temp.genreArray[1] && isGenreIncluded(temp.genreArray[1])) {
            headerGenre2Section.innerHTML=getGenreName(temp.genreArray[1]).charAt(0).toUpperCase()+getGenreName(temp.genreArray[1]).slice(1);
                if (temp.genreArray[2] && isGenreIncluded(temp.genreArray[2])) {
                headerGenre3Section.innerHTML=getGenreName(temp.genreArray[2]).charAt(0).toUpperCase()+getGenreName(temp.genreArray[2]).slice(1);
                }
                else{
                headerGenre3Section.innerHTML="";
                }
            }
            else if(temp.genreArray[2] && isGenreIncluded(temp.genreArray[2])){
                headerGenre2Section.innerHTML=getGenreName(temp.genreArray[2]).charAt(0).toUpperCase()+getGenreName(temp.genreArray[2]).slice(1);
                headerGenre3Section.innerHTML="";
            }
            else{
                headerGenre2Section.innerHTML="";
            }
            headerOverviewSection.innerHTML=temp.overview;
        }
        
        // Display the movies when the page loads
        // DisplayHeader();
        // DisplayMovieRows();
        
        console.log("I-hope-this-works");

        console.log("👍(•_•)👍");


// watchlist page
//adds a movie to the current watchlist
function WatchlistMovieAdder(tempTitle) {
    watchlistMovieArr=[];
    const index=moviesArray.findIndex(movie => movie.title == tempTitle);
    
    if (index!==-1) {
        //find from storage
        
        
        if (localStorage.getItem("watchlistMovies")!=null) {
            temp= JSON.parse(localStorage.getItem("watchlistMovies"));
            console.log(temp);
            console.log("array before if");
            console.log(watchlistMovieArr);
            
            
            
            if (!Array.isArray(temp)) {
                temp= [temp];
            }
            console.log("works 642");
            if (!temp.some(movie => movie.title === tempTitle)) {
                console.log(watchlistMovieArr);
                
                watchlistMovieArr.push(temp);
                console.log("646");
                console.log(watchlistMovieArr);
                
                watchlistMovieArr.push(moviesArray[index]);
                console.log("649");
                console.log(watchlistMovieArr);
                watchlistMovieArr=watchlistMovieArr.flat(Infinity);
                
                localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovieArr));
                console.log(JSON.parse(localStorage.getItem("watchlistMovies")));
            }
            console.log(temp.some(movie => movie.title === tempTitle));
        }
        else{
            localStorage.setItem("watchlistMovies", JSON.stringify(moviesArray[index]))
            console.log(JSON.parse(localStorage.getItem("watchlistMovies")));
        }
    }
    else{
        console.log("No movie found for watchlist >:(");
        
    }
}
//remove movie
    //find if movie is on watchlist
    //remove from the movie array
    //clear watchlist
    function ClearWatchList() {
        if (localStorage.getItem("watchlistMovies")) {
            localStorage.removeItem("watchlistMovies");
        }
    }
//Display movies on homepage
function DisplayWatchlistHome(){
    console.log("display wtchlist home run");
    
    const watchlistContainer=document.getElementById("homeWatchlist");
    
    let watchlistMovies=JSON.parse(localStorage.getItem("watchlistMovies"))
    if (!Array.isArray(watchlistMovies)) {
        watchlistMovies= [watchlistMovies];
    }
    console.log(watchlistMovies);
    
    if (watchlistMovies.length!=0&&watchlistMovies[0]!=null) {
        console.log("running this");
        
        watchlistContainer.innerHTML='';
        watchlistMovies=watchlistMovies.slice(0,6);
        watchlistMovies.forEach(movie => {const cardHTML= `<div class="col-2">
              <div class="card" style="width: 15rem; background-color: #00000034;">
                <img src="https://image.tmdb.org/t/p/w500${movie.image}" class="card-img-top img-fluid movie-watch-image" alt="${movie.title}">
                <div class="card-body text-light">
                  <div>
                    <p class="card-text fs-5">${movie.title}</p>
                  </div>
                  <div class="row">
                    <p class="col-4 card-text fs-6">Rating:</p>
                    <p class="col-8 card-text fs-6">${movie.rating}</p>
                  </div>
                </div>
              </div>
            </div>`;
        watchlistContainer.innerHTML+=cardHTML;
    });
    }
    else{
        watchlistContainer.innerHTML=`<div class="col">
              <div class="card" style="width: 18rem; background-color: #00000034;">
                <img src="assets/images/Cineflix Logo.png" class="card-img-top img-fluid w-80 h-auto" alt="...">
                <div class="card-body text-light">
                  <div>
                    <p class="card-text fs-6">Watchlist empty, add something to display it here!</p>
                  </div>
                  <div class="row">
                    <p class="col-4 card-text fs-6"></p>
                    <p class="col-8 card-text fs-6"></p>
                  </div>
                </div>
              </div>
            </div>`
    }
    
}
function DisplayWatchlist(){
    console.log("display watchlist run");
    
    const watchlistContainer=document.getElementById("Watchlist");
    
    let watchlistMovies=JSON.parse(localStorage.getItem("watchlistMovies"))
    if (!Array.isArray(watchlistMovies)) {
        watchlistMovies= [watchlistMovies];
    }
    console.log(watchlistMovies);
    
    if (watchlistMovies.length!=0&&watchlistMovies[0]!=null) {
        console.log("running this");
        
        watchlistContainer.innerHTML='';
        watchlistMovies.forEach(movie => {const cardHTML= `<div class="col-2">
              <div class="card" style="width: 16rem; background-color: #00000034;">
                <img src="https://image.tmdb.org/t/p/w500${movie.image}" class="card-img-top img-fluid movie-watch-image" alt="${movie.title}">
                <div class="card-body text-light">
                  <div>
                    <p class="card-text fs-5" style="font-size:18px;">${movie.title}</p>
                  </div>
                  <div class="row">
                    <p class="col-4 card-text fs-6">Rating:</p>
                    <p class="col-8 card-text fs-6">${movie.rating}</p>
                  </div>
                  <a href="../pages/movie.html"><button class="btn text-light btn-sm me-3" style="background-color: #4f0224;" onclick="individualMovieLogger('${movie.title}')">View More</button> </a>
                </div>
              </div>
            </div>`;
            
        watchlistContainer.innerHTML+=cardHTML;
    });
    }
    else{
        watchlistContainer.innerHTML=`<div class="col">
              <div class="card" style="width: 18rem; background-color: #00000034;">
                <img src="assets/images/Cineflix Logo.png" class="card-img-top img-fluid w-80 h-auto" alt="...">
                <div class="card-body text-light">
                  <div>
                    <p class="card-text fs-6">Watchlist empty, add something to display it here!</p>
                  </div>
                  <div class="row">
                    <p class="col-4 card-text fs-6"></p>
                    <p class="col-8 card-text fs-6"></p>
                  </div>
                </div>
              </div>
            </div>`
    }
    
}
console.log("moviesArray");

console.log(moviesArray);

function DisplayHomePicks() {
    console.log("DisplayHomePicks");
    
    const section=document.getElementById("homePicks");
    section.innerHTML='';
    console.log("723");
    let sortArray=moviesArray.sort((a, b) => b.rating - a.rating);
    const tempArr=sortArray.slice(0,6);
    console.log("726");
    console.log(moviesArray);
    
    console.log(tempArr);
    
    tempArr.forEach(movie => {const cardHTML= `<div class="col-2">
        <div class="card" style="width: 15rem; background-color: #00000034;">
          <img src="https://image.tmdb.org/t/p/w500${movie.image}" class="card-img-top img-fluid movie-watch-image" alt="${movie.title}">
          <div class="card-body text-light">
            <div>
              <p class="card-text fs-5">${movie.title}</p>
            </div>
            <div class="row">
              <p class="col-4 card-text fs-6">Rating:</p>
              <p class="col-8 card-text fs-6">${movie.rating}</p>
            </div>
          </div>
        </div>
      </div>`;
  section.innerHTML+=cardHTML;
    });
}
function DisplayHomeRecent() {
    console.log("DisplayHomeRecent");
    
    const section=document.getElementById("homeRecent");
    section.innerHTML='';
    let sortArray=moviesArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    const tempArr=sortArray.slice(0,6);
    console.log(moviesArray);
    
    console.log(tempArr);
    
    tempArr.forEach(movie => {const cardHTML= `<div class="col-2">
        <div class="card" style="width: 15rem; background-color: #00000034;">
          <img src="https://image.tmdb.org/t/p/w500${movie.image}" class="card-img-top img-fluid movie-watch-image" alt="${movie.title}">
          <div class="card-body text-light">
            <div>
              <p class="card-text fs-5">${movie.title}</p>
            </div>
            <div class="row">
              <p class="col-4 card-text fs-6">Rating:</p>
              <p class="col-8 card-text fs-6">${movie.rating}</p>
            </div>
          </div>
        </div>
      </div>`;
  section.innerHTML+=cardHTML;
    });
}

// function DisplayMovieRows() {
//     const bodySection = document.getElementById("movie-lib-body");
//     bodySection.innerHTML = ''; // Clear previous rows if necessary
//     for (let i = 0; i < 5; i++) {
//         const rowMovies = moviesArray.slice(i * 5, (i + 1) * 5); // Get 5 movies for each row
//         const rowDiv = document.createElement("div");
//         rowDiv.className = "movie-body";
        
//         rowMovies.forEach(movie => {
//             const movieDiv = document.createElement("div");
//             movieDiv.className = "movie-item";
//             movieDiv.id = movie.title;
//             movieDiv.innerHTML = `
//                 <img src="https://image.tmdb.org/t/p/w500${movie.image}" alt="${movie.title}" class="movie-image" />
//                 <h2>${movie.title}</h2>
//                 <p>Rating: ${movie.rating}</p>
//                 <a href="../pages/movie.html"><button onclick="individualMovieLogger('${movie.title}')">View More ^^</button> </a>
//             `;
//             rowDiv.appendChild(movieDiv);
//             //<a href="../pages/movie.html"></a>
//         });

//         bodySection.appendChild(rowDiv);
//     }
// }


//Jquery
jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = transitionLayer.data('frame'), //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){	
		event.preventDefault();
		var modalId = $(event.target).attr('href');
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 800;
		setTimeout(function(){
			modalWindow.filter(modalId).addClass('visible');
			transitionLayer.removeClass('opening');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}
});