import React from 'react';
import './style.css';

const MovieTile = ({ movie }) => {
  return (
    <img
      className='MovieTile'
      key={movie.id}
      src={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}
    />
  );
};

export default MovieTile;
