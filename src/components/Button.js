import React from 'react'

const Button = ({ text = 'Button', onClick, iconImage = null, styles }) => {
  return (
    <button onClick={onClick} class={`${styles}`}>
      {text}
      <span>
        <img src={iconImage} alt="Icon image" />
      </span>
    </button>
  )
}

export default Button
