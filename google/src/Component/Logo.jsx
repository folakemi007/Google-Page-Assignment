import React from 'react'
import googleLogo from "../Images/Google-logo.png";
import "../styles/SearchSection.css"

const Logo = () => {
  return (
    <div className='logo-div'>
      <img src={googleLogo} alt ="A google logo"   className='google-logo'/>
    </div>
  )
}

export default Logo
