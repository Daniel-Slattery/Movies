import React, {useState} from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './style.css'

const MovieTile = ({movie, addMyList, lists}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const addToListHandler = () => {
    setTimeout(() => {
      addMyList(movie.id)
      setModalOpen(false)
    }, 1000)
  }

  return (
    <>
      <img
        className='MovieTile'
        key={movie.id}
        src={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}
        onClick={() => setModalOpen(true)}
      />
      <Modal open={modalOpen}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <h3>Relased: {movie.release_date}</h3>
        <h3>Score: {movie.vote_average}/10</h3>
        <div className='button-container'>
          <button onClick={() => setModalOpen(false)}>Close</button>
          <Button
            text={
              lists.myList.includes(movie.id)
                ? 'Remove from My List'
                : 'Add to My List'
            }
            onClick={addToListHandler}
          />
        </div>
      </Modal>
    </>
  )
}

export default MovieTile
