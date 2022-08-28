import React from 'react'
import dollar from "../assets/dollar.svg";
import mainImg2 from "../assets/infoCard2.webp"
import "./InfoCard2.css"
const InfoCard2 = () => {
    return (
        <section id='info2_Section'>
            <div class="ccc_container"><div class="ccc_column"><p class="ccc_title">
                EPG<span>in Most Channels</span></p> <h2 class="ccc_info">EPG is one of our most requested features and providing a full and updated EPG has been our priority since day one. We can proudly say that we have been able to cover the majority of our IPTV channels.</h2> <div class="ccc_joinus ccc_info2"><button class="join">
                    JOIN US NOW
                    <span>Instant Access</span></button> <div>
                        <img src={dollar} alt="moneyback" /> <p class="black">
                            30-Days Money-Back Guarantee
                        </p></div></div></div> <div class="ccc_column"><div><img src={mainImg2} class="ccc_app" lazy="loaded" /></div></div></div>
        </section>
    )
}

export default InfoCard2