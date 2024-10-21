import React, {useState, useEffect} from 'react'
import {getCategories, getMoviesFromCategory} from './services/ApiClient'
import './app.css'
import MovieList from './components/MovieList/MovieList'
import Spinner from './components/Spinner/Spinner'

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
        : [...lists.myList, id]
    }))
    setMovies(movies => ({
      ...movies,
      [id]: Object.assign(movies[id], {mylist: !movies[id].mylist})
    }))
  }

  useEffect(() => {
    const fetchAllMovies = async () => {
      const {genres} = await getCategories()

      const movieLists = await Promise.all(
        genres.map(({id}) => {
          return getMoviesFromCategory(id).then(res => res.results)
        })
      )

      genres.forEach(({name}, index) => {
        updateState(name, movieLists[index])
      })
      setLoading(false)
    }

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
            lists={lists}
          />
        ))
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default App
