import React, {useState, useEffect} from 'react'
import {
  getDiscoverMovies,
  getCategories,
  getMoviesFromCategory
} from './Services/ApiClient'
import './app.css'
import MovieList from './components/MovieList/MovieList'
import Spinner from './components/Spinner'

const App = () => {
  const [loading, setLoading] = useState(true)
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

  const addMyList = id => {
    setLists(lists => ({
      ...lists,
      myList: lists.myList.includes(id)
        ? lists.myList.filter(myId => myId !== id)
        : [...lists.myList, id],
    }));
    setMovies(movies => ({
      ...movies,
      [id]: Object.assign(movies[id], { mylist: !movies[id].mylist }),
    }));
  };

  useEffect(() => {
    const fetchDiscoverMovies = async () => {
      const newMovies = await getDiscoverMovies()
      updateState('discover', newMovies)
    }

    const fetchAllMovies = async () => {
      const categories = await getCategories()

      const movieLists = await Promise.all(
        categories.map(({id}) => {
          return getMoviesFromCategory(id)
        })
      )
      categories.forEach(({name}, index) => {
        updateState(name, movieLists[index])
      })
      setLoading(false)
    }

    fetchDiscoverMovies()
    fetchAllMovies()
  }, [])

  return (
    <div className='App'>
      {!loading ? (
        Object.keys(lists).map(cat => (
          <MovieList
            key={cat}
            movies={lists[cat].map(id => movies[id])}
            title={cat}
            addMyList={addMyList}
          />
        ))
      ) : (
        <div className='App_loader'>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default App
