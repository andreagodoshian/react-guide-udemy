import React, {useState, useEffect, useCallback} from 'react';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

/*
1.) Could use Axios... but fetch() is built-in to JavaScript and Browsers
2.) .then(): because fetch returns a "promise"
3.) .json(): translates, but also just a "promise"
4.) Promises: not React-specific; it's JavaScript terminology
5.) Side-effect: fetching movies immediately page loads
^^don't forget dependencies, or you'll create an infinite loop
6.) useEffect(() => { ... }, [fetchMoviesHandler])
^^also infinite, since functions are {objects} & always re-render
*/

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // see below, for sytax without "async/await"
  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null); // reset, for a new request
      
      const response = await fetch("https://react-http-academind-udemy-default-rtdb.firebaseio.com/movies.json")
      if (!response.ok) {
        throw new Error("Something went wrong 😭")
      } // otherwise, the custom message won't show up

      const data = await response.json()

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
      setMovies(loadedMovies);
      
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false);
    }
  }, []); // swapi.dev = no dependencies

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]) // needed to move, because of "function hoisting"

  async function addMovieHandler(movie) {
    const response = await fetch("https://react-http-academind-udemy-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json" // describes the content being sent
      }
    });
    const data = await response.json();
    console.log(data)
  }

  let content = <h4>Found no movies.</h4>;
  if (error) content = <h4>{error}</h4>
  else if (movies.length > 0) content = <MoviesList movies={movies} />
  else if (isLoading) content = <h4>Loading...</h4>

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
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