import React, {useState} from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './style.css'

type Props = {
  movie: any,
  addMyList: any,
  lists: any,
}

const MovieTile = ({movie, addMyList, lists}: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)

  const addToListHandler = () => {
    setButtonLoading(true)
    setTimeout(() => {
      addMyList(movie.id)
      setModalOpen(false)
    setButtonLoading(false)

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
          <Button onClick={() => setModalOpen(false)} text={'Close'} />
          <Button
            text={
              lists.myList.includes(movie.id)
                ? 'Remove from My List'
                : 'Add to My List'
            }
            loading={buttonLoading}
            onClick={addToListHandler}
          />
        </div>
      </Modal>
    </>
  )
}

export default MovieTile
