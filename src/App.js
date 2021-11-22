import React, { useState, useEffect } from "react";
import { getDiscoverMovies } from "./Services/ApiClient";
import "./app.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDiscoverMovies().then((newMovies) => {
      setMovies(newMovies);
    });

    console.log("here", movies);
  }, []);

  return (
    <div className="App">
      <h1>Movies List</h1>
      {movies &&
        movies.map((movie) => (
          <img
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
          />
        ))}
    </div>
  );
};

export default App;
