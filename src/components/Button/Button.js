import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import './style.css'

const Button = ({text, onClick, loading}) => {
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
