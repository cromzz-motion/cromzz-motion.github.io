import React from 'react'

const Button = ({ text = 'Button', onClick, iconImage = null, styles }) => {
  return (
    <button onClick={onClick} className={`${styles}`}>
      {text}
      <span>
        <img src={iconImage} alt={''} />
      </span>
    </button>
  )
}

export default Button
