const API_KEY = "dcfe58c980189e4f9f79e1d53daa363c";
        const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        async function fetchMovie() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                const movies = data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                
                const isMovie = randomMovie.media_type === 'movie';
                const movieUrl = isMovie ? `https://www.themoviedb.org/movie/${randomMovie.id}` : `https://www.themoviedb.org/tv/${randomMovie.id};`

                document.getElementById("movie-container").innerHTML = `
                    <h2>${randomMovie.title}</h2>
                    <img src="https://image.tmdb.org/t/p/w500${randomMovie.poster_path}" alt="${randomMovie.title}">
                    <p>${randomMovie.overview}</p>
                    <span style="display: flex; flex-direction: column;">Released: ${randomMovie.release_date}
                    <a href="${movieUrl}" target="_blank" rel="noopener noreferrer" style="margin-top: 15px;">View More</a>
                `;
            } catch (error) {
                document.getElementById("movie-container").innerHTML = `<p>Error fetching movie.</p>`;
                
            }
        }

        // Fetch a movie on page load
        fetchMovie();
