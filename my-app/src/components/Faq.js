// import React from 'react'
//import arrow from "../assets/arrowAccordian.svg"
import React, { useRef, useState } from "react";
import arrow from "../assets/rightArrowImage.svg";
import Accordion from "./Accordian";
import "./Faq.css"



const Faq = () => {
    return (
        <div id="ccc_FAQ"><p class="ccc_title">FAQ</p>
       {/* div of the accordian */}
       <div className="v-item-group theme--light v-expansion-panels v-expansion-panels--accordion" >

       <Accordion></Accordion>
       <Accordion></Accordion>
       <Accordion></Accordion>
       <Accordion></Accordion>
       <Accordion></Accordion>
       </div>
       {/* <Accordion></Accordion> */}
        <div class="ccc_getAccess">
           
                <button class="ccc_btn">Get My Instant Access Now<img src={arrow} alt="arrow" /></button> <p class="ccc_notice">30-Days Money-Back Guarantee</p></div>
               
             
               
                </div>
    )
}

export default Faq