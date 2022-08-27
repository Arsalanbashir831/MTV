import React from 'react'
import "./Navbar.css";

import Button from '@mui/material/Button';

// you can change the logo 
import logo from "../assets/logo.svg"
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

//let greenBtnbg=getComputedStyle(document.documentElement).getPropertyValue('--green-button-bg');

const DesktopNavbar = () => {
  const [mobileActive, setMobileActive] = useState(false)
  
  function handleChange() {
    setMobileActive(!mobileActive);
  }
  return (
    <>
      <header id="navbar" >
        <div className="leftContainer">
          {/* logo */}
          <img id='logo' src={logo} alt="" />

        </div>
        <div className="centerContainer ">
          {/* menu links  */}
          <ul className='nav-links'>

            <li className='nav-link' >HOME</li>
            <li className='nav-link'>CHANNELS</li>
            <li className='nav-link'>SETUP</li>
            <li className='nav-link'>RESELLERS</li>
          </ul>
        
          {/* <Stack spacing={1} direction="row">
      <Button className=' login-btn'  variant="contained">Login</Button>
      <Button className='order-btn'  variant="contained">Order Now</Button>
      <i class="fa-solid fa-moon"></i>
    </Stack> */}
        </div>
        <div className='rightContainer'>
          <div className="buttons">
            <div className="end-nav">
              <Button className=' login-btn' variant="contained">Log in</Button>
              <Button className='order-btn' variant="contained">Order Now</Button>
              {/* <button id='login-btn' >LOGIN</button>
        <button id='order-btn' >ORDER NOW</button> */}
        <div id='click' onClick={()=>handleChange()} className='hamburger-menu'>
        <i  class="fa-solid fa-bars"></i>
        </div>
            </div>
            <div className="tool-nav">
              <i class="fa-solid fa-moon"></i>
            </div>
          </div>
        </div>

      </header>

      {mobileActive ? <div onClick={()=>{setMobileActive(!mobileActive)}}><MobileNavbar></MobileNavbar> </div> : console.log("hello") }
    </>
  )
}

export default DesktopNavbar
