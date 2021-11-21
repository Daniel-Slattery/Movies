import React, { useState, useEffect } from "react";
import * as ApiClient from "./Services/ApiClient";

const App = () => {
  const [movies, setMovies] = useState([
    { backdrop_path: "cinER0ESG0eJ49kXlExM0MEWGxW.jpg" },
  ]);

  useEffect(() => {
    ApiClient.getDiscoverMovies().then((newMovies) => {
      console.log(newMovies);
      setMovies(newMovies);
    });

    console.log("here", movies);
  }, []);

  return (
    <div>
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
