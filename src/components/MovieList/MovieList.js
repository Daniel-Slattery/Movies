import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './style.css';

const MovieList = ({ movies, title }) => (
  <div>
    {movies.length > 0 && (
      <div>
        <div className="list_title">
         <h2>{title === 'mylist' ? 'My List' : title.charAt(0).toUpperCase() + title.slice(1)}</h2>
        </div>
        <div className="list_scroll">
          {movies.map(movie => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )}
  </div>
);

export default MovieList;