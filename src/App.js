import React, {useState, useEffect} from 'react'
import {
  getDiscoverMovies,
  getCategories,
  getMoviesFromCategory
} from './Services/ApiClient'
import './app.css'
import MovieList from './components/MovieList/MovieList'
import Spinner from './components/Spinner';


const App = () => {
  const [status, setStatus] = useState(true)
  const [movies, setMovies] = useState({})
  const [lists, setLists] = useState({myList: []})

  const updateState = (name, list) => {
    setMovies(movies =>
      list.reduce(
        (acc, mov) => ({
          ...acc,
          [mov.id]: Object.assign(mov, {mylist: false})
        }),
        movies
      )
    )
    setLists(lists => ({...lists, [name]: list.map(mov => mov.id)}))
  }

  useEffect(() => {
    const fetchDiscoverMovies = async () => {
      const newMovies = await getDiscoverMovies()
      updateState('discover', newMovies)
    }

    getCategories()
      .then(categories =>
        Promise.all(
          categories.map(({ id, name }) =>
            getMoviesFromCategory(id).then(newMovies => updateState(name, newMovies))
          )
        )
      )
      .then(() => setStatus(false));

    fetchDiscoverMovies()
  }, [])

  return (
    <div className='App'>
      <h1>Discover Now</h1>
      <MovieList movies={movies} />
      {!status ? (
            Object.keys(lists).map(cat => (
              <MovieList key={cat} movies={lists[cat].map(id => movies[id])} title={cat} />
            ))
          ) : (
            <div className="App_loader">
              <Spinner />
            </div>
          )}
    </div>
  )
}

export default App
