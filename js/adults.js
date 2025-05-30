
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header .nav a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.getElementById("loadingOverlay").style.display = "flex";
        setTimeout(() => {
          window.location.href = href;
        }, 1500);
      });
    });
  });
document.getElementById("adults-link").addEventListener("click", function(event) {
     event.preventDefault();
     let isAdult = confirm("Bu bo‘lim faqat kattalar uchun. Davom etasizmi?");
     if (isAdult) {
         window.location.href = "adults.html";
     }
 });
 
 const apiKey = "93e6e43cd741c7b40d0ff4ad3d3639d5";
 const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&certification.lte=PG-13`;
 
 async function fetchMovies() {
     try {
         const response = await fetch(url);
         const data = await response.json();
         displayMovies(data.results);
     } catch (error) {
         console.error("Xatolik yuz berdi:", error);
     }
 }
 
 function displayMovies(movies) {
     const movieContainer = document.getElementById("adults-movies");
     movieContainer.innerHTML = "";
     
     movies.forEach(movie => {
         const movieElement = document.createElement("div");
         movieElement.classList.add("movie-card");
         movieElement.innerHTML = `
             <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
             <h3>${movie.title}</h3>
             <p>Rating: ${movie.vote_average}</p>
         `;
         
         movieElement.addEventListener("click", () => {
             window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank");
         });
         
         movieContainer.appendChild(movieElement);
     });
 }
 
 document.addEventListener("DOMContentLoaded", fetchMovies);
 

 document.getElementById("adults-link").addEventListener("click", function(event) {
    event.preventDefault();
    let isAdult = confirm("Bu bo‘lim faqat kattalar uchun. Davom etasizmi?");
    if (isAdult) {
        window.location.href = "adults.html";
    }
});

const baseUrl = "https://api.themoviedb.org/3/discover/movie";
const searchUrl = "https://api.themoviedb.org/3/search/movie";

// Asosiy sahifa kinolarini yuklash
async function fetchMovies(query = "") {
    let url = query
        ? `${searchUrl}?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`
        : `${baseUrl}?api_key=${apiKey}&include_adult=false&language=en-US&page=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}

// Kinolarni ekranga chiqarish
function displayMovies(movies) {
    const movieContainer = document.getElementById("movie-list");
    movieContainer.innerHTML = "";

    if (movies.length === 0) {
        movieContainer.innerHTML = "<p>Natija topilmadi</p>";
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-card");
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.vote_average}</p>
        `;

        movieElement.addEventListener("click", () => {
            window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank");
        });

        movieContainer.appendChild(movieElement);
    });
}

// Qidiruv funksiyasini ulash
document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.trim();
    fetchMovies(query);
});

// Sahifa yuklanganda filmlar chiqishi uchun
document.addEventListener("DOMContentLoaded", () => fetchMovies());

document.addEventListener("DOMContentLoaded", function () {
     const adultsLink = document.getElementById("adults-link");
     if (adultsLink) {
         adultsLink.addEventListener("click", function (event) {
             event.preventDefault();
             let isAdult = confirm("Bu bo‘lim faqat kattalar uchun. Davom etasizmi?");
             if (isAdult) {
                 window.location.href = "adults.html";
             }
         });
     }
 
     const apiKey = "93e6e43cd741c7b40d0ff4ad3d3639d5";
     const baseUrl = "https://api.themoviedb.org/3/discover/movie";
     const searchUrl = "https://api.themoviedb.org/3/search/movie";
 
     async function fetchMovies(query = "") {
         let url = query
             ? `${searchUrl}?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`
             : `${baseUrl}?api_key=${apiKey}&include_adult=false&language=en-US&page=1`;
 
         try {
             const response = await fetch(url);
             const data = await response.json();
             displayMovies(data.results);
         } catch (error) {
             console.error("Xatolik yuz berdi:", error);
         }
     }
 
     function displayMovies(movies) {
         const movieContainer = document.getElementById("movie-list");
         if (!movieContainer) {
             console.error("Xatolik: movie-list elementi topilmadi!");
             return;
         }
         movieContainer.innerHTML = "";
 
         if (movies.length === 0) {
             movieContainer.innerHTML = "<p>Natija topilmadi</p>";
             return;
         }
 
         movies.forEach(movie => {
             const movieElement = document.createElement("div");
             movieElement.classList.add("movie-card");
             movieElement.innerHTML = `
                 <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                 <h3>${movie.title}</h3>
                 <p>Rating: ${movie.vote_average}</p>
             `;
 
             movieElement.addEventListener("click", () => {
                 window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank");
             });
 
             movieContainer.appendChild(movieElement);
         });
     }
 
     const searchInput = document.getElementById("search-input");
     if (searchInput) {
         searchInput.addEventListener("input", function () {
             const query = this.value.trim();
             fetchMovies(query);
         });
     }
 
     fetchMovies();
 });
 

 