import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './style.css';

type Props = {
  movies: any;
  title: any;
  addMyList: any;
  lists: any;
}

const MovieList: React.FC<Props> = ({ movies, title, addMyList, lists }) => (
  <div>
    {movies.length > 0 && (
      <div>
        <div className="list_title">
         <h2>{title === 'mylist' ? 'My List' : title.charAt(0).toUpperCase() + title.slice(1)}</h2>
        </div>
        <div className="list_scroll">
          {movies.map((movie: any) => (
            <MovieTile key={movie.id} movie={movie} addMyList={addMyList} lists={lists}/>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default MovieList;