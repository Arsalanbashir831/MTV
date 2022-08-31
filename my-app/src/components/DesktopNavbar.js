import React from 'react'
import "./Navbar.css";

import Button from '@mui/material/Button';

// you can change the logo 
import logo from "../assets/logo.svg"
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import {  Link } from "react-router-dom";
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
          <Link to='/Main'><img id='logo' src={logo} alt="" /></Link>
        </div>
        <div className="centerContainer ">
          {/* menu links  */}
          <ul className='nav-links'>

            <li> <Link style={{textDecoration:'none'}} className='nav-link' to='/'> HOME </Link> </li>
            <li><Link style={{textDecoration:'none'}} className='nav-link' to='/Channel'> CHANNEL </Link></li>
            <li className='nav-link'>SETUP</li>
            <li ><Link style={{textDecoration:'none'}} className='nav-link' to='/resellers'> RESELLERS </Link></li>
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
              <div id='click' onClick={() => handleChange()} className='hamburger-menu'>
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
            <div className="tool-nav">

              <i class="fa-solid fa-sun"></i>

            </div>
          </div>
        </div>


      </header>
{mobileActive?<MobileNavbar active="true"  clickhandler={() => handleChange()}  ></MobileNavbar>:<MobileNavbar clickhandler={() => handleChange()} active='false' ></MobileNavbar>}
      {/* <CSSTransition in={mobileActive}
       
        timeout={1000}0
        classNames={"slide"}
        unmountOnExit>
        <div key='zx' id='temp' onClick={() => { setMobileActive(false) }}><MobileNavbar></MobileNavbar> </div> 
        </CSSTransition> */}

    </>
  )
} 

export default DesktopNavbar
