import React from 'react'
import  "./Navbar.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// you can change the logo 
import logo from "../assets/logo.svg"
import { useState } from 'react';

//let greenBtnbg=getComputedStyle(document.documentElement).getPropertyValue('--green-button-bg');

const DesktopNavbar = () => {
 const [navbar,setNavbar]=useState(false);

 const changeNavBg=()=>{
if (window.scrollY>0) {
  setNavbar(true);
}else{
  setNavbar(false);
}
 }
 window.addEventListener('scroll',changeNavBg);
  return (
   <>
    <header  id="navbar" className={navbar?`is-pinned`:` `}>
    <div className="leftContainer">
        {/* logo */}
        <img id='logo' src={logo} alt="" />

    </div>
    <div className="centerContainer">
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
    <div className="buttons">
      <div className="end-nav">
      <Button className=' login-btn'  variant="contained">Login</Button>
      <Button className='order-btn'  variant="contained">Order Now</Button>
        {/* <button id='login-btn' >LOGIN</button>
        <button id='order-btn' >ORDER NOW</button> */}
      </div>
      <div className="tool-nav">
      <i class="fa-solid fa-moon"></i>
      </div>
    </div>
    </div>
   
    </header>
   </>
  )
}

export default DesktopNavbar
