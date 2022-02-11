import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import './style.css'

type Props = {
  text: string;
  onClick: () => any;
  loading: boolean;
}

const Button = ({text, onClick, loading}: Props) => {
  return (
    <>
      <button onClick={onClick}>
        {loading ? (
          <SyncLoader
          color={'pink'}
          loading={loading}
        />
        ) : (
          <p>{text}</p>
        )}
      </button>
    </>
  )
}

export default Button
