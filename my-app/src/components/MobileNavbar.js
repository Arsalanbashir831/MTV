import React from 'react'
import logo from '../assets/logo.svg'
import Button from '@mui/material/Button';
const MobileNavbar = () => {
  return (
    <>
      <div id="mob-navbar" className=''>
        <div className='upper-Container' >
          <ul className=' nav-links mob-nav-links'>
            {/* LOGO */}
            <img className='mob-logo' src={logo} alt="logo" />
            {/* NAV LINKS */}
            <li className='nav-link mob-nav-link' >HOME</li>
            <li className='nav-link mob-nav-link'>CHANNELS</li>
            <li className='nav-link mob-nav-link'>SETUP</li>
            <li className='nav-link mob-nav-link'>RESELLERS</li>
          </ul>
          <hr className='mob-hr'></hr>
          <div className='lower-container buttons'>
            <div className='end-nav btn-grp-mob'>
              <Button className=' login-btn btn-mob' variant="contained">Log in</Button>
              <Button className='order-btn  btn-mob' variant="contained">Order Now</Button>
            </div>
            <div className='tool-nav mob-icon'>
              <div className="switchMode">

                <i className="fa-solid fa-moon"></i> <p className='mode-text'>Dark Mode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar