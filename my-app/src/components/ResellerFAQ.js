import React from 'react'
import Accordion from './Accordian';
import './Faq.css';
import './ResellerFAQ.css'
const FAQ = [
    {
        FaqId: "1",
        question: "How many channels & VOD do you provide? Reseller",
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
   

]

const ResellerFAQ = () => {

    const [expanded, setExpanded] = React.useState(-1);

    const handleChange = (index) => {
        if (expanded === index){
            setExpanded(-1)
        }
        else
            setExpanded(index);
    };
  return (
   <>
   
   <section id='ccc_FAQ'>
    <p className='ccc_title'>FAQ</p>
    {/* Accordian */}

    <div className="v-item-group theme--light v-expansion-panels v-expansion-panels--accordion" >
                {FAQ.map((data, index) => {
                    return (<div onClick={()=>{handleChange(index)}}>
                        <Accordion id={index} activated={index===expanded} question={data.question} answer={data.answer} key={index} ></Accordion>

                    </div>)
                })}

            </div>

    <div className='ccc_row'>
    <button class="ccc_btn">
        BECOME A RESELLER
        <span>Instant Access</span></button>
    </div>
   </section>
   </>
  )
}

export default ResellerFAQ