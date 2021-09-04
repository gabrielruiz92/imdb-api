function getMovies(moviesearch) {
    const api = "http://www.omdbapi.com/?apikey=6579ea74&s="
    console.log("Pelicula a buscar: " + moviesearch);

    axios.get(api + moviesearch)
        .then(function (response) {
            let movies = response.data.Search;
            console.log(movies);

            for (const r of movies) {

                getMovie(r.imdbID);

            }
        });
}

function getMovie(id) {
    const api = "http://www.omdbapi.com/?apikey=6579ea74&i="

    contenedor = document.querySelector(".results");
    templateCard = document.querySelector("#result-card-template");

    axios.get(api + id)
        .then(function (response) {
            let movie = response.data;

            console.log(movie);


            const imgEL = templateCard.content.querySelector(".result-items-img");
            imgEL.src = movie.Poster;

            const titleEL = templateCard.content.querySelector(".result-item-title");
            titleEL.textContent = movie.Title;

            ////////////////////////////////////////////////////////////////////////////////////

            const titleInfoEL = templateCard.content.querySelector(".info-conteiner-title");
            titleInfoEL.textContent = movie.Title

            const yearEL = templateCard.content.querySelector(".year");
            yearEL.textContent = movie.Year + " ,";

            const diretorEL = templateCard.content.querySelector(".director");
            diretorEL.textContent = movie.Director;

            ////////////////////////////////////////////////////////////////////////////////////

            const durationEl = templateCard.content.querySelector(".duration");
            durationEl.textContent = movie.Runtime;

            const ratedEL = templateCard.content.querySelector(".rated");
            ratedEL.textContent = movie.Rated;

            const genreEL = templateCard.content.querySelector(".genre");
            genreEL.textContent = movie.Genre;

            ////////////////////////////////////////////////////////////////////////////////////

            const plotEL = templateCard.content.querySelector(".plot");
            plotEL.textContent = movie.Plot;

            const actorsEL = templateCard.content.querySelector(".actors");
            actorsEL.textContent = movie.Actors;

            const ratingEl = templateCard.content.querySelector(".imdb-rating");
            ratingEl.textContent = movie.imdbRating;



            clone = document.importNode(templateCard.content, true);
            contenedor.appendChild(clone);

        });

}


function main() {

    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {

        e.preventDefault();
        const search = e.target.buscar.value;
        getMovies(search);

    });
}

main();