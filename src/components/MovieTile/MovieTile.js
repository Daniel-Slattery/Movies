import React, {useState} from 'react'
import Modal from '../Modal/Modal'

const MovieTile = ({movie, addMyList, lists}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <img
        className='MovieTile'
        key={movie.id}
        src={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}
        onClick={() => setModalOpen(true)}
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} addMyList={() => addMyList(movie.id)} lists={lists} id={movie.id}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <h3>Relased: {movie.release_date}</h3>
        <h3>Score: {movie.vote_average}/10</h3>
      </Modal>
    </>
  )
}

export default MovieTile
