let movies = [];

function addMovie() {
    let title = document.getElementById('title').value;
    let actor = document.getElementById('actor').value;
    let year = document.getElementById('year').value;
    let poster = document.getElementById('poster').value;
    let trailer = document.getElementById('trailer').value;

    if (title === "" || actor === "" || year === "" || poster === "" || trailer === "") {
        alert("Please fill all fields!");
        return;
    }

    movies.push({ title, actor, year, poster, trailer });

    document.getElementById('title').value = "";
    document.getElementById('actor').value = "";
    document.getElementById('year').value = "";
    document.getElementById('poster').value = "";
    document.getElementById('trailer').value = "";

    displayMovies();
}

function displayMovies() {
    let list = document.getElementById('movieList');
    list.innerHTML = "";

    movies.forEach((movie, index) => {
        list.innerHTML += `
            <div class="movie-card">
                <img src="${movie.poster}" class="movie-poster">

                <div class="movie-details">
                    <div class="movie-title">${movie.title}</div>
                    <div>Actor: ${movie.actor}</div>
                    <div>Year: ${movie.year}</div>
                    <br>
                    <button class="trailer-btn" onclick="window.open('${movie.trailer}', '_blank')">
                        ▶ Watch Trailer
                    </button>
                    <br><br>
                    <button onclick="deleteMovie(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

function deleteMovie(index) {
    movies.splice(index, 1);
    displayMovies();
}

function filterMovies() {
    let search = document.getElementById('search').value.toLowerCase();
    let list = document.getElementById('movieList');

    list.innerHTML = "";

    movies
    .filter(m => m.title.toLowerCase().includes(search))
    .forEach((movie, index) => {
        list.innerHTML += `
            <div class="movie-card">
                <img src="${movie.poster}" class="movie-poster">

                <div class="movie-details">
                    <div class="movie-title">${movie.title}</div>
                    <div>Actor: ${movie.actor}</div>
                    <div>Year: ${movie.year}</div>
                    <br>
                    <button class="trailer-btn" onclick="window.open('${movie.trailer}', '_blank')">
                        ▶ Watch Trailer
                    </button>
                    <br><br>
                    <button onclick="deleteMovie(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}
