import React from 'react'
import './style.css'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      <p>{text}</p>
    </button>
  )
}

export default Button
