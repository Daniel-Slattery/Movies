import React, { useState, useEffect } from "react";
import {
  getDiscoverMovies,
  getCategories,
  getMoviesFromCategory,
} from './Services/ApiClient';
import './app.css';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const [status, setStatus] = useState(true);
  const [movies, setMovies] = useState({});
  const [lists, setLists] = useState({ myList: [] });


  const updateState = (name, list) => {
    setMovies(movies =>
      list.reduce(
        (acc, mov) => ({
          ...acc,
          [mov.id]: Object.assign(mov, { mylist: false }),
        }),
        movies
      )
    );
    setLists(lists => ({ ...lists, [name]: list.map(mov => mov.id) }));
  };


  useEffect(() => {
    const fetchDiscoverMovies = async () => {
      const newMovies = await getDiscoverMovies();
      updateState('discover', newMovies);
    };

    const fetchCategoryMovieLists = async () => {
      const categories = await getCategories();
      const daniel = await categories.map(({ id, name }) => getMoviesFromCategory(id))
      console.log('here', daniel)
     const dano = await daniel.map(({id, name}) => updateState(name, newMovies))

    }

    fetchDiscoverMovies();
    fetchCategoryMovieLists();
    // fetchCategories();
  }, []);

  return (
    <div className='App'>
      <h1>Discover Now</h1>
      <MovieList movies={movies} />
      {console.log(lists)}
      <MovieList movies={lists.Action} />
      <MovieList movies={movies} />

    </div>
  );
};

export default App;
