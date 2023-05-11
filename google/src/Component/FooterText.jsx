import React from 'react';
import "../styles/Footer.css";
import googleLeave from "../Images/leave.png"

const FooterText = () => {
  return (
    <div className='footerText-div'>
      <img src={googleLeave} alt="a leave icon" className='google-leave'/>
      <p>Carbon neutral since 2007</p>
    </div>
  )
}

export default FooterText
