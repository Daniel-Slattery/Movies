import React from 'react';

const MovieTile = ({ movie, addMyList }) => {
  return (
    <img
      className='MovieTile'
      key={movie.id}
      src={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}
      onClick={() => addMyList(movie.id)}
    />
  );
};

export default MovieTile;
