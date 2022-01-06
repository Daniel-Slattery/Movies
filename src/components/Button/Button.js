import React, {useState} from 'react'
import {css} from '@emotion/react'
import SyncLoader from 'react-spinners/SyncLoader'
import './style.css'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Button = ({text, onClick, loading}) => {
  return (
    <>
      <button onClick={onClick}>
        {loading ? (
          <SyncLoader
            color={'pink'}
            loading={loading}
            css={override}
            height={15}
          />
          ) : (
          <p>{text}</p>
        )}
      </button>
    </>
  )
}

export default Button
