import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

/*
1.) Could use Axios... but fetch() is built-in to JavaScript and Browsers
2.) .then(): because fetch returns a "promise"
3.) .json(): translates, but also just a "promise"
4.) Promises: not React-specific; it's JavaScript terminology
*/

function App() {
  const [movies, setMovies] = useState([]);

  // see below, for sytax without "async/await"
  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.py4e.com/api/films/")
    const data = await response.json()
    const transformedMovies = data.results.map(rawData => {
      return {
        id: rawData.episode_id,
        title: rawData.title,
        openingText: rawData.opening_crawl,
        releaseDate: rawData.release_date
      }
    });
    setMovies(transformedMovies)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

/*
  function fetchMoviesHandler() {
    fetch("https://swapi.py4e.com/api/films/").then(response => {
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.map(rawData => {
        return {
          id: rawData.episode_id,
          title: rawData.title,
          openingText: rawData.opening_crawl,
          releaseDate: rawData.release_date
        }
      });
      setMovies(transformedMovies)
    })
  }
*/