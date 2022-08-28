import React from 'react'
import star from '../assets/star.svg'
import trustStarts from "../assets/trustStars.svg"
import rating from "../assets/rating.svg";
import sponsor from "../assets/sponsorLogo.svg";
import arrow from "../assets/rightArrowImage.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Reviews.css";

// import required modules
import { Navigation } from "swiper";

const Reviews = () => {
  return (
    <div id='ccc_reviews'>
        <div className='ccc_container'>
            <div className='ccc_stars'>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
            <p className='ccc_title'>A Five-Star IPTV Experience</p>
            <h2 className='ccc_subtitle'>
            See why people love our fast, simple, and easy-to-use IPTV service for all devices.
            <br></br>
            Based on thousands of reviews. Check out some of the reviews here.
            </h2>
            
{/*code of container of sliders will be  here  */}

<div className='ccc_summary'>
    <p className='ccc_word'>Excellent</p>
    <div className='ccc_truststars'>
        <img src={trustStarts}></img>
        <img src={trustStarts}></img>
        <img src={trustStarts}></img>
        <img src={trustStarts}></img>
        <img src={trustStarts}></img>
    </div>
    <img src={rating}></img>
    <img src={sponsor}></img>
</div>

<div className='ccc_getAccess'>
    <button className='ccc_btn'>
      Get My Instant Access Now
      <img src={arrow}></img>
    </button>
    <p class="ccc_notice">30-Days Money-Back Guarantee</p>
</div>




            </div>
        </div>
    
  )
}

export default Reviews