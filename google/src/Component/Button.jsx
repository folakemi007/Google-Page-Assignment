import React from 'react'
import "../styles/SearchSection.css"

const Button = ({text}) => {
  return (
    <div className='button-div'>
      <button className='botton-text'>{text}</button>
    </div>
  )
}

export default Button