import React from 'react'
import './Main.css';
import logo from "../assets/logo.svg"
import website from '../assets/websiteIcon.svg';
import userIcon from '../assets/userIcon.svg';
import checkout from '../assets/checkout-icon.svg';
const Main = () => {
  return (
    <div id="ccc_home"><div className="ccc_container"><img src={logo} alt="logo" className="ccc_logo"/> <h1 className="ccc_title">
      Welcome to the official cccambox proxy, if our website main url is not
      available in google you can then use one of the links below to access
      our services. Enjoy 🎉
    </h1> <div className="ccc_choices"><a href="#" ><button className="ccc_choice"><div className="ccc_container"><img src={website} alt="choice" className="ccc_img"/> <p className="ccc_title">Website</p></div></button></a><a href="#" ><button className="ccc_choice"><div className="ccc_container"><img src={userIcon}  alt="choice" className="ccc_img"/> <p className="ccc_title">Members Area</p></div></button></a><a href="#" ><button className="ccc_choice"><div className="ccc_container"><img src={checkout} alt="choice" className="ccc_img"/> <p className="ccc_title">Checkout</p></div></button></a></div></div></div>
  )
}

export default Main