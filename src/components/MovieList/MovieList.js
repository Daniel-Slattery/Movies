import React from 'react';
import MovieTile from '../MovieTile/MovieTile';

const MovieList = ({ movies }) => {
  return (
    <div className='MovieList'>
      {movies &&
        movies.map((movie) => <MovieTile key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
