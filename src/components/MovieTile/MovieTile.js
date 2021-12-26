import React, {useState} from 'react';
import Modal from '../Modal/Modal';


const MovieTile = ({ movie, addMyList }) => {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
    <img
      className='MovieTile'
      key={movie.id}
      src={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}
      onClick={() => setModalOpen(true)}
    />
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          Fancy Modal
        </Modal>
    </>
  );
};

export default MovieTile;
