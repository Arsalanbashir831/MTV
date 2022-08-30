// import React from 'react'
//import arrow from "../assets/arrowAccordian.svg"
import React, { useRef, useState } from "react";
import arrow from "../assets/rightArrowImage.svg";
import Accordion from "./Accordian";
import "./Faq.css"

const FAQ = [
    {
        FaqId: "1",
        question: "How many channels & VOD do you provide?",
        answer: "CCCAMBOX TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    },
    {
        FaqId: "2",
        question: "How many channels & VOD do you provide?",
        answer: "CCCAMBOX TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    },
    {
        FaqId: "3",
        question: "How many channels & VOD do you provide?",
        answer: "CCCAMBOX TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    },
    {
        FaqId: "4",
        question: "How many channels & VOD do you provide?",
        answer: "CCCAMBOX TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    },
    {
        FaqId: "5",
        question: "How many channels & VOD do you provide?",
        answer: "CCCAMBOX TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    },
    {
        FaqId: "6",
        question: "How many channels & VOD do you provide?",
        answer: "CCCAMBOX TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    }

]




const Faq = () => {

    const [expanded, setExpanded] = React.useState(-1);

    const handleChange = (index) => {
        if (expanded === index){
            setExpanded(-1)
        }
        else
            setExpanded(index);
    };

    return (
        <div id="ccc_FAQ"><p class="ccc_title">FAQ</p>
            {/* div of the accordian */}
            <div className="v-item-group theme--light v-expansion-panels v-expansion-panels--accordion" >
                {FAQ.map((data, index) => {
                    return (<div onClick={()=>{handleChange(index)}}>
                        <Accordion id={index} activated={index===expanded} question={data.question} answer={data.answer} key={index} ></Accordion>

                    </div>)
                })}

            </div>
            {/* <Accordion></Accordion> */}
            <div class="ccc_getAccess">

                <button class="ccc_btn">Get My Instant Access Now<img src={arrow} alt="arrow" /></button> <p class="ccc_notice">30-Days Money-Back Guarantee</p></div>



        </div>
    )
}

export default Faq