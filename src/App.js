import React, { useState, useEffect } from "react";
import { getDiscoverMovies } from "./Services/ApiClient";
import "./app.css";
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const newMovies = await getDiscoverMovies();
      setMovies(newMovies);
    };
    fetchMovies();
    console.log('here', movies);
  }, []);

  return (
    <div className='App'>
      <h1>Discover Now</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
