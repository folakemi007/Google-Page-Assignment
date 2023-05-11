
import React from 'react'
import Location from "../Component/Location"
import MenuItem from "./MenuItem";
import FooterText from './FooterText';
import "../styles/Footer.css"



const Footer = () => {
  return (
    <div className='footer-container'>
          <Location />
        <div className='buttom-footer'>
              <div className='left-footer'>
                <MenuItem  text= {"About"} link={"#about"}/>
                <MenuItem  text= {"Advertising"} link={"#advertising"}/>
                <MenuItem  text= {"Business"} link={"#business"}/>
                <MenuItem  text= {"How Search works"} link={"#Search"}/>
              </div>
            <FooterText/>
            <div className='right-footer'>
                  <MenuItem  text= {"About"} link={"#about"}/>
                    <MenuItem  text= {"Advertising"} link={"#advertising"}/>
                    <MenuItem  text= {"Business"} link={"#business"}/>
            </div>
        
        </div>
          
        
    </div>
  )
}

export default Footer







