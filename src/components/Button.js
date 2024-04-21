import React from 'react'

const Button = ({ text = 'Button', onClick, styles }) => {
  return (
    <button onClick={onClick} class={`${styles}`}>
      {text}
    </button>
  )
}

export default Button
