
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

const apiKey = "93e6e43cd741c7b40d0ff4ad3d3639d5";
const baseUrl = "https://api.themoviedb.org/3";
const movieContainer = document.getElementById("trend-movie-list");
const searchInput = document.getElementById("search-input");

// **Elementlarni tekshirish**
if (!movieContainer || !searchInput) {
    console.error("Element topilmadi! ID nomlarini tekshiring.");
}

// **Trend kinolarni yuklash**
async function fetchTrendMovies() {
    try {
        const url = `${baseUrl}/trending/movie/week?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}

// **Qidiruv funksiyasi**
async function searchMovies(query) {
    if (!query) {
        fetchTrendMovies();
        return;
    }

    try {
        const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Qidiruvda xatolik yuz berdi:", error);
    }
}

// **Kinolarni ekranga chiqarish**
function displayMovies(movies) {
    movieContainer.innerHTML = "";

    if (!movies || movies.length === 0) {
        movieContainer.innerHTML = "<p>Hech narsa topilmadi...</p>";
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-card");
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ⭐ ${movie.vote_average}</p>
        `;

        movieElement.addEventListener("click", () => {
            window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank");
        });

        movieContainer.appendChild(movieElement);
    });
}

// **Qidiruv inputi hodisasi**
searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    searchMovies(query);
});

// **Sahifa yuklanganda trend kinolarni ko‘rsatish**
document.addEventListener("DOMContentLoaded", fetchTrendMovies);


