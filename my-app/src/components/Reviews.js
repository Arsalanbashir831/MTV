import React from 'react'
import star from '../assets/star.svg'
import trustStarts from "../assets/trustStars.svg"
import rating from "../assets/rating.svg";
import sponsor from "../assets/sponsorLogo.svg";
import arrow from "../assets/rightArrowImage.svg";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import 'swiper/css/scrollbar';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Reviews.css";

// import required modules
// import { Navigation } from "swiper";
import ReviewCard from './ReviewCard';

const ReviewsData=[{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
},
{
  days:'1',
  title:"Very Nice",
  subtitle:"“I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.”" ,
  author :"Nabeel"
}





]


const Reviews = () => {
    const swipe = useSwiper();
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
<div id='reviewSlick'>
<button  type="button" class=" review-swiper-button-prev ccc_arrow v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"><span class="  v-btn__content"><img className='navigator-icon' src={arrow} alt="shape"/></span></button>
<Swiper
      // install Swiper modules
      
      modules={[Navigation,Scrollbar,Autoplay]}
    draggable={true}
    navigation={{
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
      }}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false
    }}
   
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
   
{ReviewsData.map((data,index)=>{

  return(<>
  
  <SwiperSlide><ReviewCard days={data.days} author={data.author} title={data.title} subtitle={data.subtitle} ></ReviewCard></SwiperSlide>
  
  </>)
})}
   


    
   
         </Swiper>
         <button   type="button" class="review-swiper-button-next ccc_arrow v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"><span class="v-btn__content"><img className='navigator-icon' src={arrow} alt="shape"/></span></button> 
  
</div>

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