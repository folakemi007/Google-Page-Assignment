import React from 'react'
import "../styles/SearchSection.css"


const LanguageLink = () => {
  return (
    <div className='language-div'>
      Google offered in: <a href='#hausa' className='language-link'>Hausa</a>
      <a href='#Igbo' className='language-link'>Igbo</a>
      <a href='#Yoruba' className='language-link'>Èdè Yorùbá</a>
      <a href='#pidgin' className='language-link'> Nigerian Pidgin</a>
    </div>
  )
}

export default LanguageLink